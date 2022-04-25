import { Action } from 'src/auth/enums/action.enum';
import { Customer } from 'src/customer/customer.entity';

import { AppAbility } from '../casl-ability.factory';
import { IPolicyHandler } from '../interfaces/policy.interface';

export class CreateCustomerPolicyHandler implements IPolicyHandler {
  handle(ability: AppAbility) {
    return ability.can(Action.Create, Customer);
  }
}

export class ToggleIsActivePolicyHandler implements IPolicyHandler {
  handle(ability: AppAbility) {
    return ability.can(Action.Update, Customer);
  }
}
