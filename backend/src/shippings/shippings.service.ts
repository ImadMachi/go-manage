import { Injectable } from '@nestjs/common';
import * as PDFDocument from 'pdfkit';
import { OrdersService } from 'src/order/orders.service';

@Injectable()
export class ShippingsService {
  constructor(private ordersService: OrdersService) {}
  async create(orderId: number) {
    const shipping = await this.ordersService.findOrderDetailsForBill(orderId);
    const totalPrice = shipping.orderLines.reduce((acc, curr) => acc + curr.product.price * curr.qty, 0);

    const pdfBuffer: Buffer = await new Promise((resolve) => {
      const doc = new PDFDocument({
        bufferPages: true,
        margin: 50,
      });

      let steps = Math.floor(shipping.orderLines.length / 7);
      doc.on('pageAdded', () => {
        this.generateHeader(doc);
        this.generateCompanyInformation(doc, shipping);
        this.generateCustomerInformation(doc, shipping);
        this.generateFooter(doc, shipping);
      });

      this.generateHeader(doc);
      this.generateCompanyInformation(doc, shipping);
      this.generateCustomerInformation(doc, shipping);
      this.generateFooter(doc, shipping);

      for (let i = 0; i <= steps; i++) {
        // this.generateCustomerInformation(doc, shipping);
        const position = this.generateInvoiceTable(doc, shipping, i);
        if (i == steps) {
          this.generateTotal(doc, shipping, totalPrice, position);
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
    doc.image('public/images/logo.png', 50, 45, { width: 100 }).moveDown();
  }

  generateCompanyInformation(doc: typeof PDFDocument, shipping) {
    doc
      .fontSize(10)
      .text(shipping.customer.user.companyName, 50, 160)
      .text(shipping.customer.user.address, 50, 175)
      .text(`${shipping.customer.user.city}, ${shipping.customer.user.country}`, 50, 190)
      .text(`Phone: ${shipping.customer.user.phone}`, 50, 205)
      .text(`Fix: ${shipping.customer.user.fix}`, 50, 220)
      .text(`Email: ${shipping.customer.user.email}`, 50, 235)
      .text(`Shipping N ${shipping.id}`, 50, 270)
      .text(`Emmission Date ${shipping.creationDate}`, 50, 285);
  }

  generateFooter(doc: typeof PDFDocument, shipping) {
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
  generateCustomerInformation(doc: typeof PDFDocument, quote) {
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

  generateInvoiceTable(doc: typeof PDFDocument, shipping, step: number) {
    let i,
      shippingTableTop = 330;
    let j;

    //Table Header
    this.generateTableRow(doc, 330, 'Item', 'Description', 'Unit Price', 'Quantity', 'Total Price');

    for (i = step * 7, j = 0; i < (step + 1) * 7; i++, j++) {
      const item = shipping.orderLines[i];
      const position = shippingTableTop + (j + 1) * 30;
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
    return shippingTableTop + (j++ + 1) * 30;
  }

  generateTotal(doc, shipping, totalPrice, position) {
    doc
      .fontSize(12)
      .font('Helvetica-Bold')

      .text(`Visa du Client`, 50, position + 1, { align: 'left' })
      .font('Helvetica')

      .text(`Reçu le:`, 50, position + 14, { align: 'left' })
      .text(`Cachet Signature`, 50, position + 31, { align: 'left' })

      .font('Helvetica-Bold')

      .text(`Visa du Fournisseur`, 30, position + 1, { align: 'right' })
      .font('Helvetica')

      .text(`Livre le:`, 20, position + 14, { align: 'right' });
  }
}
