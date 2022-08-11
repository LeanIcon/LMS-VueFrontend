<template>
   <div class="forgotpassword">
      <div class="page__container row">
         <!-- <a class="return_btn" @click="goBack()"><i class="back--btn fa fa-arrow-left"></i> Back</a> -->
         <div class="col-md-5 bg_img">
            <!-- <img src="@/assets/images/forgotpassbg.jpg" alt="" class="h-100"> -->
         </div>
         <div class="col-md-7 sec2">
            <div class="border_line"></div>
            <div class="display_content row mx-3">
            <div class="col-lg-4 col-md-12 user_info">
              <img src="@/assets/gh_01.png" alt="sidebar-logo">
               <h1>Have an account?</h1>
               <p>Login to your dashboard.</p>
            </div>
            <div class="col-lg-7 col-md-12 info_section">
               <form action="" method="POST" v-on:submit.prevent="login">
                 <label for="Email">Email</label>
                  <input type="email" class="mb-3" placeholder="Enter your email address" v-model="email" required>
                    <label for="Password">Password</label>
                  <input type="password" class="mt-1" placeholder="Password" v-model="password" required>
                  <div class="row">
                     <div class="col-6">
                        <div class="rem-checkbox">
                           <input type="checkbox" class="my-3 checkbox">
                           <p class="info">Remember Me</p>
                        </div>
                     </div>
                     <div class="col-6">
                        <p class="mt-3 info"><router-link :to="{ name: 'Forgotpassword'}" tag="a" class="reset_link">Forgot password?</router-link></p>
                     </div>
                  </div>
                  <button class="btn btn-primary my-2" v-on:submit.prevent="login">Send</button>
                     <p class="mt-3">Already a member? <router-link :to="{ name: 'Register'}" tag="a" class="reset_link">Register</router-link></p>
               </form>
            </div>
            </div>
         </div>
      </div>
   </div>
</template>



<script>
export default {
   name: 'Forgotpassword',
   data () {
      return {
      email: '',
      password: '',
      token_requested: false,
      }
   },
   components :{
      // Footer
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
         .then(
            this.password = ''
         )
         .then(() => {
            this.$router.push({ name: 'Dashboard' })
         })
         .catch(err => {
            if(err == 401){
               this.$notification.error("Wrong Email/Password combination. Please check and try again", { infiniteTimer: false});
            } else if (err == 500){
               this.$notification.error("There is a problem from our side. Please try again later", { infiniteTimer: false});
            } else {
               this.$notification.error("Something went wrong. Please try again later", { infiniteTimer: false});
            }
            this.password = ''
         })
      },
   },
}
</script>



<style scoped>
.info{
   font-size: 14px;
}

.reset_link{
   cursor: pointer;
   color: blue;
   text-decoration: none;
}

.rem-checkbox{
   display: flex;
}

.rem-checkbox p{
   margin: auto .3rem;
}

.checkbox{
   width: 17px;
   height: 17px;
}

.return_btn{
   position: absolute;
   top: 2rem;
   right: 2rem;
   color: #030303;
   cursor: pointer;
   text-decoration: none;
}

.vector_img{
   width: 100vw;
   position: absolute;
   bottom: 10px;
}

input{
   border: none;
   background-color: #F2F2F2;
   border-radius: 5px;
   height: 3rem;
   padding: 1rem;
   width: 20rem;
}

.btn:hover{
   color: #fefefe;
}

input:focus, .btn:focus{
   outline: none;
   border: none;
   box-shadow: none;
}

button{
   height: 3rem;
   /* background-color:#494949; */
   /* color: #fefefe; */
   font-size: 1.2rem;
   font-weight: 500;
}

button:hover{
   background-color:#3b3b3b;
}

.border_line{
   width: 4rem;
   height: 100vh;
   position: absolute;
   background-color: rgb(255, 255, 255);
   top: 0px;
   left: -40px;
   border-radius: 30px 0 0 30px;
   border: 1rem solid rgb(255, 255, 255);
}

form{
   display: grid;
   /* height: 8rem; */
}

form, .user_info{
   margin: auto;
}
.info_section{
   display: flex;
   vertical-align: middle;
}


.page__container{
   height: 100%;
   width: 100%;
}

.bg_img{
   background: linear-gradient(to bottom, #ed2f527a, #ed2f527a),url('../../assets/images/forgotpassbg.jpg') no-repeat;
   background-size: cover;
   height: 100vh;
   background-position: center;
}

.display_content{
   height: 15rem;
   width: 100%;
   position: relative;
   top: 50%;
   -webkit-transform: translateY(-50%);
   -ms-transform: translateY(-50%);
   transform: translateY(-50%);
   margin: auto;
}

.user_info img{
  display: none;
}

@media screen and (max-width: 1024px) {
  .display_content{
      display: flex;
      flex-direction: row;
      margin: auto;
  }

  .info_section{
      width: 100%;
  }

  .user_info{
      text-align: center;
  }

  .return_btn{
      visibility: hidden;
  }
  .user_info h1{
      font-size: 33px;
      font-weight: 600;
  }
}

@media screen and (max-width: 754px) {
  .bg_img{
    display: none;
  }

  .sec2{
    margin: auto;
    height: 100vh;
  }

  .user_info h1{
    font-size: 27px;
    font-weight: 600;
  }

  input{
    width: 100%;
  }

  form{
    width: 80%;
    max-width: 312px;
  }

  .display_content{
  height: 100%;
  height: 70%;
  margin: auto;
  display: inherit;
  }

  .user_info img{
    display: inherit;
    height: 130px;
    text-align: center;
    margin: auto;
  }
}
@media screen and (max-width: 430px) {
 .info{
   font-size: 0.7rem;
}
.reset_link{
   font-size: 0.7rem;
}
}
</style>