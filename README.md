# Payment Service

## Prisma

New migration by running:

```
npx prisma migrate dev --name <NAME>
```

## .env setup

From your stripe account

```
STRIPE_PUB_KEY = publishable key
STRIPE_SECRET_KEY = secret key
```

From your database

```
DATABASE_URL
```
