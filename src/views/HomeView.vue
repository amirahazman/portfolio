<template>
    <section class="home">
        <h2>Hi, I'm <span class="highlight">Amirah Azman</span></h2>
        <p class="role">Frontend Developer with Full-Stack Awareness</p>

        <p class="summary">
            I specialize in building modern, responsive web interfaces with
            <strong>Vue.js</strong>, <strong>JavaScript</strong>, <strong>HTML5</strong>, and <strong>CSS3</strong>.
            I translate UI/UX designs from tools like <strong>Figma</strong> into clean, interactive dashboards, often
            within
            <strong>CRM-style applications</strong> similar to WordPress workflows.
        </p>

        <p class="summary">
            On the backend, I have experience creating lightweight APIs and basic CRUD systems using
            <strong>Go (Golang)</strong> and <strong>PostgreSQL</strong>, integrating them seamlessly into the frontend.
        </p>

        <div class="skills">
            <h3>Key Strengths</h3>
            <ul>
                <li>⚡ Responsive UI development with Vue.js</li>
                <li>🎯 UI/UX implementation from Figma to code</li>
                <li>🔧 CRUD operations with Go + PostgreSQL</li>
                <li>🔍 Debugging with browser tools & Postman</li>
                <li>📦 Containerization using Docker & Kubernetes (basic)</li>
                <li>🚀 Deployments on cloud/VPS with CI/CD pipelines</li>
                <li>🧠 Git version control via GitHub & GitLab</li>
            </ul>
        </div>

        <!-- ✅ NEW: Agile & Collaboration Section -->
        <div class="workflow">
            <h3>Workflow & Collaboration</h3>
            <ul>
                <li>🔄 Experienced in Agile/Scrum teams with daily standups and sprint planning</li>
                <li>📋 Skilled in breaking down features and delivering incremental improvements</li>
                <li>✅ Regularly contribute to retrospectives and sprint reviews</li>
                <li>🧪 Prepare and manage UAT documentation in collaboration with QA teams</li>
                <li>🤝 Ensure features align with business goals before release</li>
            </ul>
        </div>

        <div class="actions">
            <a href="mailto:you@example.com" class="btn">Contact Me</a>
            <a href="../assets/pdf/Amirah Azman - Software Engineer - Resume.pdf" class="btn outline" target="_blank">Download Resume</a>
        </div>
    </section>
</template>

<style scoped>
.home {
    padding: 2rem;
    max-width: 800px;
    margin: auto;
    text-align: center;
}

.highlight {
    color: #3b82f6;
    font-weight: bold;
}

.role {
    font-size: 1.4rem;
    margin-top: 0.5rem;
    color: #6b7280;
}

.summary {
    font-size: 1.05rem;
    line-height: 1.6;
    margin-top: 1rem;
    text-align: left;
}

.skills,
.workflow {
    margin-top: 2rem;
    text-align: left;
}

.skills h3,
.workflow h3 {
    margin-bottom: 0.5rem;
    color: #3b82f6;
}

.skills ul,
.workflow ul {
    list-style: none;
    padding-left: 0;
}

.skills li,
.workflow li {
    margin: 0.5rem 0;
}

.actions {
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    gap: 1rem;
}

.btn {
    padding: 0.75rem 1.5rem;
    background-color: #3b82f6;
    color: white;
    border-radius: 6px;
    text-decoration: none;
    font-weight: bold;
}

.btn.outline {
    background-color: transparent;
    border: 2px solid #3b82f6;
    color: #3b82f6;
}
</style>
