import { Action } from 'src/auth/enums/action.enum';
import { Supplier } from 'src/suppliers/supplier.entity';

import { AppAbility } from '../casl-ability.factory';
import { IPolicyHandler } from '../interfaces/policy.interface';

export class CreateSupplierPolicyHandler implements IPolicyHandler {
  handle(ability: AppAbility) {
    return ability.can(Action.Create, Supplier);
  }
}

export class ToggleIsActivePolicyHandler implements IPolicyHandler {
  handle(ability: AppAbility) {
    return ability.can(Action.Update, Supplier);
  }
}
