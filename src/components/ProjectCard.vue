<template>
  <div class="row" style="padding: 20px">
    <div class="col-lg">
      <h3 class="projecttitle">{{ title }}</h3>
      <p class="minititle">{{ yearserved }}</p>
      <h5 class="projectcontribution" v-for="item in contribution">
        {{ item }}
      </h5>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    yearserved: {
      type: String,
      required: false,
    },
    contribution: { type: String, required: true },
  },
};
</script>

<style>
.projecttitle {
  font-weight: bold;
}
.minititle {
  font-size: 14px;
  font-style: italic;
}
.projectcontribution {
  padding-top: 10px;

  font-size: 15px;
}
</style>
