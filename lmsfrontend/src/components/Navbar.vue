<template>
    <div class="navcontainer" row> 

      <div class="row">               
                <!-- <div class="navbar-header"> -->
                   <!-- Logo -->
                    <div class="logo" col-sm>
                        <img src="../assets/gh_01_ek2.png" alt="logo">

                    </div>
                     
                     <div class="items topnav-center" col-sm>
                       
                        <a href="index.html">HOME</a>
                        <a href="#">ABOUT</a>
                        <a href="#">COURSES</a>
                        <a href="contact.html">CONTACT</a>
                        <a href="#">SIGN IN</a>
                    </div>
      </div>             
                <!-- </div> -->

                
                    

    </div>
</template>
  
  <script>
    export default {
      name: 'Navbar',
    }
  </script>
  
  <style scoped>
      .items>a{
    color:rgb(238, 225, 225);
    list-style: none;
    width: 100%; 
    padding-left: 3rem;
    text-decoration:none;
    margin-left: 1.5rem;
    /* float: right; */
    padding-bottom: 4rem;
    text-align: center;
    padding-top: 5rem;
    font-weight: bold;
    justify-content: center;
    /* display: inline-block; */
    
    }
    .items>a:hover{
      text-decoration: underline;
      /* text-decoration-line: red; */
      text-decoration-color:red;
    }
  .nav{
      background: (#374050);
      color: rgb(71, 68, 68);
      place-content: right;
      text-align: right;
      width: 100vw;
      height: 10vh;
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
.items{
  margin-top: 2.4rem;
  margin-left: 23rem;
}
.row{
  height: 5rem;
  text-align: center;
  justify-content: center;
  
}
.row>a{
   display: inline-block;
   text-align: center;

}
.nav{
  justify-content: center;
}
.topnav-center>a{
  padding-left: 2rem;
}
    
  </style>
    