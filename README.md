# Cinemate

Cinemate is a cutting-edge web application that caters to movie enthusiasts and cinephiles alike. With its clean and intuitive interface, users can effortlessly browse through a comprehensive movie listing. It stands out in the business market by providing a platform not just for viewing movie details, but also for managing a personalized movie collection. Cinemate leverages the synergy of modern web technologies like Vue.js, Vite, and TailwindCSS enhanced with DaisyUI for its frontend, and utilizes Express.js and Prisma for its backend services, ensuring a scalable and maintainable infrastructure orchestrated by Terraform.

## Prerequisites

Before you begin, ensure the following prerequisites are met:

- Node.js
- npm
- Docker (for container execution, optional)
- Terraform

## Local Development

Follow these steps to set up Cinemate for local development:

### Clone the Repository

```bash
git clone https://github.com/Franky-Lim24/cinemate.git
```

### Environment Configuration

Duplicate the `example.env` file and rename it to `.env`. Modify the variables to suit your development environment.

```bash
cp example.env .env
```

### Backend Setup

Change to the backend directory and install dependencies:

```bash
cd backend
npm install
```

Run the Prisma migrations to set up your database schema:

```bash
npm run migrate
```

Start the backend server:

```bash
npm start
```

### Frontend Setup

Open a new terminal window, navigate to the frontend directory, and install dependencies:

```bash
cd frontend
npm install
```

Launch the development server:

```bash
npm run dev
```

The frontend will now be accessible through your local web browser.

## Deployment

Deploying Cinemate is streamlined with Terraform:

### Prepare for Deployment

Navigate to the infrastructure directory:

```bash
cd infrastructure
```

Create a `variables.tfvars` file to hold your deployment variables:

```bash
touch variables.tfvars
```

Initialize Terraform:

```bash
terraform init
```

Deploy your infrastructure:

```bash
terraform apply --auto-approve
```

Your application should now be deployed and publicly accessible.
