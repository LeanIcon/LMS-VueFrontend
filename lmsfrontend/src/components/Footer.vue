<template>
 <!-- <nav class="navbar navbar-light bg-light">
  <a class="navbar-brand">Navbar</a>
  <form class="form-inline">
    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"> 
  </form>
</nav>-->
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
  name: 'footer row',
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
}</style>
