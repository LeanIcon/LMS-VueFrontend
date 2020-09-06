<template>
  <div class="forgotpassword">
  <Footer></Footer>
    <router-link to="/forgotpassword"></router-link>
      <router-view/>
      <div class="main_container">
        <div>
          <h2 class="container_title">Having trouble logging in?</h2>
        </div>
          <div>
            <p class="paragraph">Please enter your LMS-id to reset your password</p>
            <form class="form" action="post">
              <input type="text" placeholder="email" class="input-container">
                                
            </form>
            <div class="button-area row">
              <button class="btn signup_btn col-12" type="submit">Send request</button>
            </div>
          </div>
        </div>
  </div>    
</template>
<script>
    // @ is an alias to /src
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components :{
    Footer
  },
}
</script>
<style scoped>
  body{
    width: 100%;
    overflow: hidden;
  }
  form input{
    display: block;
  }
  .container_title{
    font-family: 'Noto Sans TC', sans-serif, 'Source Sans Pro';
    font-size: 40px;
    font-weight: 500;
    margin: auto;
    margin-bottom: 20px;
    margin-left: 20px;
    text-align: center;
  }
  /* .forgotpassword{

  } */
  .main_container{
    /* alignment: center; */
    border: transparent;
    margin-left: 20em;
    margin-right: 20em;
    margin-top: 5rem;

  }
  .paragraph{
    text-align: center;
  }

  .input-container{
    width:70%;
    margin: 0 auto;
    margin-top: 2rem;
  }

  .button-area{
    margin: 0 auto;
    width: 20rem;
  }

  .btn {
    border: transparent;
    background-color: rgba(195, 0, 12, 1);
    text-decoration: none;
    width: 6rem !important;
    color: #fff;
    margin: 3rem auto;

  }
  .btn:hover {
    color: #fff;
  }

</style>     