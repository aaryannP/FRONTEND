# Capstone — Session 6 Complete Work

---

## 📁 Files Created in `assignments/Capstone/Session_6/`

1. 💻 **`firebaseAuthConfig.js`** (Task 1)
   * Firebase app initialization, `getAuth()`, `signInWithEmailAndPassword`, `signOut`, and `onAuthStateChanged` exports.

2. 💻 **`AuthContext.js`** (Task 2 & 4)
   * React Context API Auth Provider and `useAuth()` custom hook providing global user state (`currentUser`, `loading`, `login`, `logout`) with session persistence using `onAuthStateChanged` and `localStorage`.

3. 💻 **`LoginForm.jsx`** (Task 1)
   * Email/Password authentication form displaying a welcome banner on successful login.

4. 💻 **`ProtectedRoute.jsx`** (Task 3)
   * Protected route guard component restricting access to unauthenticated users and redirecting to the login form.

5. 💻 **`SpotifyDashboard.jsx`** (Task 3)
   * Spotify-style protected user dashboard displaying logged-in user email at the top header, playlist cards, and media player bar.

6. 💻 **`LogoutButton.jsx`** (Task 5)
   * ChatGPT generated logout button component that signs out user from Firebase Auth and clears Context state.

7. 💻 **`authSlice.js`** (Task 5)
   * Redux Toolkit Auth Slice managing authentication state (`setUser`, `loginSuccess`, `logoutSuccess`, `setLoading`).

8. 💻 **`AppDemo.jsx`**
   * Master interactive container integrating AuthProvider, Login, Protected Route Guard, and Spotify Dashboard.

---

## 📝 Detailed Task Solutions Summary

### Task 1: Firebase Auth Setup & Email/Password Login Form
- Created in [`firebaseAuthConfig.js`](file:///c:/Users/ARYAN/OneDrive/Desktop/Accessment%20of%20Next%20JS%20and%20GraphQL/assignments/Capstone/Session_6/firebaseAuthConfig.js) & [`LoginForm.jsx`](file:///c:/Users/ARYAN/OneDrive/Desktop/Accessment%20of%20Next%20JS%20and%20GraphQL/assignments/Capstone/Session_6/LoginForm.jsx).

### Task 2 & 4: React Context API Auth State & Session Persistence (`onAuthStateChanged` / `localStorage`)
- Created in [`AuthContext.js`](file:///c:/Users/ARYAN/OneDrive/Desktop/Accessment%20of%20Next%20JS%20and%20GraphQL/assignments/Capstone/Session_6/AuthContext.js).

### Task 3: Protected Spotify User Dashboard Page
- Created in [`ProtectedRoute.jsx`](file:///c:/Users/ARYAN/OneDrive/Desktop/Accessment%20of%20Next%20JS%20and%20GraphQL/assignments/Capstone/Session_6/ProtectedRoute.jsx) & [`SpotifyDashboard.jsx`](file:///c:/Users/ARYAN/OneDrive/Desktop/Accessment%20of%20Next%20JS%20and%20GraphQL/assignments/Capstone/Session_6/SpotifyDashboard.jsx).

### Task 5: ChatGPT Logout Button & Redux Auth Slice
- Created in [`LogoutButton.jsx`](file:///c:/Users/ARYAN/OneDrive/Desktop/Accessment%20of%20Next%20JS%20and%20GraphQL/assignments/Capstone/Session_6/LogoutButton.jsx) & [`authSlice.js`](file:///c:/Users/ARYAN/OneDrive/Desktop/Accessment%20of%20Next%20JS%20and%20GraphQL/assignments/Capstone/Session_6/authSlice.js).
