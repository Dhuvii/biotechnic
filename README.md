# DeepModel Agent Website Starter Kit

This starter kit powers landing pages for DeepModel AI, built with Next.js, React, TailwindCSS, and Sanity for content management. It provides a pre-configured foundation to showcase AI-driven features and offerings, enabling users to quickly deploy sleek, customizable pages for product promotions or demos.

## Table of Contents

- [Installation](#installation)
- [Development](#development)
- [Deployment](#deployment)
- [Environment Variables](#environment-variables)
- [Scripts](#scripts)
- [Technologies Used](#technologies-used)

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd dm-website
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

## Development

Start the development server:

```bash
npm run dev
```

The site will be available at [http://localhost:3000](http://localhost:3000).

## Deployment

### Google Cloud Platform (GCP) Deployment

The project includes custom pre-deploy and build scripts to manage file naming conventions that are incompatible with GCP:

- **Pre-deploy Script:** Renames files before deployment.
- **Build Script:** Restores file names after deployment.

Run the following command for deployment:

```bash
npm run build
```

## Environment Variables

Create a `.env` file in the project root and populate it with necessary environment variables.

To automatically generate an environment file, use:

```bash
npm run create-env
```

## Scripts

- `npm run dev`: Start the development server.
- `npm run build`: Build the project for production.
- `npm run start`: Start the production server.
- `npm run lint`: Run the linter.
- `npm run test`: Run unit tests using Vitest.
- `npm run test:ui`: Launch Vitest UI for test visualization.
- `npm run gcp-predeploy`: Prepare files for GCP deployment.
- `npm run gcp-build`: Restore file names after deployment.
- `npm run create-env`: Generate a `.env` file with current environment variables.
- `npm run create-diff`: Generate a diff file for changes excluding specified directories.

## Technologies Used

### Frontend

- **Framework:** Next.js
- **UI Components:** React, TailwindCSS
- **State Management:** Zustand
- **Forms:** React Hook Form, Zod for validation
- **Charts:** Recharts
- **Animations:** Framer Motion

### Backend

- **Content Management:** Sanity CMS

### Testing

- **Unit Testing:** Vitest

### Utilities

- **HTTP Requests:** Axios
- **Date Manipulation:** date-fns
- **Cookie Management:** js-cookie
