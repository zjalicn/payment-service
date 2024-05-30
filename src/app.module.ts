require('dotenv').config();

import { Module } from '@nestjs/common';
import { PaymentsModule } from './payments/payments.module';
import { StripeModule } from './stripe/stripe.module';
import { UsersModule } from './users/users.module';
import { CustomersModule } from './customers/customers.module';

@Module({
  imports: [
    StripeModule.forRoot(process.env.STRIPE_SECRET_KEY, {
      apiVersion: '2024-04-10',
    }),
    PaymentsModule,
    UsersModule,
    CustomersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
