import { Ability, AbilityBuilder, AbilityClass, ExtractSubjectType, InferSubjects } from '@casl/ability';
import { ForbiddenException, Injectable, UnauthorizedException } from '@nestjs/common';
import { Action } from 'src/auth/enums/action.enum';
import { Role } from 'src/auth/enums/role.enum';
import { Customer } from 'src/customer/customer.entity';
import { Order } from 'src/order/order.entity';
import { Pack } from 'src/packs/pack.entity';
import { Product } from 'src/products/product.entity';
import { Supplier } from 'src/suppliers/supplier.entity';
import { User } from 'src/users/user.entity';

// Add subjects
type Subjects = InferSubjects<typeof User | typeof Pack | typeof Customer | typeof Product | typeof Order | typeof Supplier> | 'all';

export type AppAbility = Ability<[Action, Subjects]>;

// function checkAbility(ability: Ability, user: Partial<User>, Action, customer: Customer) {
//   if (!ability.can(Action.Read, customer)) {
//     throw new ForbiddenException('Forbidden');
//   }
// }

@Injectable()
export class CaslAbilityFactory {
  createForUser(user: Partial<User>) {
    const { can, cannot, build } = new AbilityBuilder<Ability<[Action, Subjects]>>(Ability as AbilityClass<AppAbility>);

    if (String(user.roles) === String(Role.Admin)) {
      can(Action.Manage, 'all'); // read-write access to everything
    } else {
      cannot(Action.Read, User);
    }

    can(Action.Manage, Customer, { userId: user.id });
    can(Action.Manage, Product, { userId: user.id });
    can(Action.Manage, Supplier, { userId: user.id });

    //  can(Action.Manage, Order, { userId: user.id });

    // can(Action.Update, Pack, { authorId: user.id });
    // can(Action.Update, User, { id: user.id });

    return build({
      // Read https://casl.js.org/v5/en/guide/subject-type-detection#use-classes-as-subject-types for details
      detectSubjectType: (item) => item.constructor as ExtractSubjectType<Subjects>,
    });
  }
  createForCustomer(customer: Customer) {
    const { can, cannot, build } = new AbilityBuilder<Ability<[Action, Subjects]>>(Ability as AbilityClass<AppAbility>);

    can(Action.Manage, Order, { customerId: customer.id });

    //  can(Action.Manage, Order, { userId: user.id });

    // can(Action.Update, Pack, { authorId: user.id });
    // can(Action.Update, User, { id: user.id });

    return build({
      // Read https://casl.js.org/v5/en/guide/subject-type-detection#use-classes-as-subject-types for details
      detectSubjectType: (item) => item.constructor as ExtractSubjectType<Subjects>,
    });
  }
}
