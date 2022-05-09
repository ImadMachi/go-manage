import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from 'src/auth/auth.controller';
import { OrdersController } from './orders.controller';

describe('OrdersController', () => {
  let controller: OrdersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrdersController],
    }).compile();

    controller = module.get<OrdersController>(OrdersController);

    describe('AuthController', () => {
      let controller: AuthController;

      beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
          controllers: [AuthController],
        }).compile();

        controller = module.get<AuthController>(AuthController);
      });

      it('should be defined', () => {
        expect(controller).toBeDefined();
      });
    });
  });
});
