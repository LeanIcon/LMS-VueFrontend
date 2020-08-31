
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
      
                          <form action="post">
                              <input type="text" placeholder="username" class="input-container">
                              <input type="password" placeholder="password" class="input-container">
                          </form>
                          <div class="form-alt row">
                              <div class="group col-md">
                                  <input id="check" type="checkbox" class="check" checked>
                                  <label for="check"><span class="icon"></span> Remember me</label>
                              </div>
                              <div class="forgot_password col-md">
                              
                              <router-link :to = "{ name:'Forgotpassword' }" exact class="forgot_password">Forgot Password</router-link>

                          </div>
                          </div>
                          
                          <div class="btn login_btn">
                              Login
                          </div>
                            <router-link :to = "{ name:'Register' }" exact class="btn signup_btn">Sign Up</router-link>
                          
                      </div>
                  </div>

              </div>
              
          </div>

          </div>
    
        </div>  

  
</template>

                  <div class="signin-container col">
                     <div class="sign-process a">
								<div id="container_title" >
									<h2>
											Sign In to LiTT LMS 
									</h2>
								</div>
      
								<form action="post" class="form-signin" v-on:submit.prevent="login">
									<input type="email" v-model="email" id="inputEmail" placeholder="Email address" required autofocus class="input-container">
									<div v-show="submitted && !email" class="invalid-feedback">Email is required</div>
									<input type="password" placeholder="password" class="input-container" v-model="password" id="inputPassword" required >
								</form>
								<div class="form-alt row">
									<div class="group col-md">
										<input id="check" type="checkbox" class="check" checked >
										<label for="check"><span class="icon"></span> Remember me</label>
									</div>
									<div class="forgot_password col-md">
										<router-link :to = "{ name:'Forgotpassword' }" exact class="forgot_password">Forgot Password</router-link>
									</div>
                        </div>
                          
								<div class="btn login_btn">
									Login
								</div>
                           <router-link :to = "{ name:'Register' }" exact class="btn signup_btn">Sign Up</router-link>
                        </div>
							</div>
						</div>
					</div>
				</div>
        </div>  
</template>

<script>
import { store } from '../store/store';
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
          this.$router.push({ name: 'About' })
        })
        .catch(err => {
          console.log(err)
          this.incorrectAuth = true
        })
        }
      }
  }
</script>
  


<style lang= "scss"> 
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300;400;500;700&display=swap');

body{
    width: 100%;
    overflow: hidden;
}
.image_thumb img{
    width: 50vw;
    height: 85vh;
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
    width: 55%;
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

.login_btn{
    background:rgba(190,30,45,255);
    border-radius: 5px;
    color: #fff;
    width: 40%;
}

.signup_btn{
    background: #fff;
    border: 1px solid #000;
    border-radius: 5px;
    color: rgb(0, 0, 0);
    width: 48%;    
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
    margin: 0 auto;
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
</style>