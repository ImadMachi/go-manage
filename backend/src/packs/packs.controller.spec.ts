import { Test, TestingModule } from '@nestjs/testing';
<<<<<<< HEAD:backend/src/bills/bills.controller.spec.ts
import { BillsController } from './bills.controller';


describe('BillsController', () => {
  let controller: BillsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BillsController],
    }).compile();

    controller = module.get<BillsController>(BillsController);
=======
import { PacksController } from './packs.controller';

describe('PacksController', () => {
  let controller: PacksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PacksController],
    }).compile();

    controller = module.get<PacksController>(PacksController);
>>>>>>> 1c4ab76fb55c40f6a3cc1974d9eb682415ca1b6a:backend/src/packs/packs.controller.spec.ts
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
