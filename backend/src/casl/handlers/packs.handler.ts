import { Action } from 'src/auth/enums/action.enum';
import { Pack } from 'src/packs/pack.entity';
import { AppAbility } from '../casl-ability.factory';
import { IPolicyHandler } from '../interfaces/policy.interface';

export class CreatePackPolicyHandler implements IPolicyHandler {
  handle(ability: AppAbility) {
    return ability.can(Action.Create, Pack);
  }
}

export class ManagePackPolicyHandler implements IPolicyHandler {
  handle(ability: AppAbility) {
    return ability.can(Action.Manage, Pack);
  }
}
