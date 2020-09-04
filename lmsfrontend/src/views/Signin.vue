<template>
    <div class="signin">
        <router-link to="/signin"></router-link>
        <router-view/>
        
        <div id="content-container"> 
            <div class="sign_in_page">
                <div class="row">
                    <div class="image_thumb col">
                        <img src="../assets/pexels_retha_ferguson_3810788.png" alt="image_thumb">
                    </div>
                    <div class="signin-container col">
                        <div class="sign-process a">
                            <div id="container_title" >
                                <h2>
                                        Sign In to LiTT LMS
                                </h2>
                            </div>

                            <form class="form-signin" v-on:submit.prevent="login" id='login-form'>
                                <input type="email" v-model="email" id="inputEmail" placeholder="Email address" required autofocus class="input-container">
                                <div v-show="submitted && !email" class="invalid-feedback">Email is required</div>
                                <input type="password" placeholder="password" class="input-container" v-model="password" id="inputPassword" required >
                          </form>
                          <div class="form-alt row">
                              <div class="group col-md">
                                  <input id="check" type="checkbox" class="check" checked>
                                  <label for="check"><span class="icon"></span>
                                    <p class="rememberme">
                                       Remember me
                                    </p>
                                </label>
                              </div>
                              <div class="forgot_password col-md">
                              <router-link :to = "{ name:'Forgotpassword' }" exact class="forgot_password">Forgot Password</router-link>
                          </div>
                          </div>
                          <div class="container_button">
                            <button class="btn login_btn" type="submit"  form='login-form'>
                                <!-- <span class="spinner-border spinner-border-sm load-signal" role="status" aria-hidden="true"></span> -->
                                Login
                            </button>
                            <!-- <button class="btn btn-primary" type="button" disabled>
                                <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                <span class="sr-only">Loading...</span>
                            </button> -->
                            <router-link :to = "{ name:'Register' }" exact class="btn signup_btn">Sign Up</router-link>
                          </div>
                      </div>
                  </div>

              </div>
              
          </div>

          </div>
    
        </div> 
</template>

<script>
import { store } from '../store/user';
  export default {
    name: 'login',
    data () {
      return {
        email: '',
        password: '',
        incorrectAuth: false,
        submitted: false
      }
    },
    methods: { 
      login () { 
        store.dispatch('userLogin', {
          email: this.email,
          password: this.password
        })
        // Replace '/' with the homepage
        .then(() => {
          this.$router.push({ name: 'Dashboard' })
        })
        .catch(err => {
          console.log(err)
          this.incorrectAuth = true
        })
        }
      }
  }
</script>
  

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

<style lang="scss" scoped> 
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300;400;500;700&display=swap');

body{
    width: 100%;
    overflow: hidden;
}

// .load-signal{
//     visibility: hidden;
// }

.rememberme{
    margin-left: .5rem;
}

.image_thumb img{
    width: 50vw;
    height: 85.2vh;
}

form input{
    display: block;
}

.signin-container, .signup-container{
    margin: auto;
    padding: auto;
    place-items: center;
    place-content: center;
}
.signup-container{
    text-align: center;
}

.sign-process{
    width: 65%;
    margin: auto;
    padding: auto;
}

form input{
    margin: auto;
    margin-bottom: 10px;
    width: 98%;
    height: 40px;
}

#container_title h2{
    font-family: 'Noto Sans TC', sans-serif, 'Source Sans Pro';
    font-size: 40px;
    font-weight: 500;
    margin: auto;
    margin-bottom: 20px;
}

.btn{
    margin-top: 20px;
}

.login_btn {
    background: #be1e2d;
    border-radius: 5px;
    color: #fff;
    width: 45%;
    margin-right: 35px;
}    

.signup_btn{
    background: #fff;
    border: 1px solid #000;
    border-radius: 5px;
    color: rgb(0, 0, 0);
    width: 45%;    
}

.login_btn:hover{
    background-color: rgb(134, 15, 15);
    color: #fff;
}

.signup_btn:hover{
    background-color: rgb(134, 15, 15);
    color: #fff;
    border-radius: 5px;
    border: none;
}

.signup_now{
    width: 180px;
    margin-left: 20 auto;
    border-radius: 5px;
    background:rgba(190,30,45,255);
    color: #fff;
}

.signup_now:hover{
    background-color: rgb(134, 15, 15);
    color: #fff;
}

.forgot_password{
    margin-top: 10px;
}

.footer{
    background: rgba(190,30,45,255);
    height: 15vh;
    color: #fff;
    place-content: center;
    text-align: center;
}

.litt_logo img{
    height: 120px;
}

.footer-creds{
    margin: auto;
}

.footer-creds a{
    text-decoration: none;
    color: #fff;
    margin-left: 20px;
}

#check{
  margin-left: 5px;
}
.forgot_password {
	margin-top: 0px;
	text-decoration: none;
	
	margin-left: 20px;
}
.container_sign .btn {
margin-left: 20px;
}


</style>
