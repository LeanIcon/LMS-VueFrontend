<template>
  <div class="home">
    <Navbar></Navbar>
      <div class="main-content">
        <div class="section row pt-5 pl-5 pr-5">
          <div class="col-6">
            <h2 class="ft-title">Start your Agile Jouney with littlearn today</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat gravida malesuada urna tincidunt facilisis varius sed. Lorem rhoncus rhoncus nibh ac diam. Imperdiet ac.</p>
            <div class="btn ft-btn mt-4">Get Started</div>
          </div>
          <div class="col-6">
            <div class="featured-video">
              <iframe
                src="https://www.youtube.com/embed/grpFTo6uEsY"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
        <div class="clients-section">
          <div class="row sc-title">
            <h4>Over 1K clients growing with us</h4>
          </div>
          <div class="row clients">
            <div class="col client-logo">image 1</div>
            <div class="col client-logo">image 2</div>
            <div class="col client-logo">image 3</div>
            <div class="col client-logo">image 4</div>
            <div class="col client-logo">image 5</div>
            <div class="col client-logo">image 6</div>
            <div class="col client-logo">image 7</div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'Home',
  components :{
    Navbar
  },
}

</script>
<style>
  .section {
    width: 100%;
  }
  
  .ft-title {
  font-family: 'Yeseva One';
  font-style: normal;
  font-weight: 600;
  font-size: 68px;
  line-height: 78px;
  color: #312A26;
  }

  .ft-btn {
    color: #ffffff;
    background: #482B20;
    border-radius: 5px;
  }

  .featured-video {
    width: 100%;
    aspect-ratio: 16/9;
  }

  .clients-section {
    /* position: absolute; */
    width: 100%;
    height: 452px;
    /* left: 2px;
    top: 872px; */
    background: rgba(108, 96, 90, 0.06);
  }

  .clients, .sc-title {
    width: 80%;
    margin: auto;
  }

  .client-logo {
    width: 5%;
    height: 100px;
    border: #312A26 solid 1px;
  }
</style>