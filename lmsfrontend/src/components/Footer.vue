<template>
    <div class="footer row px-5 pt-5">
        <div class="col-md-5 col-sm-12 cred-note">
            <img src="@/assets/images/logo.png" class="mb-4 nav-logo" alt="">
            <h5 class="footer-title">About Us</h5>
            <div class="footer-info">
                <p class="info-data">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem illum praesentium voluptatibus sit eius rem optio repudiandae quos, ea nam asperiores fuga tenetur vero deleniti voluptatem ab voluptates est cum?
                </p>
                <div class="end-logo"><img src="" alt=""></div>
            </div>
        </div>
        <div class="col-md-3 col-sm-6 cred-note">
            <h5 class="footer-title">Quick Links</h5>
            <div class="footer-info">
                <ul class="footer-links">
                    <li>My Account</li>
                    <li>Cart</li>
                    <li>Courses</li>
                    <li>Register</li>
                    <li>Contact Us</li>
                </ul>
            </div>
        </div>
        <div class="col-md-3 col-sm-6 cred-note">
            <h5 class="footer-title">Support</h5>
            <div class="footer-info">
                <ul class="footer-links">
                    <li>Tech Support</li>
                    <li>Documentation</li>
                    <li>F.A.Q</li>
                </ul>
            </div>
        </div>
        <div class="separator"></div>
        <div class="inline pt-2 row w-100">
            <div class="col-4">
                <div class="end-sec"><p>&#169; Lean Icon Technology. All rights reserved</p></div>
            </div>
            <div class="col-4">
                <a href="#">Privacy Policy</a> | <a href="#">Terms & Conditions</a> | <a href="#">Cookies</a> 
            </div>
            <div class="col-4">
                <!-- test -->
            </div>
        </div>

    </div>
</template>

<script>
    export default {
    name: 'Footer',
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.separator{
    height: 1px;
    width: 90%;
    background-color: rgba(0, 0, 0, 0.3);
}

.footer-title{
    font-weight: 600;
    font-size: 20px;
}

.footer{
  background: #c4c4c4;
  height: 30%;
  color: rgb(37, 37, 37);
  place-content: center;
  text-align: center;
  position: relative;
  margin: auto;
  /* width: 90vw !important; */
}

.footer-links{
    list-style: none;
    text-align: left;
    padding: 0;
}

.cred-note{
    text-align: left;
}

p, li{
    font-weight: 100;
}

.inline a{
    color: rgb(37, 37, 37);
    text-decoration: none;
    font-weight: 100;
}

.end-sec{
    color: rgb(37, 37, 37);
}
</style>
