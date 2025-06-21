<template>
  <div class="resume">
    <header class="header">
      <h1>{{ name }}</h1>
      <p class="title">{{ title }}</p>
      <p class="location">{{ location }}</p>
      <p class="contact">{{ phone }} | {{ email }}</p>
    </header>

    <section class="summary">
      <h2>Professional Summary</h2>
      <p>{{ summary }}</p>
    </section>

    <section class="skills">
      <h2>Skills</h2>
      <div v-for="(group, index) in skills" :key="index" class="skill-group">
        <h3>{{ group.category }}</h3>
        <ul>
          <li v-for="skill in group.items" :key="skill">{{ skill }}</li>
        </ul>
      </div>
    </section>

    <section class="experience">
      <h2>Experience</h2>
      <div v-for="(job, index) in experience" :key="index" class="job">
        <h3>{{ job.company }} <span class="role">/ {{ job.role }}</span></h3>
        <p class="period">{{ job.period }}</p>
        <ul>
          <li v-for="point in job.responsibilities" :key="point">{{ point }}</li>
        </ul>
      </div>
    </section>

    <section class="education">
      <h2>Education</h2>
      <div>
        <h3>{{ education.institution }}</h3>
        <p class="period">{{ education.period }}</p>
        <p>{{ education.degree }}</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "Amirah Azman",
      title: "Software Engineer",
      location: "Cyberjaya, Selangor",
      phone: "012-5543954",
      email: "amirahazman95@gmail.com",
      summary:
        "Full-stack developer with strong frontend specialization and a solid backend foundation, experienced in building responsive dashboards, real-time systems, and operational tools using Vue.js, Golang, and PostgreSQL. Proficient in containerization, API integration, Agile collaboration, and UAT processes.",
      skills: [
        {
          category: "Frontend Development",
          items: [
            "Vue.js",
            "JavaScript",
            "HTML5",
            "CSS3",
            "Figma-to-Code translation",
            "Responsive Dashboards",
            "CRM-style UI",
          ],
        },
        {
          category: "Backend Development",
          items: ["Golang", "PostgreSQL", "REST APIs", "CRUD Operations", "WebSocket Integration"],
        },
        {
          category: "Debugging & Testing",
          items: ["Postman", "Browser DevTools", "Network Debugging", "Performance Optimization"],
        },
        {
          category: "DevOps & Deployment",
          items: ["Docker", "Kubernetes", "VPS/Cloud Deployment", "Basic CI/CD", "Web Server Setup"],
        },
        {
          category: "Version Control & Collaboration",
          items: ["Git", "GitHub", "GitLab", "Branching Strategies", "Merge Requests", "Issue Tracking"],
        },
        {
          category: "Documentation & QA",
          items: ["UAT Documentation", "Stakeholder Collaboration", "QA Coordination"],
        },
        {
          category: "Agile Development",
          items: ["Scrum", "Daily Standups", "Sprint Planning", "Task Breakdown", "Incremental Delivery"],
        },
      ],
      experience: [
        {
          company: "Vectolabs Technologies Sdn. Bhd.",
          role: "Software Engineer",
          period: "April 2019 – Present",
          responsibilities: [
            "Developed Smart Street Light System with Vue.js, Golang, PostgreSQL, and WebSocket",
            "Built real-time dashboards for voltage, current, and energy monitoring",
            "Created Smart Toilet Management System UI and backend services deployed on Kubernetes",
            "Implemented Fleet Management System dashboards with video playback and panic alerts",
            "Collaborated in Agile teams and authored UAT documentation",
          ],
        },
      ],
      education: {
        institution: "Universiti Putra Malaysia",
        period: "Sept 2014 – Jun 2018",
        degree: "Bachelor of Computer Science (Major in Computer Network)",
      },
    };
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap');

.resume {
  max-width: 750px;
  margin: 2.5rem auto;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: #2c3e50;
  background: #fdfdfd;
  padding: 2.5rem 3rem;
  border-radius: 12px;
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.1);
  line-height: 1.55;
}

.header {
  text-align: center;
  margin-bottom: 3rem;
  border-bottom: 2px solid #e0e0e0;
  padding-bottom: 1.5rem;
}

.header h1 {
  font-weight: 700;
  font-size: 2.8rem;
  margin-bottom: 0.2rem;
  color: #34495e;
}

.header .title {
  font-weight: 600;
  color: #7f8c8d;
  font-size: 1.15rem;
  margin-bottom: 0.4rem;
}

.header .location {
  font-size: 1rem;
  color: #95a5a6;
  margin-bottom: 0.5rem;
  letter-spacing: 0.05em;
}

.header .contact {
  font-size: 0.95rem;
  color: #7f8c8d;
  letter-spacing: 0.05em;
}

h2 {
  font-weight: 600;
  font-size: 1.6rem;
  border-bottom: 3px solid #3498db;
  padding-bottom: 0.35rem;
  margin-bottom: 1.25rem;
  color: #34495e;
}

.skill-group {
  margin-bottom: 1.25rem;
}

.skill-group h3 {
  font-weight: 600;
  font-size: 1.1rem;
  color: #2980b9;
  margin-bottom: 0.45rem;
}

ul {
  padding-left: 1.4rem;
}

li {
  margin-bottom: 0.5rem;
  font-size: 1rem;
  color: #2c3e50;
}

.job {
  margin-bottom: 2rem;
}

.job h3 {
  font-weight: 700;
  font-size: 1.2rem;
  color: #34495e;
  margin-bottom: 0.25rem;
}

.job .role {
  font-weight: 500;
  color: #7f8c8d;
  font-style: normal;
  font-size: 1rem;
}

.job .period {
  font-style: italic;
  font-weight: 500;
  color: #95a5a6;
  margin-bottom: 0.8rem;
  font-size: 0.95rem;
}

.education h3 {
  font-weight: 700;
  font-size: 1.2rem;
  color: #34495e;
  margin-bottom: 0.3rem;
}

.education .period {
  font-style: italic;
  font-weight: 500;
  color: #95a5a6;
  margin-bottom: 0.7rem;
  font-size: 0.95rem;
}
</style>
