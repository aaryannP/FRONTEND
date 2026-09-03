# Task 3: AI Tools in Front-End Development (Zomato-Style Website Case Study)

This document outlines 3 ways AI tools (GitHub Copilot, ChatGPT) accelerate front-end development for a Zomato-style restaurant review website, along with 1 specific ethical risk for each usage.

---

### 1. Rapid Component Generation (e.g., Restaurant Cards, Rating Stars, Review Filters)

* **How AI Speeds Up Development:**
  AI tools can immediately generate complex JSX/HTML and CSS for repetitive UI components, such as a `RestaurantCard` component containing ratings, cuisine tags, delivery time, offer badges, and review modals. This eliminates boilerplate code creation.

* **Associated Ethical Risk — Intellectual Property & License Infringement:**
  AI models trained on public GitHub repositories may generate code snippets that infringe upon third-party copyrighted code or copy proprietary design components without proper attribution or open-source license compliance (e.g., GPL, MIT violations).

---

### 2. Generating Realistic Mock Data & Automated API Handler Logic

* **How AI Speeds Up Development:**
  Developers can use ChatGPT/Copilot to quickly generate realistic JSON datasets (restaurant names, menu items, prices, user reviews, coordinates) and helper functions for location filtering, sorting by distance, and search query autocomplete.

* **Associated Ethical Risk — Algorithmic Bias & Discriminatory Sorting:**
  If the synthetic data or AI filtering logic contains implicit bias (e.g., favoring certain cuisines or artificially inflating restaurant review scores), it can lead to unfair promotion of specific restaurants over small local businesses, misleading consumers and harming fair competition.

---

### 3. Automated Form Validation & Dynamic Review Sentiment Categorization

* **How AI Speeds Up Development:**
  AI tools can quickly generate complex regular expressions, input sanitization functions, and client-side sentiment analysis code to tag user reviews (e.g., "Positive", "Needs Improvement") before rendering them in real time.

* **Associated Ethical Risk — User Privacy & Sensitive Data Exposure:**
  When passing raw user review text or user data to cloud-based LLM APIs for automated processing or validation, there is a risk of transmitting personally identifiable information (PII) or user location data without explicit user consent, violating data protection regulations (e.g., GDPR, IT Act).

---

## Summary Matrix

| Use Case | Acceleration Benefit | Associated Ethical Risk |
| :--- | :--- | :--- |
| **1. UI Component Generation** | Instant boilerplate JSX/CSS layout for cards & review forms | Code Copyright & Open-Source License Infringement |
| **2. Mock Data & Search Filters** | Fast backend integration with realistic data arrays | Algorithmic Bias & Unfair Commercial Recommendation |
| **3. Validation & Review Processing** | Instant validation logic & automated review tagging | User Data Privacy Violation & PII Data Leakage |
