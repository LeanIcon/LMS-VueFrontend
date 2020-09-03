<template>
<div class="register">
    <router-link to="/register"></router-link>
      <router-view/>
   <div id="content-container">
        <div class="sign_in_page">
            <div class="row">
                <div class="image_thumb col">
                    <img src="../assets/pexels_retha_ferguson_3810788.png" alt="image_thumb">
                </div>
                <div class="back_arrow">
                     <router-link :to = "{ name:'Home' }" exact class="back_arrow"><img src="../assets/arrow.png"  height=20px width=30px></router-link>
                    
                </div>

                <div class="signup-container col">
                    
                    <div class="sign-process">
                        <div id="container_title">
                            <h2>
                                Sign Up to LiTT LMS
                            </h2>
                        </div>

                        <form id='signup-form' v-on:submit.prevent="register">
                            <input type="text" placeholder="First Name" class="input-container" v-model="firstname">
                            <input type="text" placeholder="Last Name" class="input-container" v-model="lastname">
                            <input type="text" placeholder="Email" class="input-container" v-model="email">
                            <!-- <input type="text" placeholder="Phone Number" class="input-container" v-model="firstname"> -->
                            <!-- <input type="text" placeholder="Country or region of residence" class="input-container" v-model="firstname"> -->
                            <input type="password" placeholder="password" class="input-container" v-model="password">
                            <input type="password" placeholder="confirm password" class="input-container" v-model="confirm_password" :error="!valid()">
                            <input type="text" placeholder="confirm password" class="input-container" v-model="student_type" :error="!valid()">
                        </form>
                        <div class="group">
                            <input id="check" type="checkbox" class="check" checked>
                            <label for="check"><span class="icon"></span> I agree with the terms and conditions</label>
                        </div>
                        <button class="btn signup_now" type="submit"  form='signup-form'>
                            Sign Up
                        </button>
                        <div class="forgot_password">
                            <a href="signin.html">Already a member?</a>
                        </div>
                    </div>
                </div>


            </div>
            
        </div>

    </div>

</div>    
</template>

<script>
import { store } from '../store/user.js';
  export default {
    name: 'register',
    data () {
      return {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        student_type: '',
        userExists: false,
        submitted: false
      }
    },
    methods: {
      register() { 
        if(this.valid()){
            store.dispatch('userRegister', {
              firstname: this.firstname,
              lastname: this.lastname,
              email: this.email,
              password: this.password,
              student_type: this.student_type
            })
            // Replace '/' with the homepage
            .then(({ status }) => {
                this.$router.push({ name: 'Dashboard' })
                console.log('check your email')
                console.log(status)
            })
            .catch(err => {
                console.log(err)
                this.userExists = true
            })
            }
        },
        valid(){
            return this.password === this.confirm_password;
        }

      }
  }
</script>

<style lang="scss">
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
    width: 48%;
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


/** .footer{
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
}**/
</style>
