# Jobber Shared

[![Publish Package to npmjs](https://github.com/rohanpradev/jobber-shared/actions/workflows/publish.yml/badge.svg)](https://github.com/rohanpradev/jobber-shared/actions/workflows/publish.yml)
[![CI](https://github.com/rohanpradev/jobber-shared/actions/workflows/main.yml/badge.svg)](https://github.com/rohanpradev/jobber-shared/actions/workflows/main.yml)

**Elevate your Node.js projects with this powerful shared package, empowering you with efficient file uploads to Cloudinary, robust error handling for Express applications, and streamlined logging through Pino.**

## Key Features

- **Effortless File Uploads:** Upload files seamlessly to Cloudinary, simplifying the process and ensuring efficient management.
- **Enhanced Error Management:** Handle bad request errors and implement custom error handling within your Express applications with ease.
- **Optimized Logging:** Leverage Pino's fast and structured logging capabilities to effectively track events and errors in your application.

## Installation

1. **Add the package using pnpm:**

   ```bash
   pnpm add @rohanpradev/jobber-shared
   ```

2. **View documentation using pnpm:**

   ```bash
   pnpm build-with-docs
   ```

## How to use

1. **To use the pino logger which also logs to elastic search:**

   ```bash
   import { pinoLogger } from '@rohanpradev/jobber-shared';

   const logger = pinoLogger(<your-elastic-search-url>, <logger-name>, <logger-level>)
   ```

## Configuration

- **Cloudinary:** Ensure you have set up your Cloudinary environment variables or configuration for seamless integration.
- **Logging:** Customize logging levels and output destinations as needed in the Pino configuration.

## Contributing

We welcome your contributions! Please follow the contributing guidelines outlined in the repository.

## License

This package is licensed under the MIT License.

## Additional Notes

- **Node.js Version:** This package requires Node.js version 20.x.x or higher.
- **Dependency Management:** This package uses pnpm for dependency management.
- **Documentation:** More detailed documentation and examples for each feature are available at [Link to documentation].

## Get Started Today!

Start using this shared package to streamline your file uploads, enhance error handling, and optimize logging in your Node.js projects.

**Thank you for choosing this package!**
