import { Test, TestingModule } from '@nestjs/testing';
<<<<<<< HEAD:backend/src/order/orders.service.spec.ts
import { OrdersService } from './orders.service';

describe('OrdersService', () => {
  let service: OrdersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrdersService],
    }).compile();

    service = module.get<OrdersService>(OrdersService);
=======
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthService],
    }).compile();

    service = module.get<AuthService>(AuthService);
>>>>>>> 1c4ab76fb55c40f6a3cc1974d9eb682415ca1b6a:backend/src/auth/auth.service.spec.ts
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
