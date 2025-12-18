# 📡 Signal - Modern Social Platform

[![Angular](https://img.shields.io/badge/Angular-v21.0.5-DD0031?logo=angular&logoColor=white)](https://angular.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-v5.9.2-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

> **Note:** This project is currently under active development.

Signal is a modern, responsive social media platform built with Angular 21, featuring real-time posts, user authentication, and interactive content. Connect with friends, share moments, and engage with a clean, responsive interface. The application follows the latest Angular best practices, including standalone components, signals for state management, and a modular architecture.

## ✨ Features

### 🔐 Authentication & Security

- **User Authentication**
  - Secure JWT-based authentication with HttpOnly cookies
  - Role-based access control (RBAC)
  - Password hashing and salting
  - Account recovery options
  - Session management with refresh tokens

### 📝 Posts & Content

- **Rich Content Creation**
  - Create, edit, and delete posts
  - Support for text, images, and embedded content
  - Draft saving and auto-save functionality
  - Post scheduling
  - Hashtag and mention support

### 💬 Interactions

- **Engagement Features**
  - Like, comment, and share posts
  - Nested comments with threading
  - Real-time notifications
  - Bookmark/save posts
  - Report inappropriate content

### 👤 User Profiles

- **Personalization**
  - Customizable profiles with bio and links
  - Profile picture and cover photo uploads
  - Activity feed and post history
  - Follower/Following system
  - Privacy settings

### 🎨 UI/UX

- **Design & Experience**
  - Fully responsive design (mobile, tablet, desktop)
  - Dark/Light theme support
  - Keyboard shortcuts
  - Loading states and skeleton screens
  - Accessible components (WCAG 2.1 compliant)
  - Smooth animations with Angular animations

### 🚀 Performance

- **Optimizations**
  - Lazy-loaded feature modules
  - Image optimization and lazy loading
  - Efficient state management with Angular Signals
  - Code splitting and tree-shaking
  - Service worker for offline capabilities

### 🛠 Developer Experience

- **Development Tools**
  - Comprehensive TypeScript support
  - ESLint and Prettier for code quality
  - Husky git hooks
  - Commitizen for consistent commit messages
  - Automated testing with Jest and Cypress

## 🛠️ Tech Stack

- **Frontend Framework**: Angular 21
- **Styling**: Tailwind CSS 4 with Flowbite components
- **State Management**: Angular Signals
- **HTTP Client**: Angular HttpClient with interceptors
- **Authentication**: JWT with HttpOnly cookies
- **UI Components**: Custom components with Angular standalone API
- **Build Tool**: Angular CLI
- **Package Manager**: npm / Yarn
- **Linting**: ESLint + Prettier

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ (LTS recommended)
- npm 9+ or Yarn 1.22+
- Angular CLI 21+

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Zeyusss/Signal.git
   cd Signal
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Configure environment:

   - Copy `src/environments/environment.example.ts` to `src/environments/environment.ts`
   - Update the configuration values as needed

4. Start the development server:

   ```bash
   npm start
   # or
   yarn start
   ```

5. Open your browser and navigate to `http://localhost:4200`

## 🏗 Project Structure

```
src/
├── app/
│   ├── core/                     # Core functionality
│   │   ├── guards/              # Route guards (auth, role-based, etc.)
│   │   ├── interceptors/        # HTTP interceptors (auth, error handling)
│   │   ├── layouts/             # Main application layouts
│   │   ├── models/              # Shared interfaces and types
│   │   └── services/            # Core services (API, auth, etc.)
│   │
│   ├── features/                # Feature modules (lazy-loaded)
│   │   ├── auth/                # Authentication flows
│   │   │   ├── components/      # Auth components (login, register, etc.)
│   │   │   └── services/        # Auth-specific services
│   │   │
│   │   ├── timeline/            # Post timeline and feed
│   │   │   ├── components/      # Timeline components
│   │   │   └── services/        # Timeline data services
│   │   │
│   │   ├── profile/             # User profiles
│   │   │   ├── components/      # Profile components
│   │   │   └── services/        # Profile data services
│   │   │
│   │   └── details-post/        # Post details and comments
│   │
│   ├── shared/                  # Shared resources
│   │   ├── components/          # Reusable UI components
│   │   │   ├── create-comment/  # Comment creation component
│   │   │   ├── create-post/     # Post creation component
│   │   │   ├── footer/          # Application footer
│   │   │   ├── navbar/          # Navigation bar
│   │   │   ├── single-comment/  # Individual comment component
│   │   │   ├── single-post/     # Individual post component
│   │   │   └── skeletons/       # Loading skeleton components
│   │   │
│   │   └── pipes/               # Custom pipes
│   │
│   ├── app.routes.ts            # Application routes configuration
│   └── app.config.ts            # Application configuration
│
├── assets/                      # Static assets (images, fonts, etc.)
└── environments/                # Environment configurations
```

## 🧩 Core Features in Detail

### Authentication System

- JWT-based authentication with refresh tokens
- Role-based access control (RBAC)
- Social login integration (Google, Facebook, etc.)
- Password reset and account recovery
- Session management

### Post Management

- Rich text editor with formatting options
- Image upload and optimization
- Post scheduling
- Draft saving
- Post engagement analytics

### User Experience

- Responsive design for all devices
- Dark/light theme support
- Keyboard navigation
- Offline support with service workers
- Push notifications

### Performance Optimizations

- Lazy loading of feature modules
- Image lazy loading with placeholders
- Virtual scrolling for long lists
- Optimized bundle size
- Efficient state management

## 🧪 Testing Strategy

### Unit Testing

- Component testing with TestBed
- Service testing with mocks
- Pipe and utility function testing
- Test coverage reporting

### E2E Testing

- Critical user flows
- Authentication testing
- Form validations
- API integration tests

### Performance Testing

- Lighthouse audits
- Bundle size analysis
- Load testing for critical paths

## 🔒 Environment Configuration

Create or update `src/environments/environment.ts`:

```typescript
// Development environment
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses 'environment.ts',
// but if you do `ng build --configuration=production` then `environment.prod.ts` will be used instead.

export const environment = {
  production: false,
  // API Configuration
  api: {
    baseUrl: 'https://api.yourdomain.com/v1',
    timeout: 30000, // 30 seconds
    retry: 3, // Number of retry attempts for failed requests
  },

  // Authentication
  auth: {
    tokenKey: 'auth_token',
    refreshTokenKey: 'refresh_token',
    tokenExpirationKey: 'token_expiration',
    userKey: 'current_user',
  },

  // Feature Flags
  features: {
    enableAnalytics: false,
    enableExperimentalFeatures: false,
  },

  // External Services
  services: {
    googleAnalyticsId: 'YOUR_GA_ID',
    sentryDsn: 'YOUR_SENTRY_DSN',
  },

  // UI Configuration
  ui: {
    defaultTheme: 'light', // 'light' | 'dark' | 'system'
    enableAnimations: true,
    itemsPerPage: 10,
  },

  // Version Information
  version: '0.1.0',
  build: 'dev',
};
```

For production, create `environment.prod.ts` with production-specific settings:

```typescript
export const environment = {
  production: true,
  api: {
    baseUrl: 'https://api.production.com/v1',
    timeout: 60000,
    retry: 2,
  },
  features: {
    enableAnalytics: true,
    enableExperimentalFeatures: false,
  },
  // ... other production-specific settings
};
```

### Environment Variables

| Variable                   | Description                                   | Default        |
| -------------------------- | --------------------------------------------- | -------------- |
| `production`               | Whether the app is running in production mode | `false`        |
| `api.baseUrl`              | Base URL for API requests                     | `''`           |
| `api.timeout`              | API request timeout in milliseconds           | `30000`        |
| `api.retry`                | Number of retry attempts for failed requests  | `3`            |
| `auth.tokenKey`            | Local storage key for auth token              | `'auth_token'` |
| `features.enableAnalytics` | Toggle for analytics features                 | `false`        |
| `ui.defaultTheme`          | Default UI theme                              | `'light'`      |
| `version`                  | Application version                           | `'0.1.0'`      |

## 🧪 Testing

### Unit Tests

Run unit tests with code coverage:

```bash
# Run all unit tests
npm test

# Run tests in watch mode
ng test --watch=true

# Generate coverage report
ng test --code-coverage
```

### E2E Tests

Run end-to-end tests with Cypress:

```bash
# Run in headless mode
ng e2e

# Open Cypress test runner
ng e2e --watch

# Run specific test file
ng e2e --spec=cypress/e2e/login.cy.ts
```

### Testing Best Practices

1. **Component Testing**

   - Test component inputs/outputs
   - Test template bindings
   - Test DOM interactions

2. **Service Testing**

   - Mock HTTP requests
   - Test error handling
   - Test service methods

3. **E2E Testing**

   - Test critical user journeys
   - Test authentication flows
   - Test form validations

4. **Performance Testing**
   - Run Lighthouse audits
   - Monitor bundle size
   - Test with WebPageTest

### Testing Libraries

- **Unit Testing**

  - [Jest](https://jestjs.io/) - Test runner and assertion library
  - [@testing-library/angular](https://testing-library.com/docs/angular-testing-library/intro) - For testing Angular components
  - [ng-mocks](https://ng-mocks.sudo.eu/) - For mocking Angular services

- **E2E Testing**

  - [Cypress](https://www.cypress.io/) - End-to-end testing
  - [Cypress Testing Library](https://testing-library.com/docs/cypress-testing-library/intro) - For better selectors

- **Visual Regression**

  - [Percy](https://percy.io/) - Visual testing
  - [Storybook](https://storybook.js.org/) - Component development environment

- **Performance**
  - [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci) - Automated performance testing
  - [Web Vitals](https://web.dev/vitals/) - Core Web Vitals monitoring

## 🚀 Production Build & Deployment

### Building for Production

```bash
# Build with production configuration
npm run build

# Build with production configuration and source maps
npm run build:prod

# Analyze bundle size
npm run analyze

# Run production build locally
npm run start:prod
```

### Deployment

#### Prerequisites

- Node.js 18+ installed
- Nginx or similar web server
- PM2 for process management (optional)

#### Deployment Steps

1. **Build the application**

   ```bash
   npm install
   npm run build
   ```

2. **Configure Web Server (Nginx Example)**

   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;
       root /path/to/signal/dist/signal;
       index index.html;

       location / {
           try_files $uri $uri/ /index.html;
       }

       # API proxy
       location /api {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

3. **Set Up PM2 (Optional)**

   ```bash
   # Install PM2 globally
   npm install -g pm2

   # Start the application
   pm2 start npm --name "signal" -- start

   # Save process list
   pm2 save
   pm2 startup
   ```

### Environment Variables

For production, set the following environment variables:

```bash
# .env.production
NODE_ENV=production
API_URL=https://api.yourdomain.com
ENABLE_ANALYTICS=true
```

### CI/CD Pipeline

Example GitHub Actions workflow (`.github/workflows/deploy.yml`):

```yaml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3

      - name: Set up Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Run tests
        run: npm test

      - name: Build for production
        run: npm run build:prod

      - name: Deploy to server
        uses: appleboy/ssh-action@master
        with:
          host: ${{ secrets.SSH_HOST }}
          username: ${{ secrets.SSH_USERNAME }}
          key: ${{ secrets.SSH_PRIVATE_KEY }}
          script: |
            cd /var/www/signal
            git pull origin main
            npm ci --production
            npm run build:prod
            pm2 restart signal
```

## 🤝 Contributing

We welcome contributions from the community! Before you get started, please read our [Code of Conduct](CODE_OF_CONDUCT.md) and [Contributing Guidelines](CONTRIBUTING.md).

### How to Contribute

1. **Fork the Repository**

   - Click 'Fork' on the GitHub repository
   - Clone your forked repository

   ```bash
   git clone https://github.com/your-username/Signal.git
   cd Signal
   ```

2. **Set Up Development Environment**

   ```bash
   # Install dependencies
   npm install

   # Install Git hooks
   npx husky install
   ```

3. **Create a Feature Branch**

   ```bash
   git checkout -b feature/amazing-feature
   ```

4. **Make Your Changes**

   - Follow the [Angular Style Guide](https://angular.io/guide/styleguide)
   - Write tests for new features
   - Update documentation as needed

5. **Commit Your Changes**

   ```bash
   # Stage your changes
   git add .

   # Commit with a descriptive message
   git commit -m "feat: add amazing feature"

   # Push to your fork
   git push origin feature/amazing-feature
   ```

6. **Open a Pull Request**
   - Go to the original repository
   - Click 'New Pull Request'
   - Follow the PR template
   - Wait for code review

### Development Workflow

- **Branch Naming**: `feature/`, `fix/`, `docs/`, `refactor/`, `test/`, `chore/`
- **Commit Message Format**:

  ```
  <type>(<scope>): <subject>
  <BLANK LINE>
  <body>
  <BLANK LINE>
  <footer>
  ```

  Example:

  ```
  feat(auth): add password reset functionality

  - Add password reset form component
  - Implement password reset service
  - Add unit tests

  Closes #123
  ```

### Code Review Process

1. Automated checks (tests, linting) must pass
2. At least one maintainer must approve the PR
3. All discussions must be resolved
4. PR must be up-to-date with the target branch

### Reporting Issues

Found a bug? Please open an issue with:

- Clear title and description
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable
- Browser/OS version

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments & Credits

### Core Technologies

- [Angular](https://angular.io/) - The web framework used
- [TypeScript](https://www.typescriptlang.org/) - For type-safe JavaScript
- [RxJS](https://rxjs.dev/) - For reactive programming
- [NgRx](https://ngrx.io/) - State management

### UI & Styling

- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Flowbite](https://flowbite.com/) - UI component library
- [Font Awesome](https://fontawesome.com/) - Icons
- [Angular Material](https://material.angular.io/) - Material Design components

### Development Tools

- [Angular CLI](https://cli.angular.io/) - Command line interface
- [ESLint](https://eslint.org/) - JavaScript/TypeScript linting
- [Prettier](https://prettier.io/) - Code formatting
- [Jest](https://jestjs.io/) - Testing framework
- [Cypress](https://www.cypress.io/) - End-to-end testing

### Infrastructure

- [GitHub Actions](https://github.com/features/actions) - CI/CD
- [Docker](https://www.docker.com/) - Containerization
- [Nginx](https://www.nginx.com/) - Web server
- [PM2](https://pm2.keymetrics.io/) - Process manager

### Special Thanks

- The Angular team for an amazing framework
- The open-source community for invaluable contributions
- All contributors who have helped improve this project

## 📬 Contact & Support

We'd love to hear from you! Here's how you can reach us:

- **GitHub Issues**: [Open an issue](https://github.com/Zeyusss/Signal/issues) for bug reports and feature requests
- **Discord**: Join our [community Discord](https://discord.gg/your-invite-link) for discussions
- **Email**: contact@yoursignalapp.com
- **Twitter**: [@SignalApp](https://twitter.com/SignalApp)

### Need Help?

Check out our [FAQ](docs/FAQ.md) or [documentation](docs/README.md) for common questions and guides.

### Security Issues

Please report security issues to security@yoursignalapp.com. We appreciate your help in keeping Signal secure!

---

<p align="center">
  Made with ❤️ by Zeyus
  <br>
  <a href="https://github.com/Zeyusss/Signal/graphs/contributors">
    <img src="https://contrib.rocks/image?repo=Zeyusss/Signal" alt="Contributors" />
  </a>
</p>

<p align="center">
  <a href="https://github.com/Zeyusss/Signal">
    <img src="https://img.shields.io/github/stars/Zeyusss/Signal?style=social" alt="GitHub stars">
  </a>
  <a href="https://github.com/Zeyusss/Signal/network/members">
    <img src="https://img.shields.io/github/forks/Zeyusss/Signal?style=social" alt="GitHub forks">
  </a>
  <a href="https://github.com/Zeyusss/Signal/issues">
    <img src="https://img.shields.io/github/issues/Zeyusss/Signal" alt="GitHub issues">
  </a>
  <a href="https://github.com/Zeyusss/Signal/pulls">
    <img src="https://img.shields.io/github/issues-pr/Zeyusss/Signal" alt="GitHub pull requests">
  </a>
</p>
