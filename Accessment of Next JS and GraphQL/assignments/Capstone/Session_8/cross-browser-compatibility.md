# Task 2: Cross-Browser Compatibility Audit (Chrome vs. Firefox)

This document details the comparative testing and visual alignment fixes implemented to achieve cross-browser parity between **Google Chrome (v124)** and **Mozilla Firefox (v125)**.

---

## 1. Observed Cross-Browser Rendering Differences

| Visual / Functional Aspect | Chrome Behavior | Firefox Behavior | Root Cause & Resolution |
| :--- | :--- | :--- | :--- |
| **Button Focus & Inner Padding** | Clean focus ring, 0 extra padding | Added 2px internal button padding (`::-moz-focus-inner`) | **Resolution:** Applied `button::-moz-focus-inner { border-style: none; padding: 0; }` in `styles-reset.css`. |
| **Font Sub-pixel Anti-Aliasing** | Darker text weight due to Chromium rendering engine | Slightly thinner text stroke | **Resolution:** Added `-webkit-font-smoothing: antialiased` and `-moz-osx-font-smoothing: grayscale`. |
| **Flexbox Baseline Alignment** | Aligns items strictly to text baseline | Differs slightly on button inputs with inline icons | **Resolution:** Explicitly declared `display: inline-flex; align-items: center;` on all interactive buttons. |

---

## 2. Verification Summary

After incorporating `styles-reset.css`:
* **Button Alignment:** 100% identical height, padding, and vertical baseline alignment in both Chrome and Firefox.
* **Font Rendering:** Text typography and weight match pixel-for-pixel across browsers.
* **Form Inputs:** Input height and border highlights render consistently without default browser quirks.
