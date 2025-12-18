# Signal - Social Media Platform

> **Note:** This project is currently under active development.

A modern social media platform built with Angular 21, featuring real-time posts, user authentication, and interactive content. Connect with friends, share moments, and engage with a clean, responsive interface.

## 🌟 Features

- **User Authentication**
<<<<<<< HEAD

=======
>>>>>>> ecea6b43c10b26757e040283347f18847fedfeb5
  - Secure login and registration
  - JWT-based authentication
  - Protected routes with guards

- **Posts & Interactions**
<<<<<<< HEAD

=======
>>>>>>> ecea6b43c10b26757e040283347f18847fedfeb5
  - Create and view posts
  - Infinite scroll for post loading
  - Like and comment functionality
  - Real-time updates

- **User Profiles**
<<<<<<< HEAD

=======
>>>>>>> ecea6b43c10b26757e040283347f18847fedfeb5
  - View and edit profile information
  - Profile pictures
  - User activity timeline

- **Responsive Design**
  - Mobile-first approach
  - Clean, modern UI with Tailwind CSS
  - Smooth animations and transitions

## 🛠️ Tech Stack

- **Frontend Framework**: Angular 21
- **Styling**: Tailwind CSS 4 with Flowbite components
- **State Management**: Angular Signals
- **HTTP Client**: Angular HttpClient with interceptors
- **Authentication**: JWT with HttpOnly cookies
- **UI Components**: Custom components with Angular standalone API
- **Build Tool**: Angular CLI

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- Angular CLI 21+

### Installation

1. Clone the repository:
<<<<<<< HEAD

=======
>>>>>>> ecea6b43c10b26757e040283347f18847fedfeb5
   ```bash
   git clone [your-repo-url]
   cd Signal
   ```

2. Install dependencies:
<<<<<<< HEAD

=======
>>>>>>> ecea6b43c10b26757e040283347f18847fedfeb5
   ```bash
   npm install
   ```

3. Start the development server:
<<<<<<< HEAD

=======
>>>>>>> ecea6b43c10b26757e040283347f18847fedfeb5
   ```bash
   ng serve
   ```

4. Open your browser and navigate to `http://localhost:4200`

## 📁 Project Structure

```
src/
├── app/
│   ├── core/               # Core functionality
│   │   ├── guards/         # Route guards
│   │   ├── interceptors/   # HTTP interceptors
│   │   └── services/       # Core services
│   │
│   ├── features/           # Feature modules
│   │   ├── auth/           # Authentication
│   │   ├── timeline/       # Post timeline
│   │   └── profile/        # User profiles
│   │
│   ├── shared/             # Shared components and pipes
│   │   ├── components/     # Reusable UI components
│   │   └── pipes/          # Custom pipes
│   │
│   ├── app.routes.ts       # Application routes
│   └── app.config.ts       # Application configuration
│
└── environments/           # Environment configurations
```

## 🔒 Environment Setup

Create an environment file at `src/environments/environment.ts`:

```typescript
export const environment = {
  production: false,
<<<<<<< HEAD
  baseUrl: 'https://your-api-url.com/api',
=======
  baseUrl: 'https://your-api-url.com/api'
>>>>>>> ecea6b43c10b26757e040283347f18847fedfeb5
};
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📬 Contact

For any questions or feedback, please open an issue on GitHub.
<<<<<<< HEAD
=======


>>>>>>> ecea6b43c10b26757e040283347f18847fedfeb5
