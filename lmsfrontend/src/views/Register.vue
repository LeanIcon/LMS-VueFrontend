<template>
<div class="register">
    <router-link to="/register"></router-link>
      <router-view/>
    <Footer></Footer>
   <div id="content-container">
        <div class="sign_in_page">
            <div class="row">
                
                <div class="image_thumb col">
                            <!-- <p>{{ errinfo }}</p> -->
                    <div class="alert alert-box" v-if="alertUser">
                        <span class="closebtn" @click="formEvent">&times;</span> 
                        <strong>Error!</strong> {{ errinfo }}
                    </div>
                    <img src="https://res.cloudinary.com/littlms/image/upload/q_65/v1599265733/image%20sources%20litt/pexels_retha_ferguson_3810788.592f68c3_i8ahps.webp" alt="image_thumb">
                </div>
                <div class="back_arrow">
                     <router-link :to = "{ name:'Home' }" class="back_arrow"><img src="../assets/arrow.png"  height=20px width=25px></router-link>
                    
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
                            <!-- <input type="text" placeholder="confirm password" class="input-container" v-model="student_type" :error="!valid()"> -->
                        </form>
                        <div class="group">
                            <input id="check" type="checkbox" class="check" checked>
                            <label for="check"><span class="icon"></span>
                                <p class="agree">
                                 I agree with the terms and conditions
                                </p>
                            </label>
                        </div>
                        <button class="btn signup_now" type="submit"  form='signup-form'>
                            Sign Up
                        </button>
                        <div class="forgot_password">
                            <router-link :to = "{ name:'Signin' }" exact>Already a member?</router-link>
                        </div>
                    </div>
                </div>
            </div>            
        </div>
    </div>
</div>    
</template>

<script>
import Footer from '@/components/Footer.vue'
// import { store } from '../store/modules/user';
  export default {
    name: 'Register',
    components: {
    Footer,    
  },
    data () {
    return {
        alertUser: false,
        errinfo: '',
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
        formEvent: function PopAction() {
            var close = document.getElementsByClassName("closebtn");
            var i;

            for (i = 0; i < close.length; i++) {
                close[i].onclick = function(){
                    var div = this.parentElement;
                    div.style.opacity = "0";
                    setTimeout(function(){ div.style.display = "none"; }, 600);
                }
            }
            this.alertUser = false
        },
        register() { 
            if(this.valid()){
                this.$store.dispatch('userRegister', {
                firstname: this.firstname,
                lastname: this.lastname,
                email: this.email,
                password: this.password,
                student_type: 'individual'
                })
                // Replace '/' with the homepage
                .then(({ status }) => {
                    console.log('check your email')
                    console.log(status)
                    this.$router.push({ name: 'Signin' })
                })
                .catch(err => {
                    this.errinfo = 'Email is already registered'
                    console.log(err)
                    this.userExists = true
                    this.alertUser = true
                })
            }else{
                this.alertUser = true;
                this.password = '';
                this.confirm_password = '';
            }
        },
        valid(){
            if (this.password != this.confirm_password){
                this.errinfo = "passwords don't match";
                return false;
            } else if(this.password.length <= 10) {
                this.errinfo = "password is too weak";
                return false;
            } else {
                return true
            }
        }

      }
  }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300;400;500;700&display=swap');

.register{
    width: 100%;
    overflow: hidden;
}

.alert {
  padding: 20px;
  background-color: #f44336;
  color: white;
  text-align: center;
}

.alert-box{
    position: absolute;
    top: 0;
    left: 20%;
    margin: auto;
    width: 60%
}

.alert.success {background-color: #4CAF50;}
.alert.info {background-color: #2196F3;}

.closebtn {
  margin-left: 15px;
  color: white;
  font-weight: bold;
  float: right;
  font-size: 22px;
  line-height: 20px;
  cursor: pointer;
  transition: 0.3s;
}

.closebtn:hover {
  color: black;
}

.footer-container{
    z-index: 100;
}

.agree{
    margin-left: .5rem;
}

.image_thumb img{
    width: 50vw;
    height: 85vh;
    position: relative;
    z-index:-1;
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
