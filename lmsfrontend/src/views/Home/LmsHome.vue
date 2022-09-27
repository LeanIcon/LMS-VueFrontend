<template>
  <div class="home">
    <div class="navigation">
      <Navbar></Navbar>
    </div>

    <div class="background-1 space-up">
      <div class="header-section contain">
        <div class="header-content">
          <h1 class="title">Start Your Agile Journey With littLearn Today</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse hic
            repudiandae iusto amet, fugit animi sed autem nihil fuga odio cumque
            natus ad soluta sequi quis, consequuntur ab atque. Vitae?
          </p>
          <a href="" class="_button">Get Started</a>
        </div>
        <div class="header-video">
          <iframe
            src="https://www.youtube.com/embed/PJjEV8hDT64"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>

    <div class="space-up">
      <div class="courses-section contain">
        <p class="topic">Explore Our Courses</p>
        <div class="courses">
          <course-card></course-card>
          <course-card></course-card>
          <course-card></course-card>
        </div>
      </div>
    </div>

    <div class="space-up">
      <div class="why-litt-learn contain">
        <p class="topic">Why Litt Learn</p>
        <div class="why-litt-section">
          <div class="why-litt-details">
            <div class="little-image">
              <img src="" alt="" />
            </div>
            <p class="why-litt-title">Practical Classes To Get You Started</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
              mollitia quidem vero. Praesentium id, maiores aliquam alias quis
              impedit molestiae officia in provident quae consequatur animi,
              maxime debitis facere quos.
            </p>
          </div>
          <div class="why-litt-image">
            <img src="" alt="" />
          </div>
        </div>
        <div class="why-litt-section">
          <div class="why-litt-details">
            <div class="little-image">
              <img src="" alt="" />
            </div>
            <p class="why-litt-title">Expert Tutors</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
              mollitia quidem vero. Praesentium id, maiores aliquam alias quis
              impedit molestiae officia in provident quae consequatur animi,
              maxime debitis facere quos.
            </p>
          </div>
          <div class="why-litt-image">
            <img src="" alt="" />
          </div>
        </div>
        <div class="why-litt-section">
          <div class="why-litt-details">
            <div class="little-image">
              <img src="" alt="" />
            </div>
            <p class="why-litt-title">Huge Supply of Online Resources</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
              mollitia quidem vero. Praesentium id, maiores aliquam alias quis
              impedit molestiae officia in provident quae consequatur animi,
              maxime debitis facere quos.
            </p>
          </div>
          <div class="why-litt-image">
            <img src="" alt="" />
          </div>
        </div>
        <div class="why-litt-section">
          <div class="why-litt-details">
            <div class="little-image">
              <img src="" alt="" />
            </div>
            <p class="why-litt-title">Agile Foundation Certificate</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
              mollitia quidem vero. Praesentium id, maiores aliquam alias quis
              impedit molestiae officia in provident quae consequatur animi,
              maxime debitis facere quos.
            </p>
          </div>
          <div class="why-litt-image">
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CourseCard from "../../components/Home/CourseCard.vue";
import Navbar from "../../components/Navbar.vue";
export default {
  components: { Navbar, CourseCard },
  name: "LmsHome",
};
</script>

<style scoped>
/*styling the section containing the video */
.background-1 {
  background: url("../../assets/images/home/background1.png");
  background-size: cover;
  min-height: 400px;
}
.header-section {
  display: flex;
  align-items: center;
}

.title {
  font-family: "Yeseva One";
}

._button {
  color: #fff;
  display: inline-block;
  background: #482b20;
  border-radius: 5px;
  padding: 0.625rem 1.5rem;
  margin-top: 0.625rem;
  font-size: 16px;
  font-weight: 600;
}

.header-section > div {
  width: 50%;
}

.header-content {
  padding-right: 50px;
}
.header-video {
  aspect-ratio: 16/9;
}

iframe {
  height: 100%;
  width: 100%;
  border-radius: 5px;
}

/* courses section */

.courses-section {
}

.topic {
  text-align: center;
  font-weight: 700;
  font-size: 30px;
}

.courses {
  display: flex;
  justify-content: center;
  overflow-x: auto;
  gap: 40px;
  padding: 50px 0;
}

.contain {
  padding: 0 50px;
  max-width: 1600px;
  margin: auto;
}

.space-up {
  padding: 80px 0;
}
</style>