import { Module } from '@nestjs/common';
import  { PaymentsService } from './payments.service';
import { PaymentsController } from './payments.controller';
import { StripeModule } from 'src/stripe/stripe.module';

@Module({
  imports: [],
  controllers: [PaymentsController],
  providers: [PaymentsService],
})
export class PaymentsModule {}
