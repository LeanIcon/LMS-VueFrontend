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
            <div class="little-image" style="background: #473028">
              <img src="@/assets/images/home/littleimage1.png" alt="" />
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
            <img src="@/assets/images/home/image1.png" alt="" />
          </div>
        </div>
        <div class="why-litt-section">
          <div class="why-litt-details">
            <div class="little-image" style="background: #faaf3a">
              <img src="@/assets/images/home/littleimage2.png" alt="" />
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
            <img src="@/assets/images/home/image2.png" alt="" />
          </div>
        </div>
        <div class="why-litt-section">
          <div class="why-litt-details">
            <div class="little-image" style="background: #c0333d">
              <img src="@/assets/images/home/littleimage3.png" alt="" />
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
            <img src="@/assets/images/home/image3.png" alt="" />
          </div>
        </div>
        <div class="why-litt-section">
          <div class="why-litt-details">
            <div class="little-image" style="background: #473028">
              <img src="@/assets/images/home/littleimage4.png" alt="" />
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
            <img src="@/assets/images/home/image4.png" alt="" />
          </div>
        </div>
      </div>
    </div>

    <div class="where-to-start space-up">
      <div class="start-content">
        <p class="title">
          Don't know where to start? <br />
          Let's help you out register for a free course
        </p>

        <a href="" class="_button">Free Demo</a>
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

/* Why Litt Learn Section */

.why-litt-section {
  display: flex;
  padding: 50px 0;
  align-items: center;
  justify-content: center;
  gap: 20px;
}

.why-litt-section:nth-child(odd) {
  flex-direction: row-reverse;
}

.why-litt-section > .why-litt-details {
  width: 40%;
}

.why-litt-section > .why-litt-image {
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.little-image {
  border-radius: 50%;
  background: red;
  width: 70px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
}

.little-image img {
  width: 80%;
  height: 80%;
}

.why-litt-title {
  font-size: 35px;
  line-height: 40px;
}

.why-litt-title + p {
  font-size: 1rem;
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