<template>
  <div class="forgotpassword">
      <div class="page__container row">
        <a class="return_btn">&lt; Back</a>
        <div class="col-md-5 bg_img">
          <!-- <img src="@/assets/images/forgotpassbg.jpg" alt="" class="h-100"> -->
        </div>
        <div class="col-md-7 sec2">
          <div class="border_line"></div>
          <div class="display_content row mx-3">
            <div class="col-lg-4 col-md-12  user_info">
              <h1>Create new password</h1>
              <p>Your password must be different from previously used passwords.</p>
            </div>
            <div class="col-lg-8 col-md-12 info_section">
              <form action="" method="post" v-on:submit.prevent="changePassword">
                <input type="password" v-model="password" placeholder="New Password" class="mb-3">
                <input type="password" placeholder="Confirm Password" class="mb-3">
                <button class="btn" v-on:submit.prevent="changePassword">Send</button>
              </form>
            </div>
          </div>
        </div>
        <img src="@/assets/images/Vector 1.png" alt="" class="vector_img">
      </div>
  </div>
</template>
<script>
    // @ is an alias to /src

export default {
  name: 'Resetpassword',
  data(){
    return{
      password: ''
    }
  },
  components :{
    // Footer
  },
  methods:{
      changePassword() { 
        this.$store.dispatch('changePassword', {
          password: this.password,
          token: this.$route.query.token,
        })
        // Replace '/' with the homepage
        .then(() => {
          this.$router.push('/signin')
        })
        .catch(err => {
            this.errinfo = 'Invalid login credentials'
            console.log(err)
            alert('err')
        })
    },
  },
  mounted(){
    // alert(this.$route.query.token)
    if(this.$route.query.token == undefined){
      this.$router.push('/forgotpassword')
    }
  }
}
</script>
<style scoped>
.return_btn{
  position: absolute;
  top: 2rem;
  right: 2rem;
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