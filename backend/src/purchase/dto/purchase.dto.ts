import { Expose, Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { PurchaseLineDto } from 'src/purchase-lines/dto/purchaseLineDto';
import { SupplierDto } from 'src/suppliers/dto/supplier.Dto';

export class PurchaseDto {
  @Expose()
  id: number;

  @Expose()
  creationDate: String;

  @Expose()
  supplierrId: number;

  @Type(() => SupplierDto)
  @ValidateNested()
  @Expose()
  supplier: SupplierDto;

  @Type(() => PurchaseLineDto)
  @ValidateNested()
  @Expose()
  purchaseLines: PurchaseLineDto[];
}
