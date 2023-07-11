# Showroom-Template

Welcome to the README file of the **Showroom-Template** repository. This repository contains the source code for a multitenant storefront built with Next.js and TypeScript. It enables you to control multiple stores from the [dashboard-template](https://github.com/Alexander-Fernandez-1997/dashboard-template) repository.

## Table of Contents

- [Overview](#overview)
- [Packages Used](#packages-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Overview

The **Showroom-Template** is a multitenant storefront application that allows you to manage multiple stores from a centralized dashboard. It is built using Next.js and TypeScript, which provide a powerful and scalable foundation for building modern web applications.

By utilizing the power of Next.js, you can benefit from server-side rendering, automatic code splitting, and an optimized build process. TypeScript adds static typing to the project, enhancing its maintainability and reducing the chance of introducing bugs.

## Packages Used

The project relies on several packages to provide additional functionality and integrations. Here is an overview of the main packages used:

- **Next.js** (v13.4): Next.js is a React framework that enables server-side rendering, automatic code splitting, and simplified routing. It helps build fast, scalable, and SEO-friendly web applications.

- **Drizzle ORM**: Drizzle ORM is an Object Relational Mapping library for Node.js. It simplifies working with databases by providing an intuitive API to perform CRUD operations and manage database relationships.

- **pg**: pg is a PostgreSQL client library for Node.js. It allows you to connect to a PostgreSQL database and interact with it using JavaScript or TypeScript.

- **Payment methods** We supports the following payment methods:

  - **Mercado Pago**: @mercadopago/sdk-react enables you to handle payment processing and manage transactions using Mercado Pago's APIs.

  - **PayPal**: @paypal/react-paypal-js (v7.8.2) allows you to integrate PayPal payments into your application. It simplifies the process of accepting payments using PayPal's APIs.

  - **Stripe**: @stripe/stripe-js (v1.54.1) provides a JavaScript library for integrating Stripe payments into your application. It enables you to handle secure payment transactions and manage customer subscriptions.

- **bcrypt** (v5.1.0): bcrypt is a library used for password hashing. It provides a secure way to store user passwords by applying a one-way hash function.

- **dotenv** (v16.1.4): dotenv is a zero-dependency module that loads environment variables from a `.env` file into `process.env`. It is useful for managing sensitive information like API keys and database credentials.

- **react-icons** (v4.6.0): react-icons is a collection of popular icon libraries as React components. It provides a wide range of icons that can be easily used in your application.

- **zustand** (v4.1.4): zustand is a small, fast, and scalable state management library for React applications. It provides a simple API to create and manage stateful stores that can be easily shared across components.

- **next-auth** (v4.22.1): next-auth is an authentication library for Next.js applications. It simplifies the implementation of authentication flows, including OAuth, JWT, and database-based authentication.

Please refer to the documentation of each package for more details on their usage and configuration.

## Installation

To set up the project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/Alexander-Fernandez-1997/Showroom-Template.git
   ```

2. Install the project dependencies using npm or yarn:

   ```bash
   cd Showroom-Template
   npm install
   # or
   yarn install
   ```

3. Create a `.env` file in the project root directory and add the necessary environment variables. Make sure to provide the required API keys, database credentials, and other configuration options.

4. Build and start the development server:

   ```bash
   npm run build
   npm run start
   # or
   yarn build
   yarn start
   ```

The application should now be running locally on your machine.

## Usage

Once the application is running, you can access it by navigating to [http://localhost:3000](http://localhost:3000) in your web browser. From there, you can explore the multitenant storefront and manage your stores using the [dashboard-template](https://github.com/Alexander-Fernandez-1997/dashboard-template).

The application supports multiple payment options, including Mercado Pago, PayPal, and Stripe. You can configure these payment providers by providing the necessary API keys and credentials in the `.env` file.

Feel free to customize the application to fit your specific requirements and extend its functionality as needed.

## Contributing

Contributions to this project are welcome. If you find any issues or have suggestions for improvements, please create a new issue or submit a pull request on the [GitHub repository](https://github.com/Alexander-Fernandez-1997/Showroom-Template).

When contributing, please follow the existing code style and provide clear and concise commit messages.

## License

This project is licensed under the [MIT License](LICENSE). You are free to modify and distribute the code as per the terms of this license.
