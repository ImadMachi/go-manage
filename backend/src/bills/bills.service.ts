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
    const totalPrice = invoice.orderLines.reduce((acc, curr) => acc + curr.product.price * curr.qty, 0);

    const pdfBuffer: Buffer = await new Promise((resolve) => {
      const doc = new PDFDocument({
        bufferPages: true,
        margin: 50,
      });

      let steps = Math.floor(invoice.orderLines.length / 7);
      doc.on('pageAdded', () => {
        this.generateHeader(doc);
        this.generateCompanyInformation(doc, invoice);
        this.generateCustomerInformation(doc, invoice);
        this.generateFooter(doc, invoice);
      });

      this.generateHeader(doc);
      this.generateCompanyInformation(doc, invoice);
      this.generateCustomerInformation(doc, invoice);
      this.generateFooter(doc, invoice);

      for (let i = 0; i <= steps; i++) {
        // this.generateCustomerInformation(doc, invoice);
        const position = this.generateInvoiceTable(doc, invoice, i);
        if (i == steps) {
          this.generateTotal(doc, invoice, totalPrice, position);
        }

        if (i < steps) doc.addPage();
      }

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
    doc.image('dist/images/logo.png', 50, 45, { width: 100 }).moveDown();
  }

  generateCompanyInformation(doc: typeof PDFDocument, invoice) {
    doc
      .fontSize(10)
      .text(invoice.customer.user.companyName, 50, 160)
      .text(invoice.customer.user.address, 50, 175)
      .text(`${invoice.customer.user.city}, ${invoice.customer.user.country}`, 50, 190)
      .text(`Phone: ${invoice.customer.user.phone}`, 50, 205)
      .text(`Fix: ${invoice.customer.user.fix}`, 50, 220)
      .text(`Email: ${invoice.customer.user.email}`, 50, 235)
      .text(`Invoice N ${invoice.id}`, 50, 270)
      .text(`Emmission Date ${invoice.creationDate}`, 50, 285);
  }

  generateFooter(doc: typeof PDFDocument, invoice) {
    doc
      .moveTo(50, 650)
      .lineTo(565, 650)
      .stroke()
      .fontSize(10)
      .font('Helvetica-Bold')
      .text('Capital:', 220, 665)
      .font('Helvetica')
      .text('10000.00Dhs', 260, 665)
      .font('Helvetica-Bold')
      .text('Patence:', 325, 665)
      .font('Helvetica')
      .text('4003200', 370, 665)
      .font('Helvetica-Bold')
      .text('IF:', 150, 675)
      .font('Helvetica')
      .text('50358836', 165, 675)
      .font('Helvetica-Bold')
      .text('ICE:', 215, 675)
      .font('Helvetica')
      .text('002800326000079', 240, 675)
      .font('Helvetica-Bold')
      .text('RC:', 335, 675)
      .font('Helvetica')
      .text('116523', 355, 675)
      .font('Helvetica-Bold')
      .text('CNSS:', 400, 675)
      .font('Helvetica')
      .text('268336', 435, 675)
      .font('Helvetica-Bold')
      .text('Tèl:', 183, 685)
      .font('Helvetica')
      .text('+212 6 03 06 58 01', 199, 685)
      .font('Helvetica-Bold')
      .text('Email:', 297, 685)
      .font('Helvetica')
      .text('contact@gomanage.ma', 327, 685)
      .font('Helvetica-Bold')
      .text('www.gomanage.ma', 260, 695)
      .font('Helvetica');
  }

  generateCustomerInformation(doc: typeof PDFDocument, invoice) {
    const shipping = {
      name: 'John Doe',
      address: '1234 Main Street',
      city: 'San Francisco',
      country: 'US',
      phone: '0638928374',
    };

    doc
      .text(`Mr ${shipping.name}`, 450, 160)
      .text(`${shipping.address}`, 450, 175)
      .text(`${shipping.city}, ${shipping.country}`, 450, 190)
      .text(`${shipping.phone}`, 450, 205)
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

  generateInvoiceTable(doc: typeof PDFDocument, invoice, step: number) {
    let i,
      invoiceTableTop = 330;
    let j;

    //Table Header
    this.generateTableRow(doc, 330, 'Item', 'Description', 'Unit Price', 'Quantity', 'Total Price');

    for (i = step * 7, j = 0; i < (step + 1) * 7; i++, j++) {
      const item = invoice.orderLines[i];
      const position = invoiceTableTop + (j + 1) * 30;
      !!item &&
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
    return invoiceTableTop + (j++ + 1) * 30;
  }

  generateTotal(doc, invoice, totalPrice, position) {
    doc
      .fontSize(12)
      .text(`Paimement par Chèque`, 50, position + 1, { align: 'left' })
      .text(`Rib:03706`, 50, position + 14, { align: 'left' })
      .text(`Code Swift :17607`, 50, position + 29, { align: 'left' })
      .text(`IBAN: FR0 012 345 678 912 345 678 912 345`, 50, position + 44, { align: 'left' })
      .text(`SUBTOTAL: $${totalPrice}`, 50, position + 1, { align: 'right' })
      .text(`VAT(${invoice.vat}%): $${(invoice.vat / 100) * totalPrice}`, 50, position + 14, { align: 'right' })
      .text(`TOTAL: $${totalPrice + totalPrice * (invoice.vat / 100)}`, 50, position + 29, { align: 'right' })
      .text(`Cachet Signature`, 50, position + 44, { align: 'right' });
  }
}

// import { Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
// import { Bill } from './bill.entity';
// import * as PDFDocument from 'pdfkit';
// import fs from 'fs';
// import { OrdersService } from 'src/order/orders.service';

// @Injectable()
// export class BillsService {
//   constructor(@InjectRepository(Bill) private repo: Repository<Bill>, private ordersService: OrdersService) {}
//   async create(orderId: number) {
//     const invoice = await this.ordersService.findOrderDetailsForBill(orderId);

//     const pdfBuffer: Buffer = await new Promise((resolve) => {
//       const doc = new PDFDocument({
//         bufferPages: true,
//         margin: 50,
//       });

//       this.generateHeader(doc);
//       this.generateCustomerInformation(doc, invoice);
//       this.generateInvoiceTable(doc, invoice);
//       // this.generateFooter(doc);

//       doc.end();

//       const buffer = [];
//       doc.on('data', buffer.push.bind(buffer));
//       doc.on('end', () => {
//         const data = Buffer.concat(buffer);
//         resolve(data);
//       });
//     });

//     return pdfBuffer;
//   }

//   generateHeader(doc) {
//     doc.image('dist/images/logo.png', 270, 45, { width: 100 }).moveDown();
//   }

//   generateFooter(doc) {
//     doc.fontSize(10).text('Payment is due within 15 days. Thank you for your business.', 50, 710, { align: 'center', width: 500 });
//   }

//   generateCustomerInformation(doc: typeof PDFDocument, invoice) {
//     const shipping = {
//       name: 'John Doe',
//       address: '1234 Main Street',
//       city: 'San Francisco',
//       state: 'CA',
//       country: 'US',
//       postal_code: 94111,
//     };

//     doc
//       .fontSize(20)
//       .text('Invoice', 50, 160)
//       .moveTo(50, 185)
//       .lineTo(565, 185)
//       .stroke()
//       .fontSize(10)
//       .text(`Invoice Number:`, 50, 200)
//       .text(`${invoice.id}`, 170, 200)
//       .text(`Invoice Date:`, 50, 215)
//       .text(`${new Date().getDate()}/${new Date().getMonth() + 1}/${new Date().getFullYear()}`, 170, 215)
//       .text(`Balance Due:`, 50, 230)
//       .text(`${invoice.totalPrice}`, 170, 230)
//       .text(shipping.name, 300, 200)
//       .text(shipping.address, 300, 215)
//       .text(`${shipping.city}, ${shipping.state}, ${shipping.country}`, 300, 230)
//       .moveTo(50, 245)
//       .lineTo(565, 245)
//       .stroke()
//       .moveDown();
//   }

//   generateTableRow(doc: typeof PDFDocument, y, c1, c2, c3, c4, c5) {
//     doc
//       .fontSize(10)
//       .text(c1, 50, y)
//       .text(c2, 150, y)
//       .text(c3, 280, y, { width: 90, align: 'right' })
//       .text(c4, 370, y, { width: 90, align: 'right' })
//       .text(c5, 0, y, { align: 'right' })
//       .moveTo(50, y + 15)
//       .lineTo(570, y + 15)
//       .stroke();
//   }

//   generateInvoiceTable(doc: typeof PDFDocument, invoice) {
//     let i,
//       invoiceTableTop = 330;
//     const totalPrice = invoice.orderLines.reduce((acc, curr) => acc + curr.product.price * curr.qty, 0);

//     //Table Header
//     this.generateTableRow(doc, 330, 'Item', 'Description', 'Unit Price', 'Quantity', 'Total Price');

//     for (i = 0; i < invoice.orderLines.length; i++) {
//       const item = invoice.orderLines[i];
//       const position = invoiceTableTop + (i + 1) * 30;
//       !!item &&
//         this.generateTableRow(
//           doc,
//           position,
//           item.product.title,
//           item.product.description,
//           `$${item.product.price}`,
//           item.qty,
//           `$${item.product.price * item.qty}`,
//         );
//     }

//     doc
//       .fontSize(12)
//       .text(`SUBTOTAL: $${totalPrice}`, 50, invoiceTableTop + (i++ + 1) * 30, { align: 'right' })
//       .text(`VAT(${invoice.vat}%): $${(invoice.vat / 100) * totalPrice}`, 50, invoiceTableTop + (i++ + 1) * 30, { align: 'right' })
//       .text(`TOTAL: $${totalPrice + totalPrice * (invoice.vat / 100)}`, 50, invoiceTableTop + (i++ + 1) * 30, { align: 'right' });
//   }
// }
