# [INFINIT](https://infinit-ecommerce.vercel.app/)

Ecommerce B2C donde puedes rentar un auto estes donde estes.

[![INFINIT](./src/assets/images/infinit.PNG)](https://infinit-ecommerce.vercel.app/)


## Tech Stack  (Stack tecnologico con su respectiva URL)

- **Framework:** [Next.js](https://nextjs.org)
- **Styling:** [Tailwind CSS](https://tailwindcss.com)
- **User Management:** [Clerk](https://clerk.com)
- **ORM:** [Prisma](https://www.prisma.io/)
- **UI Components:** [Emotion](https://emotion.sh/docs/introduction)
                     [MaterialUI](https://mui.com/)
- **Email:** [Nodemailer](https://nodemailer.com/)
- **File Uploads:** [AWS-S3](https://aws.amazon.com/es/s3/?nc=sn&loc=0)


## Features to be implemented  (Funciones a implementar e implementadas)

- [x] Authentication with **Google Auth**
- [x] File uploads with **AWS-S3**
- [x] Newsletter subscription with **Nodemailer**
- [x] ORM using **Prisma**
- [x] Database on **MySQL**
- [x] Storefront with products and categories
- [x] Seller and customer workflows

## Running Locally  (Paso para correr el proyecto localmente)

1. Clone the repository

   ```bash
   git clone https://github.com/castrojonathand/proyecto-integrador-ecommerce.git
   ```

2. Install dependencies using pnpm

   ```bash
   npm i
   ```

3. Copy the `.env.example` to `.env` and update the variables.

   ```bash
   cp .env-example .env
   ```

4. Start the development server

   ```bash
   npm run dev
   ```