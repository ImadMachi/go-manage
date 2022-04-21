import { Action } from 'src/auth/enums/action.enum';
import { Pack } from 'src/pack/pack.entity';
import { AppAbility } from '../casl-ability.factory';
import { IPolicyHandler } from '../interfaces/policy.interface';

export class ReadPackPolicyHandler implements IPolicyHandler {
  handle(ability: AppAbility) {
    return ability.can(Action.Read, Pack);
  }
}
