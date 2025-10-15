<template>
  <div class="row">
    <div class="col-lg-12">
      <div class="row" style="background-color: #adadad; border-radius: 5px">
        <div class="col-lg">
          <project-card
            :title="companyName"
            :yearserved="yearserved"
            :contribution="contribution"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      companyName: "Skills",
      yearserved: "",
      contribution: [
        "Languages: HTML, CSS, JavaScript",
        "Frontend Framework: Vue.js",
        "Data Visualization: Chart.js",
        "API Integration: API Integration using Axios and the native Fetch API for RESTful communication.",
        "Real-Time Communication: WebSocket & Socket.IO",
        "State Management: Vuex, Session Storage & Local Storage",
        "Data Passing: URL Parameters",
        "Styling: CSS, SCSS, Styled Components & Bootstrap",
        "Build Tools / Package Management: Webpack, Vite & npm",
        "Version Control: Git, GitHub & GitLab",
        "Backend Development: Basic Golang, PostgreSQL, REST APIs, CRUD Operations",
        "Debugging & Testing: Postman, Browser DevTools",
        "DevOps & Deployment: Docker, Kubernetes, Cloud Deployment, Basic CI/CD, Web Server Setup",
        "Documentation & QA: UAT Documentation",
      ],
    };
  },
};
</script>
