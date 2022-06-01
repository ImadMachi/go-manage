import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Quote } from './quote.entity';
import * as PDFDocument from 'pdfkit';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductsService } from 'src/products/products.service';
import { CreateQuoteDto } from './dto/create-quote.dto';
import { User } from 'src/users/user.entity';
import { CustomerService } from 'src/customer/customer.service';
import { QuoteProductService } from 'src/quote-product/quote-product.service';

@Injectable()
export class QuotesService {
  constructor(
    @InjectRepository(Quote) private repo: Repository<Quote>,
    private productsService: ProductsService,
    private quoteProductService: QuoteProductService,
    private customerService: CustomerService,
  ) {}

  async delete(id: number) {
    const quote = await this.repo.findOne(id);
    if (!quote) {
      throw new Error('quote not found');
    }

    return this.repo.remove(quote);
  }

  findAll() {
    return this.repo
      .createQueryBuilder('quote')
      .leftJoinAndSelect('quote.customer', 'customer')
      .leftJoinAndSelect('quote.quoteProducts', 'quoteProducts')
      .leftJoinAndSelect('quoteProducts.product', 'product')
      .getMany();
  }

  async create(quoteDto: CreateQuoteDto, user: Partial<User>) {
    const customer = await this.customerService.findOne(quoteDto.customerId, user);

    const quote = this.repo.create(quoteDto);
    quote.customer = customer;
    await this.repo.save(quote);

    for (const item of quoteDto.products) {
      const product = await this.productsService.findOne(item.id, user);
      await this.quoteProductService.create(product, quote, item.qty);
    }
    return quote;
  }

  async print(quoteId: number, user: Partial<User>) {
    const quote = await this.productsService.findOne(quoteId, user);
    const totalPrice = quote.orderLines.reduce((acc, curr) => acc + curr.product.price * curr.qty, 0);

    const pdfBuffer: Buffer = await new Promise((resolve) => {
      const doc = new PDFDocument({
        bufferPages: true,
        margin: 50,
      });

      let steps = Math.floor(quote.orderLines.length / 7);
      doc.on('pageAdded', () => {
        this.generateHeader(doc);
        this.generateCompanyInformation(doc, quote);
        this.generateCustomerInformation(doc, quote);
        this.generateFooter(doc, quote);
      });

      this.generateHeader(doc);
      this.generateCompanyInformation(doc, quote);
      this.generateCustomerInformation(doc, quote);
      this.generateFooter(doc, quote);

      for (let i = 0; i <= steps; i++) {
        // this.generateCustomerInformation(doc, quote);
        const position = this.generateInvoiceTable(doc, quote, i);
        if (i == steps) {
          this.generateTotal(doc, quote, totalPrice, position);
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

  generateCompanyInformation(doc: typeof PDFDocument, quote) {
    doc
      .fontSize(10)
      .text(quote.customer.user.companyName, 50, 160)
      .text(quote.customer.user.address, 50, 175)
      .text(`${quote.customer.user.city}, ${quote.customer.user.country}`, 50, 190)
      .text(`Phone: ${quote.customer.user.phone}`, 50, 205)
      .text(`Fix: ${quote.customer.user.fix}`, 50, 220)
      .text(`Email: ${quote.customer.user.email}`, 50, 235)
      .text(`Quote N ${quote.id}`, 50, 270)
      .text(`Emmission Date ${quote.creationDate}`, 50, 285);
  }

  generateFooter(doc: typeof PDFDocument, quote) {
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

  generateInvoiceTable(doc: typeof PDFDocument, quote, step: number) {
    let i,
      quoteTableTop = 330;
    let j;

    //Table Header
    this.generateTableRow(doc, 330, 'Item', 'Description', 'Unit Price', 'Quantity', 'Total Price');

    for (i = step * 7, j = 0; i < (step + 1) * 7; i++, j++) {
      const item = quote.orderLines[i];
      const position = quoteTableTop + (j + 1) * 30;
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
    return quoteTableTop + (j++ + 1) * 30;
  }

  generateTotal(doc, quote, totalPrice, position) {
    doc
      .fontSize(12)

      .text(`SUBTOTAL: $${totalPrice}`, 50, position + 1, { align: 'right' })
      .text(`VAT(${quote.vat}%): $${(quote.vat / 100) * totalPrice}`, 50, position + 14, { align: 'right' })
      .text(`TOTAL: $${totalPrice + totalPrice * (quote.vat / 100)}`, 50, position + 29, { align: 'right' })
      .text(`Cachet Signature`, 50, position + 44, { align: 'right' });
  }
}
