# 🧭 Insider Jobs

A modern MERN-based Job Portal with user and company panels, secure authentication, and real-time job management.

<p align="center"> <img src="https://img.shields.io/badge/Frontend-React.js-61DBFB?style=for-the-badge&logo=react&logoColor=white"/> <img src="https://img.shields.io/badge/Backend-Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white"/> <img src="https://img.shields.io/badge/Database-MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white"/> <img src="https://img.shields.io/badge/Auth-Clerk-blueviolet?style=for-the-badge&logo=clerk&logoColor=white"/> <img src="https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel"/> </p>

## 🌟 Overview

Insider Jobs is a feature-rich Job Portal designed for both job seekers and companies.
It provides two panels — one for users to explore and apply for jobs, and another for companies to manage their listings.
Built using the MERN stack and integrated with Clerk authentication, it ensures a secure, smooth, and scalable experience for all users.

## 🧩 Features
### 👨‍💻 User Panel

🔍 Browse and filter job listings

📄 Apply for jobs instantly

🕒 Track application status in real time

🔐 Secure authentication via Clerk

### 🏢 Company Panel

🧾 Post, edit, and delete job listings

👀 Toggle job visibility (public/private)

✅ Accept or reject candidate applications

📊 Dashboard with job statistics

### ⚙️ General

Protected routes with Clerk middleware

RESTful API architecture

Fully responsive, modern UI with Tailwind CSS

Scalable backend with Express and MongoDB

## 🛠️ Tech Stack

| Category | Technologies |
|-----------|--------------|
| 🖥️ **Frontend** | React.js • Tailwind CSS • Axios |
| ⚙️ **Backend** | Node.js • Express.js |
| 🗄️ **Database** | MongoDB (Mongoose) |
| 🔐 **Authentication** | Clerk |
| ☁️ **Deployment** | Vercel |

## 🚀 Installation & Setup
### 1️⃣ Clone the Repository
```
git clone https://github.com/your-username/insider-jobs.git
cd insider-jobs

```
### 2️⃣ Install Dependencies
```
cd backend
npm install
cd ../frontend
npm install

```
### 3️⃣ Environment Variables
Backend
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
CLERK_SECRET_KEY=your_clerk_secret
```
Frontend
```
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_API_URL=http://localhost:5000

```

### 4️⃣ Run the App
Backend
```
npm run server
```
Frontend
```
npm run dev
```

## 🌐 Deployment

Frontend: https://insider-jobs-client-alpha.vercel.app/

Backend: Deployed via Vercel Serverless

## 💡 Future Enhancements

📬 Email notifications for job updates

🤖 AI-powered job recommendations

📂 Resume upload and parsing

💬 Real-time recruiter–candidate chat

## 🧑‍💻 Author

Rajeev Dixit
MERN Stack Developer | AI & ML Enthusiast

## 🌟 Support

If you like this project, please ⭐ the repository and share it with others!
Your support helps in building more open-source projects ❤️
