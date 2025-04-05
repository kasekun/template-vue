# Nimbus

A modern Vue 3 application built with TypeScript, Vite, and Firebase.

## Features

- Vue 3 with Composition API
- TypeScript for type safety
- Vite for fast development
- Firebase Authentication and Firestore
- Pinia for state management
- Vue Router for routing
- TailwindCSS for styling
- shadcn-vue for UI components
- ESLint and Prettier for code quality
- Vercel deployment configuration
- .cursorrules for development

## Components

This project uses [shadcn-vue](https://www.shadcn-vue.com/) for UI components. To add a new component:

```bash
# Install a component
npx shadcn-vue@latest add <component>
```

See the [shadcn-vue documentation](https://www.shadcn-vue.com/docs) for all available components.

## Prerequisites

- Node.js (v18 or later recommended)
- Yarn package manager
- Firebase account

## Getting Started

1. Clone the repository
2. Install dependencies:

```bash
yarn install
```

3. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
4. Enable Authentication with Email/Password sign-in method
5. Create a `.env` file in the root directory (see `.env.example` for required variables)
6. Start the development server:

```bash
yarn dev
```

## Building for Production

```bash
yarn build
```

## Deploying to Vercel

1. Push your code to a GitHub repository
2. Connect your repository to Vercel
3. Set up environment variables in Vercel dashboard
4. Deploy!

## License

MIT
