import { Prisma } from '@prisma/client';

export class Customer implements Prisma.CustomerCreateInput {
  firstName: string;
  lastName: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}
