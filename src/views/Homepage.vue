<template>
  <div class="row">
    <div class="col-lg-12">
      <div class="row" style="background-color: #adadad; border-radius: 5px">
        <div class="col-lg-12">
          <div class="row">
            <div class="col-lg-7">
              <h1>Hello I'm Amirah Azman</h1>
              <p>
                I am a skilled Frontend Developer with extensive experience in
                Vue 2 & 3, Vite, JavaScript, npm, and Bootstrap. I specialize in
                building high-performance, responsive web applications that are
                both scalable and maintainable. With a focus on clean code and
                seamless user interfaces, I aim to deliver intuitive and
                efficient solutions for complex challenges. I am open to remote,
                hybrid, or on-site opportunities and am always looking to
                collaborate on innovative projects.
              </p>
            </div>
            <div class="col-lg-5">
              <div class="image-container">
                <img src="@/assets/img/avatar.jpg" class="circle-image" />
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-lg-6">
              <font-awesome-icon icon="fa-solid fa-map-location" /> Cyberjaya,
              Selangor.
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6">
              <font-awesome-icon icon="fa-solid fa-envelope" />
              amirahazman95@gmail.com
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6">
              <font-awesome-icon icon="fa-solid fa-phone" />
              012-5543954
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    openProjectPage() {
      this.$router.push("/projects");
    },
  },
};
</script>

<style>
.image-container {
  padding-top: 10%;
  display: flex;
  justify-content: center;
}

.circle-image {
  width: 250px;
  height: 250px;
  object-fit: cover;
  border-radius: 50%;
}
</style>
