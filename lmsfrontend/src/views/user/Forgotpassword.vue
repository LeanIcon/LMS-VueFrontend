<template>
  <div class="forgotpassword">
      <div class="page__container row">
        <a class="return_btn" @click="goBack()"><i class="back--btn fa fa-arrow-left"></i> Back</a>
        <div class="col-md-5 bg_img">
          <!-- <img src="@/assets/images/forgotpassbg.jpg" alt="" class="h-100"> -->
        </div>
        <div v-if="!token_requested" class="col-md-7 sec2">
          <div class="border_line"></div>
          <div class="display_content row mx-3">
            <div class="col-lg-4 col-md-12 user_info">
              <h1>Forgot your password?</h1>
              <p>Enter the email associated with your account and we’ll send an with instructions to reset your password</p>
            </div>
            <div class="col-lg-8 col-md-12 info_section">
              <form action="" method="POST" v-on:submit.prevent="resetPass">
                <input type="email" placeholder="Enter your email address" v-model="email" required>
                <button class="btn" v-on:submit.prevent="resetPass">
                  <!-- <span class="spinner-grow float-left spinner-grow-sm" role="status" aria-hidden="true"></span> -->
                    <!-- <span class="sr-only">Loading...</span> -->
                    Send
              </button>
              </form>
            </div>
          </div>
        </div>
        <div v-if="token_requested" class="col-md-7">
          <div class="border_line"></div>
          <div class="display_content" style="text-align: center;">
            <h1>Check your email</h1>
            <p>We have sent a password recovery instrcution to your email</p>
            <p class="mt-5">Did not receive the mail? Check your spam filter, <br>or <a  @click="this.token_requested = false" style="color: #E01010;" href="">try another email address</a>
            </p>
          </div>
        </div>
        <img src="@/assets/images/Vector 1.png" alt="" class="vector_img">
      </div>
  </div>
</template>



<script>
export default {
  name: 'Forgotpassword',
  data () {
    return {
      email: '',
      token_requested: false,
    }
  },
  components :{
    // Footer
  },
  methods: {
    goBack(){
      this.$router.go(-1)
    },
    resetPass() { 
        this.$store.dispatch('resetPassword', {
          email: this.email,
        })
        // Replace '/' with the homepage
        .then(() => {
          this.token_requested = true
        })
        .catch(err => {
          if(err == 400){
            this.$notification.error("Something went wrong. Please check your email and try again", { infiniteTimer: false});
          } else if (err == 500){
            this.$notification.error("There is a problem from our side. Please try again later", { infiniteTimer: false});
          } else {
            this.$notification.error("Something went wrong. Please try again later", { infiniteTimer: false});
          }
          this.email = ''
        })
    },
  }
}
</script>



<style scoped>
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
  padding: 1rem;;
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
  height: 8rem;
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
      width: 70%;
  }

  .display_content{
      height: 100%;
      place-content: center;
  }
}


</style>