import { Action } from 'src/auth/enums/action.enum';
import { User } from 'src/users/user.entity';
import { AppAbility } from '../casl-ability.factory';
import { IPolicyHandler } from '../interfaces/policy.interface';

export class ReadUserPolicyHandler implements IPolicyHandler {
  handle(ability: AppAbility) {
    return ability.can(Action.Read, User);
  }
}

// export class UpdateUserPolicyHandler implements IPolicyHandler {
//   constructor() {}
//   handle(ability: AppAbility) {
//     return ability.can(Action.Update, User);
//   }
// }

export class ToggleUserIsActivePolicyHandler implements IPolicyHandler {
  handle(ability: AppAbility) {
    return ability.can(Action.Update, User);
  }
}
