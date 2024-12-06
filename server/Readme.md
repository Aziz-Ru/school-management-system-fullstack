npm i -D typescript tsx @types/exress

node --import=tsx --env-file=.env src/index.ts

## Drizzle

npx drizzle-kit push

### migrations

npx drizzle-kit generate
npx drizzle-kit migrate

**More Convenient**

drizzle-kit generate:mysql/pg --schema ./path --out=./path
