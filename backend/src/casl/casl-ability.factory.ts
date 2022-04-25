import { Ability, AbilityBuilder, AbilityClass, ExtractSubjectType, InferSubjects } from '@casl/ability';
import { Injectable } from '@nestjs/common';
import { Action } from 'src/auth/enums/action.enum';
import { Role } from 'src/auth/enums/role.enum';
import { Pack } from 'src/packs/pack.entity';
import { User } from 'src/users/user.entity';

// Add subjects
type Subjects = InferSubjects<typeof User | typeof Pack> | 'all';

export type AppAbility = Ability<[Action, Subjects]>;

@Injectable()
export class CaslAbilityFactory {
  createForUser(user: User) {
    const { can, cannot, build } = new AbilityBuilder<Ability<[Action, Subjects]>>(Ability as AbilityClass<AppAbility>);

    if (String(user.roles) === String(Role.Admin)) {
      can(Action.Manage, 'all'); // read-write access to everything
    } else {
      can(Action.Read, 'all'); // read-only access to everything
      cannot(Action.Read, User);
    }

    // can(Action.Update, User, { email: user.email });

    // can(Action.Update, Pack, { authorId: user.id });
    // can(Action.Update, User, { id: user.id });

    return build({
      // Read https://casl.js.org/v5/en/guide/subject-type-detection#use-classes-as-subject-types for details
      detectSubjectType: (item) => item.constructor as ExtractSubjectType<Subjects>,
    });
  }
}
