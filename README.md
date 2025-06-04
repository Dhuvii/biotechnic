# Biotechnic Next.js 15 App

This repository contains the Biotechnic web application built with Next.js 15. This guide will walk you through the steps required to set up, configure, and run the application locally.

## 🚀 Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm or yarn
- Git
- A [MongoDB Atlas](https://www.mongodb.com/) account
- A [Sanity.io](https://www.sanity.io/) account

## 🔐 Environment Variables

Create a `.env.local` file in the root directory of the project and add the following variables:

```env
DATABASE_URL=<your-mongodb-url>

NEXT_PUBLIC_SANITY_DATASET=<your-dataset>
NEXT_PUBLIC_SANITY_PROJECT_ID=<your-project-id>
NEXT_PUBLIC_SANITY_API_VERSION=2023-12-01

HUKOT_EMAIL=<your-email>
HUKOT_PASSWORD=<your-email-password>
HUKOT_SMTP_HOST=<your-smtp-host>
HUKOT_SMTP_PORT=465
```

> Replace `<...>` placeholders with your actual values as outlined in the setup instructions below.

---

## 💠 Setup Instructions

### Step 1: Configure MongoDB

1. Sign up at [mongodb.com](https://www.mongodb.com/).
2. Create a new project and then "Build a Database" using the free Shared tier.
3. Once your cluster is ready:

   - Add a new database user with username and password.
   - Under **Network Access**, allow access from your IP (or allow from anywhere).
   - Connect to the cluster using "Connect your application".
   - Copy the provided connection string and replace `<USERNAME>`, `<PASSWORD>`, and `<DBNAME>` with your actual credentials.

4. Set the resulting string as `DATABASE_URL` in your `.env.local`.

### Step 2: Create a Sanity Project

1. Go to [sanity.io](https://www.sanity.io/) and sign up or log in.
2. Create a new project and a dataset (e.g., `production`).
3. Copy the following for your `.env.local`:

   - `NEXT_PUBLIC_SANITY_PROJECT_ID` from project settings.
   - `NEXT_PUBLIC_SANITY_DATASET` from the dataset name.

4. Use `2023-12-01` or another valid date as `NEXT_PUBLIC_SANITY_API_VERSION`.

### Step 3: Email Configuration

Set your email SMTP details in the environment variables:

- `HUKOT_EMAIL`: your email address
- `HUKOT_PASSWORD`: your email password
- `HUKOT_SMTP_HOST`: your email provider’s SMTP server
- `HUKOT_SMTP_PORT`: e.g., `465` (SSL) or `587` (TLS)

---

## 🧪 Running the App

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## ✅ Need Help?

If you encounter any issues:

- Double-check your `.env.local` variables.
- Ensure your MongoDB cluster allows your IP.
- Make sure all services (MongoDB, Sanity, email) are correctly configured.

Happy coding! ✨
