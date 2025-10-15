<template>
  <div class="row">
    <div class="col-lg-12">
      <div class="row" style="background-color: #adadad; border-radius: 5px">
        <div class="col-lg">
          <project-card
            :title="pageTitle"
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
      pageTitle: "Contacts",
      yearserved: "",
      contribution: [
        "Phone No.: 012-5543954",
        "Email: amirahazman95@gmail.com",
        "LinkedIn: https://www.linkedin.com/in/amirah-azman-0a2068164/ ",
      ],
    };
  },
};
</script>
