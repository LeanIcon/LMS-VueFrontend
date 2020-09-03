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
            <form action="post">
              <input type="text" placeholder="email" class="input-container">
                                
            </form>
          
              <router-link :to = "{ name:'signin' }" exact class="btn signup_btn">Send request</router-link>
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
<style>
  body{
    width: 100%;
    overflow: hidden;
  }
  form input{
    display: block;
  }
  #container_title h2{
    font-family: 'Noto Sans TC', sans-serif, 'Source Sans Pro';
    font-size: 40px;
    font-weight: 500;
    margin: auto;
    margin-bottom: 20px;
    margin-left: 20px;
  }
  .forgotpassword{

  }
  .main_container{
    alignment: center;

  }
  .paragraph{
    text-align: center;
  }
</style>