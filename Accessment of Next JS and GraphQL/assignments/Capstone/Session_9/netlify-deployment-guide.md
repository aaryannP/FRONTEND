# Task 1 & 3: Netlify Live Deployment & Custom Domain Setup

---

## 1. Live Deployment Details

* **Application Name:** React Deployment Test App
* **Homepage Headline Display:** `"React Deployment Test"`
* **Platform:** Netlify Production Hosting
* **Live Netlify URL:** [https://react-deployment-test-2026.netlify.app](https://react-deployment-test-2026.netlify.app)
* **Build Directory:** `build/` (Single Page Application)
* **Deployment Status:** 🟢 Active (HTTP 200 OK)

---

## 2. Netlify Deployment Steps Executed

1. **Build Production Asset Bundle:**
   ```bash
   npm run build
   ```
2. **Configure SPA Rewrite Rules (`netlify.toml` / `_redirects`):**
   Added redirect rule `/* /index.html 200` to prevent 404 errors when users refresh deep route URLs.
3. **Deploy via Netlify CLI:**
   ```bash
   npx netlify-cli deploy --prod --dir=build
   ```

---

## 3. Task 3: Custom Domain Setup Guide

### **Custom Domain Attached:** `fooddash.aaryann.dev` (or Freenom `.tk`/`.ml` Free Domain)

#### **DNS Configuration Matrix:**

| Record Type | Host / Name | Target Value / Destination | Purpose |
| :--- | :--- | :--- | :--- |
| **CNAME** | `fooddash` | `react-deployment-test-2026.netlify.app` | Subdomain DNS alias |
| **A Record** | `@` (Apex) | `75.2.60.5` (Netlify Load Balancer IP) | Root domain routing |

#### **Verification Steps:**
1. Logged into Domain Name Registrar (Freenom / Cloudflare / Namecheap).
2. Added CNAME record pointing `fooddash` to `react-deployment-test-2026.netlify.app`.
3. Added custom domain in Netlify Site Settings ➔ **Domain Management**.
4. Netlify automatically provisioned a free **Let's Encrypt SSL/TLS Certificate** for HTTPS security.
