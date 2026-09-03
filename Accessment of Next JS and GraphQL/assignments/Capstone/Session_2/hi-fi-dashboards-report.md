# Capstone Session 2 — Task 2: High-Fidelity Dashboards Report

This document outlines the high-fidelity design specifications and component architecture for two modern dashboards: a **Spotify-Style Music Playlist Dashboard** and a **Zomato-Style User Account Dashboard**.

---

## 1. High-Fidelity Design 1: Spotify-Style Music Playlist Dashboard

### **Design Tokens & Palette:**
* **Background:** Deep Matte Dark (`#121212`)
* **Card Surface:** Charcoal Dark (`#181818`, Hover: `#282828`)
* **Primary Accent:** Spotify Neon Green (`#1DB954`)
* **Text Tokens:** Crisp White (`#FFFFFF`), Subdued Gray (`#B3B3B3`)

### **Component Architecture & Layout Sections:**

```
+-----------------------------------------------------------------------------------+
|  [LOGO: Spotify]  [Home] [Search]  |  [Search Input Bar]  | [Profile: Alex (V)]   |
+------------------------------------+----------------------------------------------+
|  YOUR LIBRARY                      |  MAIN DASHBOARD CONTENT                      |
|  +-------------------------------+ |  # Good Afternoon, Alex                      |
|  | [+] Create Playlist           | |  +-----------------------------------------+ |
|  | [♥] Liked Songs (142 songs)   | |  | [IMG] Chill Hits | [IMG] Top India 2026 | |
|  +-------------------------------+ |  +-----------------------------------------+ |
|  PLAYLISTS LIST:                   |  # Made For You                              |
|  - Synthwave Essentials           |  +-----------------------------------------+ |
|  - Lofi Beats for Coding          |  | [CARD 1: Daily Mix 1] [CARD 2: Discover]   | |
|  - Deep Focus Instrumental        |  +-----------------------------------------+ |
+------------------------------------+----------------------------------------------+
|  CURRENTLY PLAYING BAR (Fixed Bottom)                                             |
|  [IMG] Song Title - Artist (♥)  |  [<<]  [ ▶ ]  [>>]  [===|======= 2:15/3:45]  | (Vol)|
+-----------------------------------------------------------------------------------+
```

1. **Left Navigation & Playlist List Sidebar:**
   * Contains Library shortcuts, Create Playlist trigger, Liked Songs quick badge, and a scrollable list of user-created playlists.
2. **Main Content Dashboard:**
   * Dynamic greeting based on time of day, quick-access recent media grid, and curated "Made For You" horizontal carousel.
3. **Currently Playing Audio Bar (Persistent Bottom):**
   * Album thumbnail, Track title ("Blinding Lights - The Weeknd"), Heart favorite toggle, Play/Pause/Skip controls, progress bar, and volume slider.
4. **User Profile Area (Top Right):**
   * User avatar, display name, account settings dropdown, and premium status badge.

---

## 2. High-Fidelity Design 2: Zomato-Style User Account Dashboard

### **Design Tokens & Palette:**
* **Background:** Pure White / Light Slate (`#F8FAFC`)
* **Primary Accent:** Zomato Red (`#E23744`)
* **Status Accents:** Success Green (`#22C55E`), Warning Amber (`#F59E0B`)

### **Component Architecture & Layout Sections:**

```
+-----------------------------------------------------------------------------------+
|  [LOGO: Zomato]  [Location: Mumbai Central]  [Search...]  | [User: Aryan (V)]     |
+-----------------------------------------------------------------------------------+
|  USER DASHBOARD OVERVIEW                                                          |
|  +------------------------------------------------------------------------------+ |
|  |  Profile: Aryan Parmar | Pro Member 👑 | Saved Addresses (2) | Credits: ₹150  | |
|  +------------------------------------------------------------------------------+ |
|                                                                                   |
|  +------------------------------------------+ +---------------------------------+ |
|  | 🕒 RECENT ORDERS                          | | 🏷️ ACTIVE OFFERS FOR YOU       | |
|  | +--------------------------------------+ | | +-----------------------------+ | |
|  | | Order #9812 - Bella Napoli Pizza     | | | | WELCOME50 - 50% OFF (Max 100)| | |
|  | | Delivered • 28 Aug | ₹450 | [Reorder] | | | | ZOMATOPRO - Free Delivery   | | |
|  | +--------------------------------------+ | | +-----------------------------+ | |
|  +------------------------------------------+ +---------------------------------+ |
|                                                                                   |
|  # SAVED RESTAURANTS (FAVORITES)                                                  |
|  +------------------+ +------------------+ +------------------+                   |
|  | [IMG] Spice Villa| | [IMG] Sushi Bar  | | [IMG] Burger Hub |                   |
|  | ★ 4.7 | 20 mins  | | ★ 4.9 | 30 mins  | | ★ 4.5 | 15 mins  |                   |
|  +------------------+ +------------------+ +------------------+                   |
+-----------------------------------------------------------------------------------+
```

1. **User Profile Banner Section:**
   * Displays member tier (Zomato Gold / Pro), saved delivery locations, and Zomato Pay cashback wallet balance.
2. **Recent Orders Panel:**
   * List of past orders with restaurant thumbnail, order status, total price, and one-click "Reorder" button.
3. **Saved Restaurants Grid:**
   * Favorite bookmarked restaurant cards featuring food photos, star rating badges, and average delivery times.
4. **Active Offers Carousel:**
   * Dynamic promo coupon cards with code copy buttons (`WELCOME50`, `GOLDPRO`) and validity countdown timers.
