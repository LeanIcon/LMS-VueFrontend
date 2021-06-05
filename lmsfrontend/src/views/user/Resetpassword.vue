<template>
  <div class="forgotpassword">
      <div class="page__container row">
        <a class="return_btn">&lt; Back</a>
        <div class="col-md-5 bg_img">
          <!-- <img src="@/assets/images/forgotpassbg.jpg" alt="" class="h-100"> -->
        </div>
        <div class="col-md-7">
          <div class="border_line"></div>
          <div class="display_content row mx-3">
            <div class="col-md-6 user_info">
              <h1>Create new password</h1>
              <p>Your password must be different from previously used passwords.</p>
            </div>
            <div class="col-md-6 info_section">
              <form action="" method="post">
                <input type="password" placeholder="New Password" class="mb-3">
                <input type="password" placeholder="Confirm Password" class="mb-3">
                <button class="btn">Send</button>
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
  components :{
    // Footer
  },
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
  background-color:#E01010;
  color: #fefefe;
  font-size: 1.2rem;
  font-weight: 500;
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

</style>