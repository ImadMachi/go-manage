import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Bill } from './bill.entity';
import * as PDFDocument from 'pdfkit';
import fs from 'fs';
import { OrdersService } from 'src/order/orders.service';

@Injectable()
export class BillsService {
  constructor(@InjectRepository(Bill) private repo: Repository<Bill>, private ordersService: OrdersService) {}
  async create(orderId: number) {
    const invoice = await this.ordersService.findOrderDetailsForBill(orderId);
    const pdfBuffer: Buffer = await new Promise((resolve) => {
      const doc = new PDFDocument({
        bufferPages: true,
        margin: 50,
      });

      this.generateHeader(doc);
      this.generateCustomerInformation(doc, invoice);
      this.generateInvoiceTable(doc, invoice);

      doc.end();

      const buffer = [];
      doc.on('data', buffer.push.bind(buffer));
      doc.on('end', () => {
        const data = Buffer.concat(buffer);
        resolve(data);
      });
    });

    return pdfBuffer;
  }

  generateHeader(doc) {
    doc
      .image('dist/images/logo.png', 50, 45, { width: 50 })
      .fillColor('#444444')
      .fontSize(20)
      .text('GO MANAGE', 110, 57)
      .fontSize(10)
      .text('15 Guéliz', 200, 65, { align: 'right' })
      .text('New York, NY, 10025', 200, 80, { align: 'right' })
      .moveDown();
  }

  generateFooter(doc) {
    doc.fontSize(10).text('Payment is due within 15 days. Thank you for your business.', 50, 780, { align: 'center', width: 500 });
  }

  generateCustomerInformation(doc: typeof PDFDocument, invoice) {
    const shipping = {
      name: 'John Doe',
      address: '1234 Main Street',
      city: 'San Francisco',
      state: 'CA',
      country: 'US',
      postal_code: 94111,
    };

    doc
      .fontSize(20)
      .text('Invoice', 50, 160)
      .moveTo(50, 185)
      .lineTo(565, 185)
      .stroke()
      .fontSize(10)
      .text(`Invoice Number:`, 50, 200)
      .text(`${invoice.id}`, 170, 200)
      .text(`Invoice Date:`, 50, 215)
      .text(`${new Date().getDate()}/${new Date().getMonth() + 1}/${new Date().getFullYear()}`, 170, 215)
      .text(`Balance Due:`, 50, 230)
      .text(`${invoice.totalPrice}`, 170, 230)
      .text(shipping.name, 300, 200)
      .text(shipping.address, 300, 215)
      .text(`${shipping.city}, ${shipping.state}, ${shipping.country}`, 300, 230)
      .moveTo(50, 245)
      .lineTo(565, 245)
      .stroke()
      .moveDown();
  }

  generateTableRow(doc: typeof PDFDocument, y, c1, c2, c3, c4, c5) {
    doc
      .fontSize(10)
      .text(c1, 50, y)
      .text(c2, 150, y)
      .text(c3, 280, y, { width: 90, align: 'right' })
      .text(c4, 370, y, { width: 90, align: 'right' })
      .text(c5, 0, y, { align: 'right' })
      .moveTo(50, y + 15)
      .lineTo(570, y + 15)
      .stroke();
  }

  generateInvoiceTable(doc: typeof PDFDocument, invoice) {
    let i,
      invoiceTableTop = 330;
    const totalPrice = invoice.orderLines.reduce((acc, curr) => acc + curr.product.price * curr.qty, 0);

    //Table Header
    this.generateTableRow(doc, 330, 'Item', 'Description', 'Unit Price', 'Quantity', 'Total Price');

    for (i = 0; i < invoice.orderLines.length; i++) {
      const item = invoice.orderLines[i];
      const position = invoiceTableTop + (i + 1) * 30;
      this.generateTableRow(
        doc,
        position,
        item.product.title,
        item.product.description,
        `$${item.product.price}`,
        item.qty,
        `$${item.product.price * item.qty}`,
      );
    }
    doc
      .fontSize(12)
      // .text('', 50, invoiceTableTop + (i++ + 1) * 30, { align: 'right' })
      .text(`SUBTOTAL: $${totalPrice}`, 50, invoiceTableTop + (i++ + 1) * 30, { align: 'right' })
      .text(`VAT(${invoice.vat}%): $${(invoice.vat / 100) * totalPrice}`, 50, invoiceTableTop + (i++ + 1) * 30, { align: 'right' })
      .text(`TOTAL: $${totalPrice + totalPrice * (invoice.vat / 100)}`, 50, invoiceTableTop + (i++ + 1) * 30, { align: 'right' });
  }
}
