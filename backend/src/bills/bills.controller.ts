import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { BillsService } from './bills.service';
import { CreateBillDto } from './dto/create-bill.dto';
import { UpdateBillDto } from './dto/update-bill.dto';


@Controller('bills')
export class BillsController {
  constructor(private billService: BillsService) {}

  @Post()
  create(@Body() body: CreateBillDto) {
    return this.billService.create(body);
  }

  @Get('/id/:id')
  findByBill(id: number) {
    return this.billService.findByBill(id);
  }

  @Patch('/:id')
  update(@Param('id', ParseIntPipe) id: number, @Body() body: UpdateBillDto) {
    return this.billService.update(id, body);
  }

  @Delete('/id/:id')
  deleteUser(@Param('id') id: number) {
    return this.billService.deleteBill(id);
}
}