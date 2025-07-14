## SETUP

```bash
npx create-next-app@latest prostore --typescript --eslint
npm i next-themes
npx shadcn@latest init
npx shadcn@latest add dropdown-menu
npx shadcn@latest add sheet
npx shadcn@latest add card
npx shadcn@latest add badge
```

### DB

```bash
npm i -D prisma @prisma/client
npx prisma init
npx prisma generate
npx prisma migrate dev --name init
## UI
npx prisma studio
## SEED
npx tsx ./db/seed
## FIX SPELLING ERROR
npx prisma migrate dev --name fix

```

### TYPES AD SCHEMA VALIDATION

```bash
npm i zod
```

### SERVERLESS

```bash
npm i @neondatabase/serverless @prisma/adapter-neon ws
npm i -D @types/ws bufferutil
npx prisma generat
```

### AUTHENTICATION

#### Config URL

https://authjs.dev/getting-started/adapters/prisma

#### Update DB

```bash
npx prisma generate
npx prisma migrate dev --name add_user_based_tables
npm run dev
```

#### BCRYPT for seeding

```bash
npm i bcrypt-ts-edge
npx tsx ./db/seed
```

#### Next-auth

https://next-auth.js.org/providers/credentials

```bash
npm i next-auth@beta --legacy-peer-deps
npm i @auth/prisma-adapter
# NEXTAUTH_SECRET
openssl rand -base64 32
```

##### form

```bash
npx shadcn@latest add label input
```

##### Jest

```bash
npm i -D jest ts-jest ts-node @types/jest @types/node dotenv --legacy-peer-deps
npm init jest@latest

> prostore@0.1.0 npx
> create-jest


The following questions will help Jest to create a suitable configuration for your project

✔ Would you like to use Jest when running "test" script in "package.json"? … yes
✔ Would you like to use Typescript for the configuration file? … yes
✔ Choose the test environment that will be used for testing › node
✔ Do you want Jest to add coverage reports? … no
✔ Which provider should be used to instrument code for coverage? › v8
✔ Automatically clear mock calls, instances, contexts and results before every test? … yes
```

#### Stripe

```bash
npm i stripe @stripe/stripe-js @stripe/react-stripe-js
```
