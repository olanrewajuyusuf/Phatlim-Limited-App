# 🚛 Phatlim Limited Website

A modern, responsive web application for **Phatlim Limited**, a company specializing in O.E.M and aftermarket spare parts for European, American, and Chinese trucks (Actros, Scania, Mark, M.A.N, Howo).

The app showcases products, categories, and services with a clean UI/UX, provides customers with a **favorites & cart system**, and includes a **checkout/contact form** powered by Nodemailer for direct email notifications.

---

## ✨ Features

### 🖥️ Frontend

- **Modern Landing Page**

  - Beautiful hero section with carousel (5–6 product images).
  - Responsive design across devices.
  - Call-to-action buttons for exploring products and contacting the company.

- **Products Page**

  - Search bar to filter products by category, type, or name.
  - Categories displayed as tabs:
    - Power Train
    - Brake System
    - Fuel System
    - Electrical System
    - Cabin & Body Parts
    - Steering & Suspension
    - Tyres
    - Rims
    - Trailer Spares
    - Others
  - Subtabs under each category for quick navigation.
  - Product grid with **Add-to-Cart** and **Favorite** icons.

- **Favorites & Cart Modals**

  - Accessible from the top navigation.
  - Full-screen modal overlay with blur effect.
  - Close button and smooth UI/UX.
  - Items listed with images, names, and remove option.

- **Contact / Checkout Form**
  - Customers can enter **Name, Email, Phone, and Message**.
  - Selected products are included in the email.
  - Email design uses **icons (👤, ✉️, 📞, 💬)** for clarity.

---

### 📧 Backend / Functionality

- **Nodemailer Integration**

  - Sends form submissions to company email.
  - Uses Gmail SMTP (secure port 465).
  - Styled HTML emails with product details.
  - Supports icons for a modern, branded look.

- **Dynamic Routing & Navigation**
  - Sidebar navigation detects active route & sub-routes.
  - Hover and active link styles for smooth navigation.

---

## 🛠️ Tech Stack

- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS + modern responsive design
- **State Management**: React Context API (for favorites & cart)
- **Icons**: React Icons (Material, Lucide, etc.)
- **Email Handling**: Nodemailer
- **Deployment**: Vercel (recommended)

---

## 🚀 Getting Started

### 1️⃣ Clone the repo

```bash
git clone https://github.com/your-username/phatlim-ventures.git
cd phatlim-ventures
```

### 2️⃣ Install dependencies

```bash
npm install
# or
yarn install
```

### 3️⃣ Setup environment variables

Create a **.env.local** file in the root:

```env
Copy code
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
```

### 4️⃣ Run the dev server

```bash
npm run dev
```

Then visit: http://localhost:3000

---

## 📷 Screenshots (to add later)

- 🖥️ Landing Page
- 📂 Product Categories
- ❤️ Favorites Modal
- 🛒 Cart Modal
- 📧 Email Template

---

## 📌 Roadmap

- Add admin dashboard for product management.
- Support multiple email recipients.
- Integrate database for products (e.g., Prisma + PostgreSQL).
- Add payment gateway (Stripe/Flutterwave).

---

## 👨‍💻 Author

Built with ❤️ by **Olanrewaju Yusuf for Phatlim Limited**.
