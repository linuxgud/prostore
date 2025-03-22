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
