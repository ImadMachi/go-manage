import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { CompteModule } from './compte/compte.module';
import { AccountModule } from './account/account.module';
import { CompteService } from './compte/compte.service';
import { CompteController } from './compte/compte.controller';
import { AccountsModule } from './accounts/accounts.module';
import { PackModule } from './pack/pack.module';
import { AccountsModule } from './accounts/accounts.module';

@Module({
  imports: [UserModule, CompteModule, AccountModule, AccountsModule, PackModule],
  controllers: [AppController, CompteController],
  providers: [AppService, CompteService],
})
export class AppModule {}
