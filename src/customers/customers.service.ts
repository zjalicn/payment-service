import { Inject, Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import Stripe from 'stripe';
import { STRIPE_CLIENT } from 'src/stripe/constants';

@Injectable()
export class CustomersService {

  constructor(@Inject(STRIPE_CLIENT) private stripe: Stripe) { }

  create(createCustomerDto: CreateCustomerDto) {
    return this.stripe.customers.create(createCustomerDto);
  }

  findAll() {
    return this.stripe.customers.list();
  }

  findOne(id: string) {
    return this.stripe.customers.retrieve(id);
  }

  update(id: string, updateCustomerDto: UpdateCustomerDto) {
    return this.stripe.customers.update(id, updateCustomerDto);
  }

  remove(id: string) {
    this.stripe.customers.del(id)
  }
}
