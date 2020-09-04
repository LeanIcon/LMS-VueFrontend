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
    alignment: center;
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
  .btn {
    border: transparent;
    background-color: rgba(195, 0, 12, 1); 
    margin-left: 13rem;
    margin-top: 5rem;
    text-decoration: none;
    width: 30%;
    color: #fff;

  }
  .btn:hover {
    color: #fff;

  }
      /* <div class="forms-container">
        <div class="reset-home">
          <div class="title">
            <h1>Having troubles logging in?</h1>
          </div>
          <div class="additional-info">
            <p class="info">
              Enter your LMS id to reset your password
            </p>
            <div class="email-input">
              <form action="" method="post" class="form-element">
                <input type="email" name="accountemail" id="email" v-model="email" required placeholder="Email Address">
                <button type="submit" class="send-reset">
                  Send request
                </button>
              </form>
            </div>
          </div>          
        </div>
      </div>
  </div>    
</template>


<script>
export default {

}
</script>

<style scoped>
.forms-container{
  width: 100%;
  height: 100%;
  padding: auto 0;
}

.reset-home{
  width: 50vw;
  height: 50vh;
  margin: auto;
  margin-top: 12.5%;
}

.title{
  text-align: center;
  margin: 3rem 0 2rem 0;
}

.additional-info{
  display: grid;
  place-items: center;
}

.info{
  text-align: center;
}

.form-element{
  display: grid;
  place-items: center;
}

form > input {
  height: 2.3rem;
  width: 25rem;
  margin-bottom: 1rem;
}

.send-reset{
  margin: 0 auto;
  margin-top: 10px;
  width: 10rem;
  border-style: none;
  background-color: rgba(190,30,45,1);
  border-radius: 4px;
  height: 2.3rem;
  color: white;
}

</style> */