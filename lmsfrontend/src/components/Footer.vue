<template>
  <div class="footer row">
         <div class="litt_logo col-4">
                      <img src="../assets/gh_01_ek2.png" alt="">
         </div>
           <div class="footer-creds col-8">
                 <a href="contactUs.html">Contact</a>
                 <a href="Privacy.html">Privacy</a>
                 <a href="tos.html">Terms of use</a>
                 <a href="Accessibility.html">Accessibility</a>
                 <a href="cookie.html">Cookie Prefrences</a>
          </div>
   </div>            
</template>

<script>
    export default {
    name: 'Footer',
    /**props: {
        msg: String
    }**/
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer{
  background: rgba(190,30,45,255);
  height: 15vh;
  color: #fff;
  place-content: center;
  text-align: center;
  position: absolute;
  bottom: 0;
  width: 100vw;
}
    /* html,body{
        margin: 0px;
        padding: 0px;
        height: 100vh;
        /* overflow: hidden; 
    } */
.footer-creds > a{
    color: rgb(255, 255, 255);
    list-style: none;
    width: 100%;
    padding-right: 50px;
    text-decoration:none;
    text-align: left;

}

.footer-creds{
    margin-top: 2.4rem;
}

img{
    height: 6rem;
}

.footer-creds > a:hover{
    text-decoration:none;
    color: #fff;
}

</style>
