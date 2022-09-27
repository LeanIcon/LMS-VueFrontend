<template class="body">
  <div>
    <div class="navigation">
      <Navbar></Navbar>
    </div>

    <div class="home">
      <div class="background-1 space-up">
        <div class="header-section contain">
          <div class="header-content">
            <h1 class="title">Start Your Agile Journey With littLearn Today</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse hic
              repudiandae iusto amet, fugit animi sed autem nihil fuga odio
              cumque natus ad soluta sequi quis, consequuntur ab atque. Vitae?
            </p>
            <a href="#" class="_button">Get Started</a>
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
          <div class="courses for-flex">
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

      <div class="where-to-start separate">
        <div class="start-content">
          <p class="title">
            Don't know where to start? <br />
            Let's help you out register for a free course
          </p>

          <a href="" class="_button">Free Demo</a>
        </div>
      </div>

      <div class="clients separate">
        <img src="@/assets/images/home/clients.png" alt="" />
      </div>

      <div class="our-learners contain">
        <img src="@/assets/images/home/ourlearners.png" alt="" />
        <img src="@/assets/images/home/socialfollowing.png" />
        <p class="topic">
          Join over <span style="color: #faaf3a">5 million</span> learners
          <br />
          Share your experience
        </p>
      </div>

      <div class="space-up">
        <div class="contain testimonial-section">
          <p class="topic">What our students say about us</p>
          <div class="for-flex">
            <testimonial-card></testimonial-card>
            <testimonial-card></testimonial-card>
            <testimonial-card></testimonial-card>
          </div>
        </div>
      </div>
    </div>

    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "../../components/Footer.vue";
import CourseCard from "../../components/Home/CourseCard.vue";
import TestimonialCard from "../../components/Home/TestimonialCard.vue";
import Navbar from "../../components/Navbar.vue";
export default {
  components: { Navbar, CourseCard, TestimonialCard, Footer },
  name: "LmsHome",
};
</script>

<style scoped>
.home {
  background: url("../../assets/images/home/background.png");
  background-size: cover;
}

/*styling the section containing the video */

.background-1 {
  /* background: url("../../assets/images/home/background1.png"); */
  min-height: 400px;
}

.header-section {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
}

.title {
  font-family: "Yeseva One";
}

._button {
  color: #fff;
  display: inline-block;
  background: #007bff;
  border-radius: 5px;
  padding: 1rem 4rem;
  margin-top: 0.625rem;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
}

._button:hover {
  background: rgba(0, 123, 255, 0.9);
}

._button:active {
  background: rgba(0, 123, 255, 0.8);
}

.header-section > div {
  width: 50%;
}

.header-content {
  /* padding-right: 50px; */
  max-width: 650px;
}

.header-content .title {
  font-size: 60px;
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
  text-transform: capitalize;
}

.courses {
  padding: 50px 0;
}

.for-flex {
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
  gap: 40px;
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

.why-litt-image img {
  object-fit: contain;
  width: 90%;
  max-height: 400px;
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

/* Where to start styling */

.where-to-start {
  height: 400px;
  background: url("../../assets/images/home/wheretostart.png");
  display: flex;
  justify-content: center;
  align-items: center;
}

.start-content {
  text-align: center;
}

.start-content .title {
  text-transform: capitalize;
  color: #fff;
  font-size: 35px;
  font-weight: 700;
}

/* clients section */

.clients img {
  width: 100%;
  max-height: 500px;
}

/* learners section */

.our-learners {
  text-align: center;
}

.our-learners img:first-child {
  width: 100%;
  display: block;
}
.our-learners img:nth-child(2) {
  display: block;
  margin-inline: auto;
  width: min(70%, 1000px);
  margin-bottom: 50px;
}

/* testimonial section styling */

.contain {
  padding: 0 50px;
  max-width: 1600px;
  margin: auto;
}

.space-up {
  padding: 80px 0;
}

.separate {
  margin: 80px 0;
}
</style>