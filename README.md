<div align="center">

<img src="https://tanzid-48.github.io/payoo_transectionApp/assets/Logo-full.png" alt="Payoo Logo" width="220"/>

# 💳 Payoo — Mobile Banking App

### *A beginner-friendly JavaScript mobile banking simulation*

<br/>

[![Live Demo](https://img.shields.io/badge/🌐%20Live%20Demo-Open%20App-6C3CE1?style=for-the-badge)](https://tanzid-48.github.io/payoo_transectionApp/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-222222?style=for-the-badge&logo=github&logoColor=white)](https://pages.github.com/)

<br/>

> 🏦 A fully functional **mobile banking simulation** built with **vanilla JavaScript** —
> no frameworks, no libraries. Just clean, modular, real-world JS code!

</div>

---

## 📱 App Screenshots

<div align="center">

<table>
  <tr>
    <td align="center"><b>🔐 Login</b></td>
    <td align="center"><b>🏠 Home</b></td>
  </tr>
  <tr>
    <td><img src="https://raw.githubusercontent.com/tanzid-48/payoo_transectionApp/main/image/01_login.png" width="300"/></td>
    <td><img src="https://raw.githubusercontent.com/tanzid-48/payoo_transectionApp/main/image/02_home.png" width="300"/></td>
  </tr>
  <tr>
    <td align="center"><b>💰 Add Money</b></td>
    <td align="center"><b>💸 Cash Out</b></td>
  </tr>
  <tr>
    <td><img src="https://raw.githubusercontent.com/tanzid-48/payoo_transectionApp/main/image/03_addmoney.png" width="300"/></td>
    <td><img src="https://raw.githubusercontent.com/tanzid-48/payoo_transectionApp/main/image/04_cashout.png" width="300"/></td>
  </tr>
  <tr>
    <td align="center"><b>📤 Send Money</b></td>
    <td align="center"><b>🎁 Get Bonus</b></td>
  </tr>
  <tr>
    <td><img src="https://raw.githubusercontent.com/tanzid-48/payoo_transectionApp/main/image/05_sendmoney.png" width="300"/></td>
    <td><img src="https://raw.githubusercontent.com/tanzid-48/payoo_transectionApp/main/image/06_bonus.png" width="300"/></td>
  </tr>
  <tr>
    <td align="center"><b>🧾 Pay Bill</b></td>
    <td align="center"><b>📜 Transaction History</b></td>
  </tr>
  <tr>
    <td><img src="https://raw.githubusercontent.com/tanzid-48/payoo_transectionApp/main/image/07_paybill.png" width="300"/></td>
    <td><img src="https://raw.githubusercontent.com/tanzid-48/payoo_transectionApp/main/image/08_history.png" width="300"/></td>
  </tr>
</table>

</div>

---

## 🚀 Features Overview

<div align="center">

| Feature | Description | Status |
|:---:|:---|:---:|
| 🔐 **Secure Login** | Login with mobile number & 4-digit PIN | ✅ |
| ➕ **Add Money** | Load balance from bank using account number & PIN | ✅ |
| 💸 **Cash Out** | Withdraw money via agent phone number | ✅ |
| 📤 **Send Money** | Instantly transfer money to any number | ✅ |
| 🎁 **Get Bonus** | Apply coupon codes to earn free bonus balance | ✅ |
| 🧾 **Pay Bill** | Pay electricity, internet, gas, water bills | ✅ |
| 📜 **Transaction History** | View all past activity with date & time | ✅ |

</div>

---

## 🧠 What I Built & Learned

### ✅ 1. Reusable Utility Functions — `machine.js`

The heart of this project is a **central utility file** that powers every section — following the **DRY Principle** *(Don't Repeat Yourself)*:

- 📥 Get input values cleanly
- 💵 Update balance in real-time
- 📋 Log every transaction to history
- 🧹 Clear multiple fields with one call
- 👁️ Show/hide sections dynamically

### 💰 2. Add Money
Select bank → Enter account number & amount → Validate PIN → Balance updates instantly.

### 💸 3. Cash Out
Enter agent number → Amount validation → Balance check → Withdrawal logged.

### 📤 4. Send Money
Enter recipient number → Check balance → Transfer processed → History saved.

### 🎁 5. Bonus Coupon System
```
tanzid48  →  +৳100 bonus 🎉
payoo10   →  +৳50  bonus 🎉
```

### 🧾 6. Pay Bill
Choose bill type → Enter account & amount → Balance deducted → Receipt saved.

### 📜 7. Transaction History
Every transaction auto-saves with **date & time**, newest shown **first**.

---

## 🗂️ Project Structure

```
payoo_transectionApp/
│
├── 📄 index.html          ← Login page (entry point)
├── ⚙️  machine.js          ← Core reusable utility functions
├── 💰 addmoney.js         ← Add money logic
├── 💸 cashout.js          ← Cash out logic
├── 📤 sendmoney.js        ← Send money logic
├── 🎁 bonus.js            ← Coupon & bonus logic
├── 🧾 paybill.js          ← Bill payment logic
├── 🖼️  assets/             ← Logo and icons
└── 📸 image/        ← App screenshots
```

---

## 🎯 Key Improvements Made

| Before ❌ | After ✅ |
|---|---|
| Repeated code in every JS file | Single reusable functions in `machine.js` |
| Messy unorganized structure | Clean, **modular**, section-based JS |
| No input validation | Proper **validation** on every form |
| Hard to maintain or update | **DRY Principle** — change once, works everywhere |

---

## 🔮 Future Improvements

- [ ] 🗄️ `localStorage` — keep data after page refresh
- [ ] 🔐 Real login authentication system
- [ ] 🎨 Improved UI with smooth animations
- [ ] 🔍 Transaction filter & search
- [ ] 📱 Fully responsive for all screen sizes
- [ ] 🌙 Dark mode toggle

---

## 👨‍💻 About

<div align="center">

This project was built as a **hands-on practice project** to strengthen core JavaScript skills.

| Skill Practiced | Status |
|---|:---:|
| DOM Manipulation | ✅ |
| Event Handling | ✅ |
| Reusable Functions | ✅ |
| Modular JS Architecture | ✅ |
| Form Validation | ✅ |
| DRY Principle | ✅ |
| Transaction Logic | ✅ |

<br/>

**Built by [Tanzid](https://github.com/tanzid-48) — Frontend Developer & JavaScript Enthusiast 🇧🇩**

<br/>

[![GitHub](https://img.shields.io/badge/GitHub-tanzid--48-181717?style=for-the-badge&logo=github)](https://github.com/tanzid-48)
[![Live App](https://img.shields.io/badge/🌐_Live_App-Open_Here-6C3CE1?style=for-the-badge)](https://tanzid-48.github.io/payoo_transectionApp/)

<br/>

---

### ⭐ If you like this project, please give it a star! It motivates me to keep building 🚀

*Made with ❤️ and lots of ☕ by Tanzid*

</div>
