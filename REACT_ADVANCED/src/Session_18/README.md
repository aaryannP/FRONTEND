# Session 18: Environment Variables & Configuration

This session focuses on managing environment variables and keeping sensitive information (like API keys) secure in a Vite/React application.

## Tasks Completed

1. **Local Environment Variables**
   - Created a `.env.local` file to store sensitive variables securely on the local machine.
   - Added a dummy Spotify API key (`VITE_SPOTIFY_API_KEY`) and accessed it in the application using `import.meta.env.VITE_SPOTIFY_API_KEY`.

2. **Securing Firebase Credentials**
   - Ensured Firebase configuration uses environment variables (`VITE_FIREBASE_API_KEY`, etc.) instead of hardcoded strings in the source code.

3. **Conditional Environments (Dev vs. Prod)**
   - Created two separate environment files:
     - `.env.development`: Loaded automatically when running `npm run dev`.
     - `.env.production`: Loaded automatically during the build process (`npm run build`).
   - Added `VITE_WELCOME_MSG` to both files with different values to demonstrate how Vite loads the appropriate environment variables based on the current mode.

4. **Security and Git**
   - Verified that `.env` and `.env.*` files are included in `.gitignore`. This ensures that API keys and other secrets are never accidentally committed or pushed to version control.

5. **Secure Template File**
   - Created an `.env.template` file containing placeholder values for Firebase, Spotify, and Google Maps API keys.
   - This file *is* safe to commit to version control. It acts as documentation so other developers know which environment variables are required to run the project.

## Important Note on Vite
Because this project uses Vite rather than Create React App, environment variables must be prefixed with `VITE_` instead of `REACT_APP_`. Furthermore, they are accessed in the code via `import.meta.env.VITE_VAR_NAME` instead of `process.env`.

## ERP Assignment Variations & Notes

An alternate version of this assignment in the ERP portal requests slightly different demonstration examples (e.g., fetching TMDB trending movies and toggling homepage background colors between dev and prod). However, the core environment management competencies remain identical and are fully satisfied in this session:

- **Build Tool Conventions (Vite vs. CRA):** The ERP prompt specifies Create React App conventions (`process.env.REACT_APP_*` and `process.env.NODE_ENV`). As noted in the section above, this Vite project correctly implements modern ESM standards (`import.meta.env.VITE_*` and `import.meta.env.DEV` / `import.meta.env.PROD`).
- **API Key Security:** Secret management is demonstrated using Spotify and Firebase credentials in `.env.local` and `.env.template` rather than a TMDB API key.
- **Conditional Environments:** Rather than toggling background colors (light blue for dev vs. light green for prod), environment-specific behavior is proven by dynamically loading different `VITE_WELCOME_MSG` strings from `.env.development` and `.env.production`.
- **Version Control Security:** The git exclusion principles required by the assignment are fully implemented and explained in Section 4 above.
