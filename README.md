# job-portal
🚀 Job Portal Web App – Microservices Architecture
A modern, scalable job portal application built with a microservices architecture using industry-leading technologies. This production-grade system features AI-powered career tools, real-time communication, and enterprise-grade infrastructure.

✨ Key Features
🤖 AI Career Guidance – Personalized career path recommendations

📄 AI Resume Analyzer – Intelligent resume scoring and optimization tips

👥 Multi-role Accounts – Separate workflows for job seekers and recruiters

📊 Recruiter Dashboards – Advanced analytics and candidate management

🔔 Real-time Notifications – Email notifications for application updates

💳 Subscription System – Razorpay integration for premium features

🔐 Secure Authentication – Complete password reset flow with email verification

📈 Profile Enhancement – Bio, skills, and experience management

🏗️ System Architecture
text
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Next.js       │    │   API Gateway   │    │   Auth Service  │
│   Frontend      │◄──►│   (Express)     │◄──►│   (Node.js)     │
└─────────────────┘    └─────────────────┘    └─────────────────┘
         │                       │                       │
         │               ┌───────┴───────┐               │
         │               │   Apache       │               │
         │               │   Kafka        │◄──────────────┘
         │               └───────┬───────┘
         │                       │
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Redis         │    │   Job Service   │    │   Email Service │
│   Cache         │    │   (Node.js)     │◄──►│   (Node.js)     │
└─────────────────┘    └─────────────────┘    └─────────────────┘
                               │
                     ┌─────────────────┐    ┌─────────────────┐
                     │   PostgreSQL    │    │   AI Services   │
                     │   Database      │    │   (OpenAI API)  │
                     └─────────────────┘    └─────────────────┘
🛠️ Technology Stack
Frontend
Next.js 14 – React framework with App Router

TypeScript – End-to-end type safety

Tailwind CSS – Utility-first styling

Backend Microservices
Node.js & Express – Lightweight, fast API services

TypeScript – Type-safe backend development

Apache Kafka – Event-driven communication

Redis – Caching and session management

Database & Storage
PostgreSQL – Primary relational database

Prisma ORM – Database migrations and queries

Integrations
Razorpay – Payment processing

Resend/Nodemailer – Email notifications

OpenAI API – AI-powered features

📚 What You'll Learn
This project demonstrates:

Microservices Architecture – Design, deploy, and scale independent services

Event-Driven Communication – Implement Kafka for inter-service messaging

AI Integration – Build resume analysis and career guidance features

Payment Systems – Razorpay subscription flows

Real-time Notifications – Email workflows with Kafka consumers

Scalable Authentication – JWT-based auth with Redis sessions

Production Best Practices – Error handling, logging, monitoring

🚀 Getting Started
Prerequisites
Node.js 18+

Docker & Docker Compose (for Kafka, PostgreSQL, Redis)

PostgreSQL 14+

Basic knowledge of React, Node.js, and databases

Quick Start
bash
# Clone the repository
git clone https://github.com/yourusername/job-portal-microservices.git
cd job-portal-microservices

# Start infrastructure services
docker-compose up -d kafka postgres redis

# Install dependencies and run services
npm run setup
npm run dev
📁 Project Structure
text
job-portal-microservices/
├── frontend/                 # Next.js application
├── api-gateway/             # API Gateway service
├── services/
│   ├── auth-service/        # Authentication & authorization
│   ├── job-service/         # Job listings and applications
│   ├── profile-service/     # User profiles and AI analysis
│   ├── notification-service/# Email and real-time notifications
│   └── payment-service/     # Razorpay subscriptions
├── shared/                  # Common utilities and types
├── kafka/                   # Kafka producers/consumers config
└── docker-compose.yml       # Infrastructure setup
🔧 Environment Variables
env
# PostgreSQL
DATABASE_URL=postgresql://user:pass@localhost:5432/jobportal

# Redis
REDIS_URL=redis://localhost:6379

# Kafka
KAFKA_BROKER=localhost:9092

# JWT
JWT_SECRET=your_jwt_secret

# Razorpay
RAZORPAY_KEY_ID=your_key_id
RAZORPAY_KEY_SECRET=your_key_secret

# OpenAI
OPENAI_API_KEY=your_openai_key
📈 Performance & Scaling
Horizontal Scaling – Each microservice can be scaled independently

Caching Strategy – Redis for frequent queries and session storage

Database Optimization – Connection pooling, indexed queries

Message Queue – Kafka ensures reliable event delivery

🤝 Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

💡 Future Enhancements
Real-time chat between recruiters and candidates

Advanced analytics dashboard

Mobile application (React Native)

Job recommendation engine

Video interview scheduling

🙏 Acknowledgments
Inspired by modern job portals like LinkedIn, Indeed

Built for educational purposes to demonstrate microservices architecture

