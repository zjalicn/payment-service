require('dotenv').config();

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PaymentsModule } from './payments/payments.module';
import { StripeModule } from './stripe/stripe.module';
import { UsersModule } from './users/users.module';
import { CustomersModule } from './customers/customers.module';

@Module({
  imports: [
    StripeModule.forRoot(process.env.STRIPE_KEY, { apiVersion: '2024-04-10' }),
    PaymentsModule,
    UsersModule,
    StripeModule,
    CustomersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
