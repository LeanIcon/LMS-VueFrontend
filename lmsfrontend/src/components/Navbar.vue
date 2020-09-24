<template>
    <div class="navcontainer">                
                <!-- <div class="navbar-header"> -->
                    <!-- Logo -->
                    <div class="logo">
                        <img src="../assets/gh_01_ek2.png" alt="logo">
                    </div>
                   
                <!-- </div> -->

                
                    <div class="items topnav-right">
                        <a href="index.html">Home</a>
                        <a href="#">About</a>
                        <a href="#">Courses</a>
                        <a href="contact.html">Contact</a>
                        <a>Sign In</a>
                    </div>
                

    </div>
</template>
  
  <script>
    export default {
      name: 'Navbar',
    }
  </script>
  
  <style scoped>
      .items>a{
    color:rgb(15, 13, 13);
    list-style: none;
    width: 100%; 
    padding-left: 5rem;
    text-decoration:none;
    /* float: right; */
    padding-bottom: 3rem;
    text-align: right;
    
    }
  .nav{
      background: (#374050);
      color: rgb(71, 68, 68);
      place-content: right;
      text-align: right;
      width: 100vw;
      height: 15vh;
      position: absolute;

    
  }
  img{
    height: 6rem;
    size: 2px;
  }
  /* .topnav-right {
  float: right;
} */
.navcontainer>items{
  float:right;
}
.items > a{
  margin-top: 2.4rem;
}
    
  </style>
    