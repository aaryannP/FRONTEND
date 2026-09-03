# Capstone — Session 3 Complete Work

---

## 📁 Projects & Files Created in `assignments/Capstone/Session_3/`

### 1. `spotify-playlist-viewer/` Next.js Application
* 📄 **`.env.local`**: Configured with `NEXT_PUBLIC_SPOTIFY_API_KEY`, `NEXT_PUBLIC_MAPS_API_KEY`, `NEXT_PUBLIC_ZOMATO_API_KEY`, and `NEXT_PUBLIC_ZOMATO_API_URL`.
* 📄 **`.gitignore`**: Configured to block `.env*.local` from Git commits.
* 📦 **`package.json`**: Dependencies setup for Next.js 14 & React 18.
* 📁 **`src/components/`**: Modular component structure featuring `PlaylistCard.jsx` and barrel export `index.js`.
* 📁 **`src/utils/`**: Utility folder containing `api.js` with `printZomatoApiConfig()` and `printSpotifyApiConfig()`.
* 📁 **`src/pages/`**: Home page (`index.js`) logging `process.env.NEXT_PUBLIC_SPOTIFY_API_KEY` and calling API utility helpers.

---

### 2. `insta-feed-clone/` Next.js Application
* 📄 **`.env.local`**: Configured with `NEXT_PUBLIC_MAPS_API_KEY` (`test123_fake_maps_key`).
* 📄 **`.gitignore`**: Configured to ignore secret local env files.
* 📁 **`src/components/`**, **`src/pages/`**, **`src/utils/`**: Scalable directory organization.
* 📄 **`src/pages/index.js`**: Accesses and logs `process.env.NEXT_PUBLIC_MAPS_API_KEY` on component mount.

---

### 3. Documentation & Security
* 📄 **`ai_env_example.txt`** (Task 5)
  * ChatGPT prompts, OpenAI + Firebase + Spotify secure `.env.local` template, server-side secret vs client-side public variable rules, and 5-point git security guide to prevent leaking secrets.

---

## 📝 Detailed Task Solutions Summary

### Task 1 & 2: Next.js App Creation & Scalable `src` Structure (`components`, `pages`, `utils`)
- Created in [`spotify-playlist-viewer/`](file:///c:/Users/ARYAN/OneDrive/Desktop/Accessment%20of%20Next%20JS%20and%20GraphQL/assignments/Capstone/Session_3/spotify-playlist-viewer/) and [`insta-feed-clone/`](file:///c:/Users/ARYAN/OneDrive/Desktop/Accessment%20of%20Next%20JS%20and%20GraphQL/assignments/Capstone/Session_3/insta-feed-clone/).

### Task 3: `.env.local` Configuration & Logging in `index.js`
- Created in [`spotify-playlist-viewer/src/pages/index.js`](file:///c:/Users/ARYAN/OneDrive/Desktop/Accessment%20of%20Next%20JS%20and%20GraphQL/assignments/Capstone/Session_3/spotify-playlist-viewer/src/pages/index.js) & [`insta-feed-clone/src/pages/index.js`](file:///c:/Users/ARYAN/OneDrive/Desktop/Accessment%20of%20Next%20JS%20and%20GraphQL/assignments/Capstone/Session_3/insta-feed-clone/src/pages/index.js).

### Task 4: Zomato API Configuration Helper (`src/utils/api.js`)
- Created in [`spotify-playlist-viewer/src/utils/api.js`](file:///c:/Users/ARYAN/OneDrive/Desktop/Accessment%20of%20Next%20JS%20and%20GraphQL/assignments/Capstone/Session_3/spotify-playlist-viewer/src/utils/api.js).

### Task 5: ChatGPT Secure `.env` Template & Security Best Practices
- Created in [`ai_env_example.txt`](file:///c:/Users/ARYAN/OneDrive/Desktop/Accessment%20of%20Next%20JS%20and%20GraphQL/assignments/Capstone/Session_3/ai_env_example.txt).
