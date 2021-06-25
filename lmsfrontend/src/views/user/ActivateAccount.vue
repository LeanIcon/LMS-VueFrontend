<template>
  <div class="forgotpassword">
      <div class="page__container row">
        <a class="return_btn">&lt; Back</a>
      </div>
  </div>
</template>

<script>
import { getAPI } from '../../utils/axios-api'
    // @ is an alias to /src

export default {
  name: 'ActivateAccount',
  data(){
    return{
      password: ''
    }
  },
  components :{
    // Footer
  },
  methods:{
    async activateAccount() {
      await getAPI.post(`/accounts/activate/${this.$route.params.header}/${this.$route.params.token_id}/`)
          .then((res) => {
              const message = res.data.message
              if(message.includes('confirmed')){
                this.$notification.success("Your account has successfully been confirmed!", { infiniteTimer: false});
                this.$router.push('/signin')
              } else if(message.includes('invalid')) {
                this.$notification.success("Invalid activation link. Please check your email and try again", { infiniteTimer: false});
                this.$router.push('/register')
              }
          })
          .catch(({ err }) => {
            this.$notification.error("An error just occured please check and try again", { infiniteTimer: false});
            this.$router.push('/register')
              console.log(err);
          });
      },
  },
  mounted(){
    this.activateAccount()
    // alert(this.$route.query.token)
    if(this.$route.params.token_id == undefined){
      this.$router.push('/signin')
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

</style>