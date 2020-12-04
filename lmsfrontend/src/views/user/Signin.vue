<template>
    <body>
        <div class="main">
            <router-link to="/signin"></router-link>
            <router-view/>

            <div class='form-container'>
            <form class="registration-form" id="registration-form signup-form" v-on:submit.prevent="login"  method="POST">
                <h2>Sign In to LiTT LMS</h2>
                <div class="form-group-1">
                    <input type="email" name="email" id="email" placeholder="Email" class="input-container" v-model="email" required />
                    <input type="password" name="password" id="password" placeholder="Password" class="input-container" v-model="password" required />
                </div>
                <div class="form-check">
                    <input type="checkbox" name="agree-term" id="agree-term" class="agree-term" />
                    <label for="agree-term" class="label-agree-term"><span><span></span></span>I agree to the  <a href="#" class="term-service">Terms and Conditions</a></label>
                </div>
                <div class="form-submit" v-on:submit.prevent="login" >
                    <input type="submit" name="submit" id="submit" v-on:submit.prevent="login" class="submit" value="Sign In"/>
                </div>
            </form>
        </div>           
        </div>           
    </body>
</template>

<script>
  export default {
    name: 'login',
    data () {
      return {
        alertUser: false,
        errinfo: '',
        email: '',
        password: '',
        incorrectAuth: false,
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

        login () { 
            this.$store.dispatch('userLogin', {
            email: this.email,
            password: this.password
            })
            // Replace '/' with the homepage
            .then(() => {
            this.$router.push({ name: 'Dashboard' })
            })
            .catch(err => {
                this.errinfo = 'Invalid login credentials'
                console.log(err)
                this.userExists = true
                this.alertUser = true
                this.incorrectAuth = true
                this.email = ''
                this.password = ''
            })
        },
    },
    // computed : {
    //     getUserInfo() {
    //         return this.$store.getters['getUser']
    //     },
    //     getUserInfoToken() {
    //         return this.$store.getters['getToken']
    //     }
    // }
  }
</script>

<style scoped>
/* @extend display-flex; */
display-flex {
  display: flex;
  display: -webkit-flex; }

/* @extend list-type-ulli; */
list-type-ulli, ul {
  list-style-type: none;
  margin: 0;
  padding: 0; }

/* roboto-slab-300 - latin */
@font-face {
  font-family: 'Roboto Slab';
  font-style: normal;
  font-weight: 300;
  src: url("../../assets/fonts/roboto-slab/roboto-slab-v7-latin-300.eot");
  /* IE9 Compat Modes */
  src: local("Roboto Slab Light"), local("RobotoSlab-Light"), url("../../assets/fonts/roboto-slab/roboto-slab-v7-latin-300.eot?#iefix") format("embedded-opentype"), url("../../assets/fonts/roboto-slab/roboto-slab-v7-latin-300.woff2") format("woff2"), url("../../assets/fonts/roboto-slab/roboto-slab-v7-latin-300.woff") format("woff"), url("../../assets/fonts/roboto-slab/roboto-slab-v7-latin-300.ttf") format("truetype"), url("../../assets/fonts/roboto-slab/roboto-slab-v7-latin-300.svg#RobotoSlab") format("svg");
  /* Legacy iOS */ }
/* roboto-slab-regular - latin */
@font-face {
  font-family: 'Roboto Slab';
  font-style: normal;
  font-weight: 400;
  src: url("../../assets/fonts/roboto-slab/roboto-slab-v7-latin-regular.eot");
  /* IE9 Compat Modes */
  src: local("Roboto Slab Regular"), local("RobotoSlab-Regular"), url("../../assets/fonts/roboto-slab/roboto-slab-v7-latin-regular.eot?#iefix") format("embedded-opentype"), url("../../assets/fonts/roboto-slab/roboto-slab-v7-latin-regular.woff2") format("woff2"), url("../../assets/fonts/roboto-slab/roboto-slab-v7-latin-regular.woff") format("woff"), url("../../assets/fonts/roboto-slab/roboto-slab-v7-latin-regular.ttf") format("truetype"), url("../../assets/fonts/roboto-slab/roboto-slab-v7-latin-regular.svg#RobotoSlab") format("svg");
  /* Legacy iOS */ }
/* roboto-slab-700 - latin */
@font-face {
  font-family: 'Roboto Slab';
  font-style: normal;
  font-weight: 700;
  src: url("../../assets/fonts/roboto-slab/roboto-slab-v7-latin-700.eot");
  /* IE9 Compat Modes */
  src: local("Roboto Slab Bold"), local("RobotoSlab-Bold"), url("../../assets/fonts/roboto-slab/roboto-slab-v7-latin-700.eot?#iefix") format("embedded-opentype"), url("../../assets/fonts/roboto-slab/roboto-slab-v7-latin-700.woff2") format("woff2"), url("../../assets/fonts/roboto-slab/roboto-slab-v7-latin-700.woff") format("woff"), url("../../assets/fonts/roboto-slab/roboto-slab-v7-latin-700.ttf") format("truetype"), url("../../assets/fonts/roboto-slab/roboto-slab-v7-latin-700.svg#RobotoSlab") format("svg");
  /* Legacy iOS */ }
a:focus, a:active {
  text-decoration: none;
  outline: none;
  transition: all 300ms ease 0s;
  -moz-transition: all 300ms ease 0s;
  -webkit-transition: all 300ms ease 0s;
  -o-transition: all 300ms ease 0s;
  -ms-transition: all 300ms ease 0s; }

input, select, textarea {
  outline: none;
  appearance: unset !important;
  -moz-appearance: unset !important;
  -webkit-appearance: unset !important;
  -o-appearance: unset !important;
  -ms-appearance: unset !important; }

input::-webkit-outer-spin-button, input::-webkit-inner-spin-button {
  appearance: none !important;
  -moz-appearance: none !important;
  -webkit-appearance: none !important;
  -o-appearance: none !important;
  -ms-appearance: none !important;
  margin: 0; }

input:focus, select:focus, textarea:focus {
  outline: none;
  box-shadow: none !important;
  -moz-box-shadow: none !important;
  -webkit-box-shadow: none !important;
  -o-box-shadow: none !important;
  -ms-box-shadow: none !important; }

input[type=checkbox] {
  appearance: checkbox !important;
  -moz-appearance: checkbox !important;
  -webkit-appearance: checkbox !important;
  -o-appearance: checkbox !important;
  -ms-appearance: checkbox !important; }

input[type=radio] {
  appearance: radio !important;
  -moz-appearance: radio !important;
  -webkit-appearance: radio !important;
  -o-appearance: radio !important;
  -ms-appearance: radio !important; }

img {
  max-width: 100%;
  height: auto; }

figure {
  margin: 0; }

p {
  margin-bottom: 0px; }

input:-webkit-autofill {
  box-shadow: 0 0 0 30px white inset;
  -moz-box-shadow: 0 0 0 30px white inset;
  -webkit-box-shadow: 0 0 0 30px white inset;
  -o-box-shadow: 0 0 0 30px white inset;
  -ms-box-shadow: 0 0 0 30px white inset; }

h2 {
  line-height: 1.8;
  margin: 0;
  padding: 0;
  font-weight: bold;
  color: #222;
  font-family: 'Roboto Slab';
  font-size: 20px;
  margin-bottom: 30px;
  text-transform: uppercase; }

h3 {
  font-weight: bold;
  color: #222;
  font-size: 15px;
  margin: 0px;
  margin-bottom: 35px; }

.clear {
  clear: both; }

body {
  font-size: 13px;
  line-height: 1.8;
  color: #fff;
  background-image: url("../../assets/auth-bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  -moz-background-size: cover;
  -webkit-background-size: cover;
  -o-background-size: cover;
  -ms-background-size: cover;
  background-position: center center;
  font-weight: 400;
  font-family: 'Roboto Slab';
  margin: 0px; 
  background-attachment: fixed;
  /* overflow: hidden; */
}

.main {
  /* padding: 60px 0; */
  position: relative; 
  height: 100vh;
}

.form-container {
  width: 586px;
  background: rgba(255, 255, 255, 0.95);
  /* margin-left: 165px; */
  border-radius: 0px;
  -moz-border-radius: 0px;
  -webkit-border-radius: 0px;
  -o-border-radius: 0px;
  -ms-border-radius: 0px; 
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.registration-form {
  padding: 100px 60px 70px 60px;
  width: 80%;
}

input, select {
  width: 100%;
  display: block;
  border: none;
  border-bottom: 3px solid #ebebeb;
  padding: 5px 0;
  color: #222;
  margin-bottom: 31px;
  font-family: 'Roboto Slab'; 
  background-color: rgba(255, 255, 255, 0);
}

  input:focus, select:focus {
    color: #222;
    border-bottom: 2px solid rgba(190,30,45,255); }

input[type=checkbox]:not(old) {
  width: 2em;
  margin: 0;
  padding: 0;
  font-size: 1em;
  display: none; }

input[type=checkbox]:not(old) + label {
  display: inline-block;
  margin-top: 7px;
  margin-bottom: 25px; }

input[type=checkbox]:not(old) + label > span {
  display: inline-block;
  width: 13px;
  height: 13px;
  margin-right: 15px;
  margin-bottom: 3px;
  border: 1px solid #ebebeb;
  background: white;
  background-image: -moz-linear-gradient(white, white);
  background-image: -ms-linear-gradient(white, white);
  background-image: -o-linear-gradient(white, white);
  background-image: -webkit-linear-gradient(white, white);
  background-image: linear-gradient(white, white);
  vertical-align: bottom; }

input[type=checkbox]:not(old):checked + label > span {
  background-image: -moz-linear-gradient(white, white);
  background-image: -ms-linear-gradient(white, white);
  background-image: -o-linear-gradient(white, white);
  background-image: -webkit-linear-gradient(white, white);
  background-image: linear-gradient(white, white); }

input[type=checkbox]:not(old):checked + label > span:before {
  content: '\f26b';
  display: block;
  color: #222;
  font-size: 11px;
  line-height: 1.2;
  text-align: center;
  font-family: 'Material-Design-Iconic-Font';
  font-weight: bold; }

.label-agree-term {
  color: #999; }

.term-service {
  color: #222; }

.submit {
  width: auto;
  background: rgba(190,30,45);
  color: #fff;
  padding: 16px 17px;
  font-size: 13px;
  border: none;
  border-radius: 5px;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  -o-border-radius: 5px;
  -ms-border-radius: 5px;
  cursor: pointer;
  /* box-shadow: 0px 1px 5px 0px rgba(190,30,45, 0.7);
  -moz-box-shadow: 0px 1px 5px 0px rgba(190,30,45, 0.7);
  -webkit-box-shadow: 0px 5px 15px 0px rgba(190,30,45, 0.7);
  -o-box-shadow: 0px 1px 5px 0px rgba(190,30,45, 0.7);
  -ms-box-shadow: 0px 1px 5px 0px rgba(190,30,45, 0.7);  */
}
  .submit:hover {
    background: rgb(173, 26, 41); }

ul {
  background: 0 0;
  z-index: 9; }

ul li {
  padding: 3px 0px;
  z-index: 2;
  color: #999; }
  ul li:last-child {
    border-bottom: 1px solid #ebebeb; }

ul li:not(.init) {
  display: none;
  background: #fff;
  color: #222;
  padding: 5px 10px;
  border-left: 1px solid #ebebeb;
  border-right: 1px solid #ebebeb;
  border-top: 1px solid #ebebeb; }

ul li:not(.init):hover, ul li.selected:not(.init) {
  background: #4966b1;
  color: #fff; }

li.init {
  cursor: pointer;
  position: relative;
  border-bottom: 2px solid #ebebeb; }
  li.init:after {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    font-size: 20px;
    color: #999;
    font-family: 'Material-Design-Iconic-Font';
    content: '\f2f9'; }

#confirm_type {
  margin-bottom: 30px; }

.form-group-2 {
  margin-top: 15px;
  margin-bottom: 30px; }

.form-check {
  margin-bottom: 20px; }

.select-list {
  position: relative;
  display: inline-block;
  width: 100%;
  margin-bottom: 55px; }

.list-item {
  position: absolute;
  width: 100%; }

#confirm_type {
  z-index: 99; }

#hour_appointment {
  z-index: 9; }

@media screen and (max-width: 1024px) {
  .form-container {
    margin: 0 auto; } }
@media screen and (max-width: 768px) {
  .form-container {
    width: calc( 100% - 30px);
    max-width: 100%; } }

/*# sourceMappingURL=style.css.map */

</style>