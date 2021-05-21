<template>
    <div class="footer row px-5 pt-5">
        <div class="col-md-5 col-sm-12 cred-note">
            <h5 class="footer-title">ABOUT US</h5>
            <div class="footer-info">
                <p class="info-data">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem illum praesentium voluptatibus sit eius rem optio repudiandae quos, ea nam asperiores fuga tenetur vero deleniti voluptatem ab voluptates est cum?
                </p>
                <div class="end-logo"><img src="" alt=""></div>
            </div>
        </div>
        <div class="col-md-2 col-sm-6 cred-note">
            <h5 class="footer-title">QUICK LINKS</h5>
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
        <div class="col-md-2 col-sm-6 cred-note">
            <h5 class="footer-title">SUPPORT</h5>
            <div class="footer-info">
                <ul class="footer-links">
                    <li>Tech Support</li>
                    <li>Documentation</li>
                    <li>F.A.Q</li>
                </ul>
            </div>
        </div>
        <div class="col-md-3 col-sm-12 cred-note">
            <h5 class="footer-title">FOLLOW US</h5>
            <div class="footer-info">
            </div>
        </div>

        <div class="inline pt-2">
            <a href="#">Privacy Policy</a> | <a href="#">Terms & Conditions</a> | <a href="#">Cookies</a> 
            <div class="end-sec"><p>&#169; Lean Icon Technology. All rights reserved</p></div>
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
.footer-title{
    font-weight: 600;
}
.footer{
  background: #3D3D3D;
  height: 30%;
  color: #fff;
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
    color: white;
    text-decoration: none;
    font-weight: 100;
}

.end-sec{
    color: rgba(255, 255, 255, 0.548);
}
</style>
