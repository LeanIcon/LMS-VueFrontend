<template>
   <div class="forgotpassword">
     <div class="screen-blur"></div> 
      <div class="page__container row">
         <a class="return_btn" @click="goBack()"><i class="back--btn fa fa-arrow-left"></i> Back</a>
         <div class="col-md-5 bg_img">
            <!-- <img src="@/assets/images/forgotpassbg.jpg" alt="" class="h-100"> -->
         </div>
         <div class="col-md-7 layer2">
            <div class="border_line"></div>
            <div class="display_content row">
               <div class="col-lg-4 col-md-12 user_info">
              <img src="@/assets/gh_01.png" alt="sidebar-logo">
                  <h1>Join The Community</h1>
                  <p>Sign Up to upgrade your skills</p>
               </div>
               <div class="col-lg-8 col-md-12 info_section">
                  <form action="" method="POST" v-on:submit.prevent="register">
                     <input type="text" class="mt-3" placeholder="First Name" v-model="firstname" required>
                     <input type="text" class="mt-3" placeholder="Last Name" v-model="lastname" required>
                     <input type="email" class="mt-3" placeholder="Enter your email address" v-model="email" required>
                     <input type="password" class="mt-3" placeholder="Password" v-model="password" required>
                     <input type="password" class="mt-3" placeholder="Confirm Password" v-model="confirm_password" required>
                     <div class="rem-checkbox">
                        <input type="checkbox" class="my-3 checkbox">
                        <p>Remember Me</p>
                     </div>
                     <button class="btn" v-on:submit.prevent="register">Register</button>
                     <p class="mt-3">Already registered? <router-link :to="{ name: 'Signin'}" tag="a" class="reset_link">Login</router-link></p>
                  </form>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
   export default {
      name: 'Register',
      data () {
      return {
         alertUser: false,
         errinfo: '',
         firstname: '',
         lastname: '',
         email: '',
         password: '',
         confirm_password: '',
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

         clearform(){
            this.password = ''
            this.confirm_password = ''
         },

         register() { 
               if(this.valid()){
                  this.$store.dispatch('userRegister', {
                  firstname: this.firstname,
                  lastname: this.lastname,
                  email: this.email,
                  password: this.password,
                  student_type: 'individual'
                  }).then(
                     this.clearform()
                  )
                  // Replace '/' with the homepage
                  .then(res => {
                     if(res){
                        this.$notification.success("Your have been successfully registered, Check your email and activate your account", { infiniteTimer: false });
                        this.$router.push({ name: 'Signin' })
                     }
                  })
                  .catch(err => {
                     if(err == 400){
                        this.$notification.error("Email has already been registered please check and try again", { infiniteTimer: false});
                     } else if (err == 500){
                        this.$notification.error("There is a problem from our side. Please try again later", { infiniteTimer: false});
                     } else if (err == 403){
                        this.$notification.error("There is a problem from our side. Please try again later", { infiniteTimer: false});
                     } else {
                        console.log(err)
                        this.$notification.error("Something went wrong. Please try again later", { infiniteTimer: false});
                     }
                  })
               }else{
                  this.password = '';
                  this.confirm_password = '';
               }
         },
         valid(){
            if (this.password != this.confirm_password){
               this.$notification.error("Passwords do not match. Please check and try again", { infiniteTimer: false});
               return false  
               } else if(this.password.length <= 8) {
               this.$notification.error("Passwords is too weak", { infiniteTimer: false});
               return false  
               } else {
                  return true
               }
            }
         },
   }
</script>



<style scoped>
.rem-checkbox{
   display: flex;
}

.rem-checkbox p{
   margin: auto 1rem;
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
   background-color:#494949;
   color: #fefefe;
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
   background: linear-gradient(to bottom, #ed2f527a, #ed2f527a),url('../../assets/images/userdisplay.png') no-repeat;
   background-size: cover;
   height: 100vh;
   background-position: center;
}

.display_content{
   /* height: 15rem; */
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

input:checked{
   background-color:red !important;
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
   margin: auto;
   display: inherit;
   width: 100vw;
   }

   .user_info img{
      display: inherit;
      height: 130px;
      text-align: center;
      margin: auto;
   }
}

</style>