# Session 9 - Firebase Introduction

This folder contains the practical implementation for Session 9, focusing on integrating Firebase into a React application.

## Tasks Completed

### Task 1: Firebase Project Setup
- Created a new Firebase project in the Firebase Console.
- Installed the Firebase SDK using `npm i firebase`.
- Initialized the connection in `firebase.ts` with the project's specific `firebaseConfig`.

### Task 2: Environment Variable Management
- Extracted sensitive Firebase config values (API key, etc.) into a `.env.local` file.
- Used Vite's environment variable standard (`import.meta.env.VITE_...`) to load these values securely into `firebase.ts`.
*(Note: The `.env.local` file is intentionally excluded from version control to protect sensitive keys. If testing this project locally, a new `.env.local` file must be created and populated with active Firebase credentials.)*

### Task 3: App Connection
- Exported the initialized `firebaseApp` instance from `firebase.ts`.
- Imported and logged the Firebase object within `App.tsx` to confirm a successful connection. 

### Task 4: Benefits of Firebase for Front-End Developers
Firebase allows front-end developers to build full-stack applications like Instagram or Zomato without having to write or manage complex server-side code or databases. It provides ready-to-use services for databases, user authentication, and file storage. This significantly speeds up development and allows developers to focus entirely on the user interface and experience.

### Task 5: Adding Firebase Authentication (Steps)
To add Firebase Authentication to this React app, the following steps would be taken:
1. **Enable Authentication:** Go to the Firebase Console, navigate to "Authentication", click "Get Started", and enable the desired sign-in providers (e.g., Email/Password).
2. **Import Auth Module:** In the React project, import `getAuth` from the `firebase/auth` package inside `firebase.ts`.
3. **Initialize Auth:** Pass the initialized Firebase app to `getAuth(app)` and export the resulting `auth` variable.
4. **Implement Auth Methods:** In React components, import the `auth` variable and use Firebase functions like `createUserWithEmailAndPassword` or `signInWithEmailAndPassword` to handle user registration and login.
