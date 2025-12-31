🚀 Job Portal Web Application
Microservices Architecture • AI-Powered • Production-Grade

A scalable, real-world Job Portal Web Application built using a microservices architecture and modern full-stack technologies.
This project demonstrates how enterprise-level platforms are designed using event-driven communication, AI integrations, and secure payment systems.

The system supports job seekers and recruiters, provides AI-powered career tools, and is designed for high scalability, performance, and maintainability.

✨ Key Features

🤖 AI Career Guidance – Personalized career path recommendations

📄 AI Resume Analyzer – Resume scoring and improvement suggestions

👥 Multi-Role Accounts – Job seekers & recruiters with separate workflows

📊 Recruiter Dashboard – Candidate management & analytics

🔔 Real-Time Email Notifications – Kafka-driven notification system

💳 Subscription System – Razorpay integration for premium plans

🔐 Secure Authentication – JWT-based auth with forgot/reset password flow

📈 Profile Management – Bio, skills, and experience enhancement

🏗️ System Architecture

Microservices-based backend

API Gateway for centralized request handling

Apache Kafka for asynchronous, event-driven communication

Redis for caching and session management

PostgreSQL as the primary database

Independent, scalable backend services

Each service can be deployed and scaled independently, following real-world production practices.

🛠️ Technology Stack
Frontend

Next.js (App Router)

TypeScript

Tailwind CSS

Backend

Node.js

Express.js

TypeScript

Apache Kafka

Redis

Database & Tools

PostgreSQL

Prisma ORM

Docker & Docker Compose

Integrations

Razorpay – Subscription & payments

Email Services (Nodemailer / Resend) – Notifications

AI APIs – Resume analysis & career guidance

📁 Project Structure
job-portal/
├── frontend/                  # Next.js frontend application
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── README.md
│
├── services/                  # Backend microservices
│   ├── auth/                  # Authentication service
│   ├── job/                   # Job & application service
│   ├── user/                  # User & profile service
│   ├── utils/                 # Shared utilities & Kafka consumers
│
├── docker-compose.yml          # Infrastructure setup
├── .gitignore
└── README.md

🚀 Getting Started
Prerequisites

Node.js (v18+)

Docker & Docker Compose

PostgreSQL

Basic knowledge of React, Node.js, and databases

Setup & Run
# Clone the repository
git clone https://github.com/your-username/job-portal.git
cd job-portal

# Start infrastructure services
docker-compose up -d

# Install dependencies
cd frontend && npm install
cd ../services/auth && npm install
cd ../job && npm install
# repeat for other services

# Run services
npm run dev

🔐 Environment Variables

Create .env files for required services:

# Database
DATABASE_URL=postgresql://user:password@localhost:5432/jobportal

# Redis
REDIS_URL=redis://localhost:6379

# Kafka
KAFKA_BROKER=localhost:9092

# Auth
JWT_SECRET=your_jwt_secret

# Razorpay
RAZORPAY_KEY_ID=your_key_id
RAZORPAY_KEY_SECRET=your_key_secret

# AI
OPENAI_API_KEY=your_api_key


⚠️ Never commit .env files. Use .env.example instead.

📚 What You’ll Learn From This Project

Designing microservices architecture

Implementing Kafka-based event communication

Building AI-powered features

Secure authentication & authorization

Subscription & payment workflows

Scalable backend service orchestration

Structuring a large production-ready codebase

📈 Performance & Scalability

Horizontal Scaling – Independent services

Redis Caching – Faster response times

Kafka Messaging – Reliable async processing

Optimized Database Queries – Prisma + indexing

🤝 Contributing

Contributions are welcome!
Feel free to open issues or submit pull requests.

📄 License

This project is licensed under the MIT License.

💡 Future Enhancements

Real-time chat between recruiters and candidates

Advanced analytics dashboard

Mobile app (React Native)

Job recommendation engine

Video interview scheduling

🙏 Acknowledgments

Inspired by modern platforms like LinkedIn and Indeed.
Built for learning, scalability, and real-world system design.

⭐ If you find this project useful, consider giving it a star!
