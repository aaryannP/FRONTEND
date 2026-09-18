# Session 10 - Firebase Authentication (Part 1)

This session covers the integration of Firebase Authentication into a React application, focusing on standard Email/Password authentication.

## Tasks Completed

1. **Firebase Setup**: 
   - Initialized Firebase using environment variables.
   - Set up the Authentication service (`getAuth`) inside a dedicated `firebase.ts` file for this session.

2. **Sign Up Component**:
   - Created a `<SignUp />` component.
   - Integrated Firebase's `createUserWithEmailAndPassword` method.
   - Handled successful creation and caught/displayed errors.

3. **Login Component**:
   - Created a `<Login />` component.
   - Integrated Firebase's `signInWithEmailAndPassword` method.
   - Implemented error handling using state to display login failure messages in the UI.

4. **Auth State Listener**:
   - Used `onAuthStateChanged` to listen for user session changes.
   - Stored the authenticated user's email in state to dynamically update the UI based on whether a user is logged in or out.

5. **Logout Functionality**:
   - Implemented a logout button using Firebase's `signOut` method.
   - Successfully tied the logout action to the state listener, allowing the UI to automatically clear the user's email upon logging out.

6. **Component Architecture (Bonus)**:
   - Created a `<Session10App />` container component to encapsulate all Session 10 logic.
   - Prevented cluttering the root `App.tsx` file, following clean architecture practices.
