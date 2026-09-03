# Capstone Session 2 — Task 4: Prototype & Figma AI Adaptation Report

---

## 1. Uizard Prototype: Flipkart-Style Shopping Cart Dashboard

### **Layout Architecture & Component Hierarchy:**

```text
+-------------------------------------------------------------------------------+
| [LOGO: Flipkart]                       [Search Products...]         [User Avatar] |
+-------------------------------------------------------------------------------+
|  SHOPPING CART (3 ITEMS)                                                      |
|  +-------------------------------------------+ +----------------------------+ |
|  | ITEM 1: Wireless Noise Canceling Earbuds   | | PRICE DETAILS              | |
|  | Qty: [ - ] 1 [ + ]  | ₹4,999  | [Remove]  | | Price (3 items):  ₹32,997  | |
|  +-------------------------------------------+ | Discount (20%):   -₹6,599  | |
|  | ITEM 2: 5G Android Smartphone             | | Delivery Fee:        FREE  | |
|  | Qty: [ - ] 1 [ + ]  | ₹23,999 | [Remove]  | | -------------------------- | |
|  +-------------------------------------------+ | TOTAL AMOUNT:     ₹26,398  | |
|  | ITEM 3: Smartwatch Series 5               | | (You save ₹6,599)          | |
|  | Qty: [ - ] 1 [ + ]  | ₹3,999  | [Remove]  | |                            | |
|  +-------------------------------------------+ | [PLACE ORDER BUTTON (PRIMARY)]|
|                                                +----------------------------+ |
+-------------------------------------------------------------------------------+
```

### **Uizard Hierarchy Analysis:**
1. **Primary Dominance (Visual Weight #1):** **"PLACE ORDER"** CTA button (High contrast yellow `#ff9f00` / orange), encouraging immediate checkout action.
2. **Secondary Dominance (Visual Weight #2):** **Total Amount (`₹26,398`)** & Item List titles, validating cart value before purchase.
3. **Tertiary Support (Visual Weight #3):** Individual item quantity toggles, discount savings text, and navigation links.

---

## 2. Figma AI Layout Adaptation: Job Profile ➔ Cred-Style Rewards Dashboard

### **Adaptation Strategy:**

To transform a generic **Job Profile Dashboard** into a high-end **Cred-Style Rewards Dashboard**, the following structural and design token modifications were applied:

| Design Component | Original Figma AI (Job Profile) | Adapted Version (Cred-Style Rewards) |
| :--- | :--- | :--- |
| **Color Theme** | Corporate Blue & White (`#0070F3` / `#FFFFFF`) | Ultra-Dark Neon Obsidian (`#0F0F0F` / Neon Emerald `#00E599` & Gold `#FFD700`) |
| **Header Title** | *"Senior Full-Stack Developer Profile"* | *"Cred Privilege Membership & Gems Balance"* |
| **Stat Cards** | *Years Experience (5 yrs) \| Projects Completed (42)* | *Cred Coins (1,420,000 pts) \| Credit Score (825 Excellent)* |
| **Section 1 Title** | *"Work Experience & Skills"* | *"Exclusive Rewards & Claimable Vouchers"* |
| **Section 2 Title** | *"Recent Job Applications"* | *"Recent Cred Pay Transactions & Cashbacks"* |
| **Achievement Badges** | *React Specialist, Node.js Certified* | *Cred Jackpot Winner, 100% On-Time Bill Pay Legend* |
| **Action Buttons** | *"Apply for Role" / "Download CV"* | *"Claim Reward" / "Pay Credit Card Bill"* |

### **Key Customization Summary:**
1. **Visual Styling:** Applied dark frosted glassmorphism cards with neon green borders (`#00E599`) and high-contrast typography.
2. **Achievement Section:** Replaced technical skill tags with gamified reward badges (*"Top 1% Credit Club"*, *"Zero Late Fees streak"*).
3. **Call-to-Action:** Replaced resume download actions with instant coin-burn rewards redemption buttons.
