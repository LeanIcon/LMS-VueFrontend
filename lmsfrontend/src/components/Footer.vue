<template>
 <!-- <nav class="navbar navbar-light bg-light">
  <a class="navbar-brand">Navbar</a>
  <form class="form-inline">
    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"> 
  </form>
</nav>-->
    <!--head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title></title>
        <link rel="stylesheet" href="footer.css">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    </head>
    <body>
        <!-footer>
            <div class="footer_container">
            
                <div class="main_container row">    
                    <div class="footer-logo col-md-2">
                        <img src="../images/GH-01.png" alt="litt-logo">
                    </div>      
                        <div class="list_items col-md-10">
                            <ul class="row items">
                                <li class="col-md"><a href="">Contact LITT</a></li>
                                <li class="col-md">Privacy</li>
                                <li class="col-md">Terms Of Use </li>
                                <li class="col-md">Cookie Preferences</li>
                            </ul>
        
                        </div>
                
                </div>
            </div>        
        </footer> -->
        <div class="footer row">
            <div class="litt_logo col-4">
                <img src="../assets/gh_01_ek1.png" alt="footer logo">
            </div>
            <div class="footer-creds col-8">
                <a href="contactUs.html">Contact</a>
                <a href="Privacy.html">Privacy</a>
                <a href="tos.html">Terms of use</a>
                <a href="Accessibility.html">Accessibility</a>
                <a href="cookie.html">Cookie Prefrences</a>
            </div>
        </div>
    <!--/body-->
            
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
    html,body{
        margin: 0px;
        padding: 0px;
        height: 100vh;
        /* overflow: hidden; */
    }
    .footer-creds > a{
        color: rgb(255, 255, 255);
        list-style: none;
        width: 100%;
        padding-right: 50px;
        text-decoration:none;
        text-align: left;

    }

    .footer{
        background-color: rgba(195, 0, 12, 1);
        height: 5.5rem;
        bottom: 0px;
        position: absolute;
        width: 100vw;
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
