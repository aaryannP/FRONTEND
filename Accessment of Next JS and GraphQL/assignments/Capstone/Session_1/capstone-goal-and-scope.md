# Capstone Session 1: Project Goal & Scope Statement

---

## 1. One-Paragraph Capstone Goal Summary

The primary goal of **FoodDash AI** is to build a full-stack, production-grade React/Next.js food delivery platform that seamlessly combines real-time data synchronization, AI-powered menu recommendations, and enterprise state management. The application solves the problem of high latent page loads and poor order tracking experiences by leveraging Next.js file-based routing for fast server-side rendering, Apollo Client with GraphQL for zero-overfetching menu queries, Redux Toolkit (with Redux Thunk) for complex cart state management, and Firebase Firestore for instant real-time order status tracking. By unifying modern front-end technologies into a single intuitive interface, FoodDash AI provides a seamless end-to-end food ordering experience for hungry consumers and delivery managers alike.

---

## 2. Project Scope Statement

### **A. Problem Statement:**
Traditional food ordering applications often suffer from slow page transitions, stale order tracking indicators, and heavy network payloads caused by over-fetching REST API endpoints. Consumers demand instant real-time updates when an order transitions from "Preparing" to "Out for Delivery" without refreshing their browser.

### **B. Proposed Solution:**
**FoodDash AI** delivers a high-performance web solution built on Next.js, GraphQL, and Firebase. It eliminates network bloat through selective GraphQL field queries, provides client-side session persistence via Firebase Auth, and streams real-time order state directly to the user's screen using Firestore `onSnapshot()` listeners.

### **C. Target Audience & Main Users:**
1. **End-User Consumers:** Tech-savvy food lovers looking for fast, responsive online ordering, personalized menu filters, and instant order tracking.
2. **Restaurant Administrators & Delivery Managers:** Operators who require an automated live order dashboard to update order status and process cancellations in real time.
