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
      companyName: "Vectolabs Technologies Sdn. Bhd.",
      yearserved: "April 2019 - August 2025",
      contribution: [
        "Frontend Development: Translated the provided UI/UX designs into fully functional code, building out forms, buttons, graphs, and other UI elements to ensure a responsive and intuitive user experience.",
        "UI Integration: Implemented the frontend interface based on the design specifications, ensuring accurate visual representation and interaction flow.",
        "Backend Integration: Connected the frontend to the backend through REST APIs, enabling seamless data communication between the user interface and the system’s core functionalities.",
        "Real-Time Data Updates: Utilized WebSockets to provide real-time updates on key data, such as the current light status, ensuring users receive live feedback.",
        "Collaboration with Design Team: Worked closely with the design team to ensure their concepts were accurately translated into functional code, while maintaining the integrity of the design.",
      ],
    };
  },
};
</script>
