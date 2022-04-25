import { Test, TestingModule } from '@nestjs/testing';
<<<<<<< HEAD:backend/src/order/orders.controller.spec.ts
import { OrdersController } from './orders.controller';

describe('OrdersController', () => {
  let controller: OrdersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrdersController],
    }).compile();

    controller = module.get<OrdersController>(OrdersController);
=======
import { AuthController } from './auth.controller';

describe('AuthController', () => {
  let controller: AuthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
    }).compile();

    controller = module.get<AuthController>(AuthController);
>>>>>>> 1c4ab76fb55c40f6a3cc1974d9eb682415ca1b6a:backend/src/auth/auth.controller.spec.ts
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
