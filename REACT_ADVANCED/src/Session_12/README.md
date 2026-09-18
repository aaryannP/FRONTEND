# Session 12 – Firestore CRUD Operations (Part 1)

This session covers connecting a React application to Firebase Firestore, allowing us to perform basic CRUD operations. In this part, we implement Create and Read functionalities, along with client-side real-time filtering.

## Tasks Completed

1. **Firebase & Firestore Setup**
   - Configured a new Firebase project and enabled the Firestore Database.
   - Connected the React app to Firebase using the `firebase` npm package.
   - Setup `firebase.ts` to initialize `getFirestore` utilizing secure environment variables.

2. **Add Data (Create)**
   - Created a React form to capture a restaurant's `name` and `cuisine`.
   - Utilized Firestore's `collection()` and `addDoc()` methods to push the captured data into a new document within the `restaurants` collection upon form submission.

3. **Fetch Data (Read)**
   - Implemented the `useEffect` hook to fetch data as soon as the component mounts.
   - Used Firestore's `getDocs()` method to retrieve a snapshot of all documents from the `restaurants` collection.
   - Extracted document data and IDs to display each restaurant's name and cuisine in an unordered list.

4. **Real-time Filter Feature**
   - Added a controlled text input to search for specific cuisines.
   - Implemented JavaScript's `.filter()` method to dynamically filter the retrieved restaurant list based on the search query.
   - Achieved real-time filtering where the displayed list updates immediately as the user types, without needing additional database queries.

## Components
- `firebase.ts`: Handles the Firebase initialization and exports the `db` (Firestore instance).
- `TaskManager.tsx`: Contains the form, the displayed list of restaurants, and the real-time filtering logic.
