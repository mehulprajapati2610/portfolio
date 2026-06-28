/* ==========================================================
   PORTFOLIO COPILOT — FIXED Q&A DATA
   ----------------------------------------------------------
   No keyword matching. No scoring. No guessing.
   Every question the user can ask is listed here, with a
   pre-written answer attached directly to it.

   Structure:
   TOPICS = [
     { id, label, icon, questions: [
         { id, question, answer (HTML string), links: [...] }
     ]}
   ]
========================================================== */

const TOPICS = [

  {
    id: "projects",
    label: "Projects",
    icon: "folder-kanban",
    questions: [

      {
        id: "neuronudge",
        question: "Tell me about NeuroNudge",
        answer: `
          <h4>NeuroNudge — AI Mental Wellness Platform</h4>
          <p>An AI-powered platform that gives students an approachable first step toward mental wellness support, with an AI chatbot, appointment booking and curated resources.</p>
          <p><strong>Tech stack:</strong> Spring Boot, Spring Security, JWT, MongoDB, Groq AI, HTML/CSS/JS</p>
          <p><strong>Key features:</strong></p>
          <ul>
            <li>AI-powered chatbot for first-line guidance</li>
            <li>Secure JWT-based authentication</li>
            <li>Student dashboard &amp; appointment booking</li>
            <li>Role-based access control</li>
          </ul>
        `,
        links: [
          { label: "View on GitHub", url: "https://github.com/mehulprajapati2610" }
        ]
      },

      {
        id: "dosehope",
        question: "Tell me about DoseHope",
        answer: `
          <h4>DoseHope — Medicine Donation Platform</h4>
          <p>A backend-driven platform connecting medicine donors, NGOs and volunteers, with a verified donation and tracking workflow.</p>
          <p><strong>Tech stack:</strong> Spring Boot, Spring Security, JWT, MySQL, HTML/CSS/JS</p>
          <p><strong>Key features:</strong></p>
          <ul>
            <li>JWT authentication &amp; role-based access</li>
            <li>Medicine listing &amp; donation request workflow</li>
            <li>Volunteer approval workflow</li>
            <li>REST APIs for all core operations</li>
          </ul>
          <p>Deployed live on Render, including resolving Docker/Render config and MySQL connectivity for production.</p>
        `,
        links: [
          { label: "View on GitHub", url: "https://github.com/mehulprajapati2610" }
        ]
      },

      {
        id: "chatverse",
        question: "Tell me about ChatVerse",
        answer: `
          <h4>ChatVerse — AI Character Conversation Platform</h4>
          <p>Combines backend engineering with LLMs to create natural conversations with fictional characters, instead of a generic AI chat box.</p>
          <p><strong>Tech stack:</strong> Spring Boot, Groq API, LLMs, HTML/CSS/JS</p>
          <p><strong>Key features:</strong></p>
          <ul>
            <li>Real-time AI conversations</li>
            <li>Multiple fictional character personas</li>
            <li>Prompt engineering for personality consistency</li>
          </ul>
        `,
        links: [
          { label: "View on GitHub", url: "https://github.com/mehulprajapati2610" }
        ]
      },

      {
        id: "which-project-strongest",
        question: "Which project best shows your backend skills?",
        answer: `
          <p>NeuroNudge and DoseHope are the strongest examples. Both required designing the full backend from scratch — REST APIs, JWT authentication, Spring Security and a real database (MongoDB for NeuroNudge, MySQL for DoseHope) — and DoseHope was taken all the way to a live production deployment on Render, including debugging real deployment issues.</p>
        `,
        links: []
      }

    ]
  },

  {
    id: "skills",
    label: "Skills & Tech Stack",
    icon: "code-2",
    questions: [

      {
        id: "tech-stack",
        question: "What's your overall tech stack?",
        answer: `
          <p><strong>Backend:</strong> Java, Spring Boot, Spring Security, JWT, REST APIs</p>
          <p><strong>Databases:</strong> MySQL, MongoDB</p>
          <p><strong>Frontend:</strong> HTML5, CSS3, JavaScript</p>
          <p><strong>Tools:</strong> Git, GitHub, Postman, IntelliJ IDEA, VS Code, Maven</p>
          <p><strong>Currently learning:</strong> System Design, Docker, AWS, Microservices</p>
        `,
        links: []
      },

      {
        id: "strongest-skill",
        question: "What's your strongest skill?",
        answer: `
          <p>Backend development using Java and Spring Boot. It's where I spend most of my time — designing REST APIs, authentication systems and clean application architecture.</p>
        `,
        links: []
      },

      {
        id: "database-choice",
        question: "MySQL or MongoDB — which do you prefer?",
        answer: `
          <p>It depends on the project. I use MongoDB when the data is flexible and document-based (like NeuroNudge), and MySQL when the data is structured and relational (like DoseHope).</p>
        `,
        links: []
      },

      {
        id: "currently-learning",
        question: "What are you currently learning?",
        answer: `
          <p>System Design, Docker, Advanced Spring Boot, Spring Security and AWS — with Microservices, Kubernetes, Redis and Kafka next on the list.</p>
        `,
        links: []
      }

    ]
  },

  {
    id: "background",
    label: "Education & Background",
    icon: "graduation-cap",
    questions: [

      {
        id: "education",
        question: "What's your educational background?",
        answer: `
          <p>I'm pursuing a Bachelor of Technology in Computer Science Engineering at Silver Oak University, currently in my final year, graduating in 2027.</p>
          <p>Favorite subjects: Data Structures, Operating Systems, DBMS, Computer Networks and Software Engineering.</p>
        `,
        links: []
      },

      {
        id: "experience",
        question: "Do you have any work experience?",
        answer: `
          <p>No professional industry experience yet — but I've built complete, production-style backend applications from scratch (NeuroNudge, DoseHope, ChatVerse), which means real practice with architecture, authentication, databases and deployment.</p>
        `,
        links: []
      },

      {
        id: "career-goals",
        question: "What kind of role are you looking for?",
        answer: `
          <p>Software Engineer / Backend Developer roles, ideally working with Java and Spring Boot. I'm currently looking for a Software Engineering Internship, on a team where I can keep learning while contributing.</p>
        `,
        links: []
      }

    ]
  },

  {
    id: "contact",
    label: "Contact & Resume",
    icon: "mail",
    questions: [

      {
        id: "contact-info",
        question: "How can I contact you?",
        answer: `
          <p>📧 prajapatimehul2610@gmail.com</p>
          <p>💻 <a href="https://github.com/mehulprajapati2610" target="_blank">GitHub</a></p>
          <p>🔗 <a href="https://linkedin.com/in/mehul-prajapati" target="_blank">LinkedIn</a></p>
        `,
        links: []
      },

      {
        id: "resume",
        question: "Can I see your resume?",
        answer: `
          <p>Sure — you can download it below.</p>
        `,
        links: [
          { label: "Download Resume", url: "Resume mehul.pdf", download: true }
        ]
      }

    ]
  }

];

/* ==========================================================
   LOOKUP HELPERS
========================================================== */

function getTopic(topicId) {
  return TOPICS.find(t => t.id === topicId) || null;
}

function getQuestion(topicId, questionId) {
  const topic = getTopic(topicId);
  if (!topic) return null;
  return topic.questions.find(q => q.id === questionId) || null;
}
