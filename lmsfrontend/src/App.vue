<template>
  <div id="app">
    <!-- <div class="beta-tag">BETA</div> -->
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
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200&display=swap');

*{
  font-family: 'Montserrat', 'Noto Sans', 'Lato', sans-serif;
}

.btn-primary{
  background-color: rgba(14, 156, 245, 1) !important;
  border: 1px solid rgba(14, 156, 245, 1) !important;
}

.btn-primary:hover{
  background-color: rgb(3, 144, 231) !important;
  border: 1px solid rgb(3, 144, 231) !important;
}

.btn:focus, .btn:active, .btn:active:focus{
    outline: none !important;
    box-shadow: none;
}

p, li, a, input{
  font-size: 14px;
}

@-ms-viewport {
  width: device-width;
}

h1{
    font-weight: 600;
    font-size: 50px;
}

h4{
    font-weight: 500;
    font-size: 30px;
}

.sidebar{
    position: fixed;
    z-index: 2;
    top: 0;
}

.nav-logo{
  width: 150px;
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
    font-family: 'Montserrat', 'Lato'
}

.plyr__poster{
    background-size: cover !important;
}

.spacer-lg{
  height: 16rem;
}

.spacer-md{
  height: 8rem;
}

.spacer-sm{
  height: 4rem;
}

.spacer-xs{
  height: 2rem;
}

.spacer-2x{
  height: 1.5rem;
}


/* .beta-tag{
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
} */

.return_btn{
  z-index: 30;
}


.card-shadow{
    border: none;
    border-radius: 16px;
    filter: drop-shadow(0px 16px 16px rgba(50, 50, 71, 0.08)) drop-shadow(0px 24px 32px rgba(50, 50, 71, 0.08));
}

@media screen and (max-width: 754px){
  .tawk-min-container{
    display: none !important;
  }

}
</style>
