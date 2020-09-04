<template>
  <div class="forgotpassword">
    <router-link to="/forgotpassword"></router-link>
      <router-view/>
      <div class="forms-container">
        <div class="reset-home">
          <div class="title">
            <h1>Having troubles logging in?</h1>
          </div>
          <div class="additional-info">
            <p class="info">
              Enter your LMS id to reset your password
            </p>
            <div class="email-input">
              <form action="" method="post" class="form-element">
                <input type="email" name="accountemail" id="email" v-model="email" required placeholder="Email Address">
                <button type="submit" class="send-reset">
                  Send request
                </button>
              </form>
            </div>
          </div>          
        </div>
      </div>
  </div>    
</template>


<script>
export default {

}
</script>

<style scoped>
.forms-container{
  width: 100%;
  height: 100%;
  padding: auto 0;
}

.reset-home{
  width: 50vw;
  height: 50vh;
  margin: auto;
  margin-top: 12.5%;
}

.title{
  text-align: center;
  margin: 3rem 0 2rem 0;
}

.additional-info{
  display: grid;
  place-items: center;
}

.info{
  text-align: center;
}

.form-element{
  display: grid;
  place-items: center;
}

form > input {
  height: 2.3rem;
  width: 25rem;
  margin-bottom: 1rem;
}

.send-reset{
  margin: 0 auto;
  margin-top: 10px;
  width: 10rem;
  border-style: none;
  background-color: rgba(190,30,45,1);
  border-radius: 4px;
  height: 2.3rem;
  color: white;
}

</style>