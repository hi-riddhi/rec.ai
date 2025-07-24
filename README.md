# 🤖 AI Hiring Manager

AI Hiring Manager is a minimalist, web-based recruitment assistant platform designed for both employers and job seekers. CEOs can select their own AI-powered HR assistant—like Dr. Melo, Miss Melody, or Rii—each with distinct personalities and styles. These assistants handle early-stage recruitment tasks such as greeting candidates, answering queries, collecting resumes, and scheduling interviews via Calendly. This creates a personalized yet automated hiring workflow that saves time while maintaining professionalism.

For job seekers, the experience mimics a real HR interaction. Applicants can chat with the assistant, upload their resumes or portfolios, schedule mock interviews, and even request feedback—just like they'd do with a real recruiter. Behind the scenes, their submissions are logged into Google Sheets for tracking. The platform is fully front-end, hosted on Netlify, and ready to be extended with OpenAI for smart responses, making it a lightweight yet powerful tool to simulate the entire recruitment lifecycle.

---


## 👥 User Roles

### 👔 CEOs & Founders
- Choose from a pool of smart AI HR assistants.
- Each assistant comes with its own personality and title:
  - 🟣 **Dr. Melo Marshmallow** – strategic, formal, structured
  - 🌸 **Miss Melody** – kind, creative, and empathetic
  - 💡 **Rii** – efficient, fast, and witty
- Assign your assistant to manage hiring conversations.
- Schedule recruiting meetings via Calendly.

### 💼 Job Seekers
- Interact with AI assistants like real HRs.
- Submit:
  - 📄 Resumes & CVs
  - 🌐 Portfolio links
  - 📝 Cover letters
- Schedule mock interviews.
- Receive feedback or shortlist updates via chat or email.

---

## 📁 Project Structure
```
ai-hiring-manager/
├── index.html # Landing Page
├── ceo.html # CEO Flow: Pick Assistant
├── jobseeker.html # Job Seeker Portal
├── css/
│ └── style.css # Global Styles
├── js/
│ ├── chat.js # Smart Assistant Behavior
│ └── form.js # Form Submission Logic
```

## 🔧 Integrations
- 📅 Calendly: Schedule interviews
- 📊 Google Sheets: Capture submissions via Apps Script
- 🤖 OpenAI: Enhance chatbot responses



📄 License MIT
 
🌐🔗 **Preview Website:** [ai-hiring-manager.netlify.app](https://your-site.netlify.app) 

---

