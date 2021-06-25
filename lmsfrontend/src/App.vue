<template>
  <div id="app">
    <div class="beta-tag">BETA</div>
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
export default {
  name: 'App',
  component:{
	Navbar,
  Footer
  },
  }
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300;400;500;700;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,400;1,900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700&display=swap');
*{
  font-family: 'Noto Sans', 'Lato', sans-serif;
}

@-ms-viewport {
  width: device-width;
}

.sidebar{
    position: fixed;
    z-index: 2;
    top: 0;
}

.dashnav{
    position: static;
    z-index: 1;
}

.page--body--container{
    padding-left: 4.5rem;
    width: 100%;
}

.ini-title{
    font-family: 'Poppins', 'Lato'
}

.plyr__poster{
    background-size: cover !important;
}

.beta-tag{
  content: "beta";
  position: fixed;
  width: 80px;
  height: 25px;
  background: #850000;
  top: 7px;
  right: -20px;
  text-align: center;
  font-size: 13px;
  font-family: sans-serif;
  text-transform: uppercase;
  font-weight: bold;
  color: #fff;
  line-height: 27px;
  transform:rotate(45deg);
  z-index: 100;
}

.return_btn{
  z-index: 30;
}

@media screen and (max-width: 754px){
  .tawk-min-container{
    display: none !important;
  }

}
</style>
