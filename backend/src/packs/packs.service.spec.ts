import { Test, TestingModule } from '@nestjs/testing';
<<<<<<< HEAD:backend/src/bills/bills.service.spec.ts
import { BillsService } from './bills.service';

describe('BillsService', () => {
  let service: BillsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BillsService],
    }).compile();

    service = module.get<BillsService>(BillsService);
=======
import { PacksService } from './packs.service';

describe('PacksService', () => {
  let service: PacksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PacksService],
    }).compile();

    service = module.get<PacksService>(PacksService);
>>>>>>> 1c4ab76fb55c40f6a3cc1974d9eb682415ca1b6a:backend/src/packs/packs.service.spec.ts
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
