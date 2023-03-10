import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AccountsService } from './accounts.service';
import { AccountsController } from './accounts.controller';
import { Account, AccountSchema } from 'schemas/account.schema';

@Module({
  providers: [AccountsService],
  imports: [ MongooseModule.forFeature([{
    name: Account.name, schema: AccountSchema
  }])],
  controllers: [AccountsController]
})
export class AccountsModule {}
