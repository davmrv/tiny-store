# TinyStore

## Running project

1. Clone the project from Github
2. Install dependencies with `npm install`
3. Setup environment variables
    1. Rename or copy .env.example to .env
    2. Update the DATABASE_URL variable with the postgresql URL to the database
4. Go to `src` directory and run `npx prisma generate`
5. Run seeder with `npx prisma db seed`
5. Run the project with `npm run dev`
