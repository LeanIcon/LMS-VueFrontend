<template>
  <footer id="footer" class="page-footer">
    <div class="foot">
      <div class="logo-container">
        <router-link :to="{ name: 'Home' }" class="brand-logo img-responsive">
          <img class="logo" src="./../assets/images/littlogo.png.png" alt="" />
        </router-link>
      </div>

      <div class="content-container">
        <div class="description-container">
          <div class="description">
            <p>
              We develop and implement imaginative solutions to help businesses
              increase brand.
            </p>

            <div class="icons icons-1">
              <a
                href="https://www.linkedin.com/company/korsgill-consulting-ltd/"
                ><i class="mdi mdi-linkedin" aria-hidden="true"></i
              ></a>
              <a href="https://www.instagram.com/litt.africa/"
                ><i class="mdi mdi-instagram" aria-hidden="true"></i
              ></a>
              <a href="https://www.youtube.com/channel/UCLBkRIquDbz3_Y2wVDE7Z_A"
                ><i class="mdi mdi-youtube" aria-hidden="true"></i
              ></a>
              <a href="https://www.facebook.com/litt.co.uk/"
                ><i class="mdi mdi-facebook" aria-hidden="true"></i
              ></a>
              <a href="https://twitter.com/litt_uk"
                ><i class="mdi mdi-twitter" aria-hidden="true"></i
              ></a>
            </div>
          </div>

          <div class="subscribe">
            <h3>Subscribe</h3>

            <p>Select topics and stay current with our latest insights</p>
            <form action="POST" v-on:submit.prevent="newsletterRegistration">
              <div class="input">
                <input
                  class="input-field"
                  type="email"
                  name="subscribe"
                  id="sub"
                  placeholder="Enter your email here"
                  v-model="email"
                />
                <button class="btn _button">Sign Up Free</button>
              </div>
            </form>
          </div>
        </div>

        <!-- <div class="contact-details"> -->
        <div class="contact">
          <h3>Ghana Office</h3>

          <ul>
            <li>Email: info@leanicontechnology.com</li>
            <li>Call: 0576290000</li>
            <li>Office Location: Vision House,</li>
            <li>2nd floor, Block E117/17</li>
            <li>Abavana Rd, Kotobabi</li>
          </ul>
        </div>

        <div class="contact">
          <h3>UK Office</h3>

          <ul>
            <li>Email: info@leanicontechnology.co.uk</li>
            <li>Call: 03303110677</li>
            <!-- <li>Office Location: 4th Floor,</li>
              <li>Victoria Rd,</li> -->
            <li>Chelmsford UK</li>
          </ul>
        </div>
        <!-- </div> -->

        <div class="links">
          <div class="links-1">
            <ul>
              <li><router-link :to="{ name: '' }">Industries</router-link></li>
              <li><router-link :to="{ name: '' }">Insights</router-link></li>
              <li><router-link :to="{ name: '' }">Litt Blog</router-link></li>
              <li><router-link :to="{ name: '' }">Vacancies</router-link></li>
            </ul>

            <ul>
              <li>
                <router-link :to="{ name: 'CourseCatalog' }"
                  >Trainings</router-link
                >
              </li>
              <li>
                <router-link :to="{ name: 'Consulting' }"
                  >Consulting</router-link
                >
              </li>
              <li>
                <router-link :to="{ name: 'About' }">About Us</router-link>
              </li>
              <li><router-link :to="{ name: 'FAQ' }"> FAQ</router-link></li>
            </ul>
          </div>
        </div>
      </div>

      <div class="icon-and-links margin top-40">
        <div class="icons icons-2">
          <a href="https://www.linkedin.com/company/korsgill-consulting-ltd/">
            <img class="responsive-img ss-icon" src="" alt="" />
            <!-- <i class="mdi mdi-linkedin" aria-hidden="true"></i> -->
          </a>
          <a href="https://www.youtube.com/channel/UCLBkRIquDbz3_Y2wVDE7Z_A">
            <img class="responsive-img ss-icon" src="" alt="" />
            <!-- <i class="mdi mdi-youtube" aria-hidden="true"></i> -->
          </a>
          <a href="https://www.facebook.com/litt.co.uk/">
            <img class="responsive-img ss-icon" src="" alt="" />
            <!-- <i class="mdi mdi-facebook" aria-hidden="true"></i> -->
          </a>
          <a href="https://twitter.com/litt_uk">
            <img class="responsive-img ss-icon" src="" alt="" />
            <!-- <i class="mdi mdi-twitter" aria-hidden="true"></i> -->
          </a>
          <a href="https://www.instagram.com/litt.africa/">
            <!-- <i class="mdi mdi-instagram" aria-hidden="true"></i> -->
            <img class="responsive-img ss-icon" src="" alt="" />
          </a>
        </div>

        <div class="links">
          <p class="text-white foot-text">
            <span
              ><router-link :to="{ name: 'ContactUs' }"
                >Contact Us</router-link
              ></span
            >
            <span
              ><router-link :to="{ name: 'Privacy' }"
                >Privacy Policy</router-link
              ></span
            >
          </p>
        </div>
      </div>

      <div class="copyright">
        <p>&copy; 2019-2021 leanicontechnology</p>
      </div>
    </div>
  </footer>
</template>

<script>
// import { getAPI } from "@/utils/api/axios";

export default {
  name: "Footer",
  data() {
    return {
      email: "",
    };
  },
}
//   methods: {
    // newsletterRegistration(e) {
    //   e.preventDefault();
    //   let req_data = this.email;
    //   this.email = "";
    //   getAPI
    //     .post("api/v1/contact/newsletter/", {
    //       email: req_data,
    //     })
    //     .then((res) => {
    //       this.email = "";
    //       console.log(res);
    //     });
    //   .catch(err => {
    //     alert("There has been an error" + err);
    //   })
    // },
    
  </script>
  
  <style scoped>
#footer,
.page-footer {
  background: #472e28 !important;
}

* {
  padding: 0%;
  margin: 0;
  box-sizing: border-box;
  text-align: left;
}

.foot-text {
  color: #ffffff !important;
  font-weight: 400;
}
.foot {
  padding: 3% 0% !important;
  margin: auto;
}

.logo-container {
  text-align: left;
}

.logo {
  max-width: 150px;
  height: auto;
}

input#sub {
  width: 100%;
  border-radius: 10px 0 0 10px;
  margin: 8px 0;
  background: white;
  width: 60%;
  border-bottom: none;
  padding: 10px;
  box-sizing: border-box;
  margin: 0;
  font-size: 12px;
  height: 45px;
  margin-top: 20px;
}
.input button {
  width: 40%;
  display: inline-block;
  text-align: center;
  border-radius: 0 10px 10px 0 !important;
  color: white;
  font-weight: 600;
  font-size: 12px;
  height: 45px;
}

.content-container {
  display: flex;
  justify-content: space-between;
}

.content-container > div {
  max-width: 350px;
  padding: 10px;
}

.icons-1 {
  display: none !important;
}

.icon-and-links {
  display: flex;
  justify-content: space-between;
}

h3 {
  font-size: 20px;
  font-weight: 700;
}
.subscribe h3 {
  color: #ffffff;
  margin: 8px 0;
}

div.description {
  margin-bottom: 26px;
  color: #ffffff;
}

.mdi {
  margin: 5px;
  font-size: 30px;
  transition: 0.1s;
}

.contact h3 {
  margin-bottom: 16px;
}

.contact li {
  line-height: 28px;
}

.links-1 {
  display: flex;
  margin-bottom: 50px;
}

.links-1 a {
  color: #ffffff;
}

.links {
  line-height: 35px;
}

.icon-and-links .links a {
  color: rgb(255, 255, 255);
}

.links-1 ul:first-child {
  margin-right: 40px;
}

.links p > span:not(:last-child) {
  margin-right: 20px;
}
.icons {
  display: flex;
}
.ss-icon {
  width: 30%;
  height: auto;
}

.copyright p {
  text-align: center;
  font-size: 12px;
  color: #ffffff;
  padding-bottom: 2%;
}

.icon-and-links .links a:hover,
.links-1 a:hover {
  color: #8b000f;
}

@media screen and (min-width: 1200px) {
  .foot {
    width: 90%;
    padding: 0;
  }
}

@media screen and (min-width: 1024px) and (max-width: 1200px) {
  .foot {
    width: 100%;
    padding: 20px;
  }
}
@media screen and (max-width: 1024px) and (min-width: 769px) {
  .foot {
    padding: 20px;
  }
  .content-container {
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .content-container > div:first-child {
    max-width: 100%;
  }

  .description-container {
    display: flex;
    justify-content: space-between;
  }

  .description-container > div {
    width: 49%;
  }

  .subscribe h3 {
    margin-top: 0;
  }

  .icons-2 {
    display: none;
  }

  .icons-1 {
    display: block;
  }

  .icon-and-links {
    justify-content: center;
  }
  .icon-and-links span {
    margin-right: 20px;
  }
  .icon-and-links p {
    display: inline-block;
  }
}

@media screen and (max-width: 769px) and (min-width: 500px) {
  .foot {
    padding: 5px;
  }

  .content-container {
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    font-size: 12px;
  }

  div.description-container {
    max-width: 100%;
  }

  div.content-container > div:not(:first-child) {
    max-width: 250px;
  }

  .icons-2 {
    display: none;
  }

  .icons-1 {
    display: block;
  }

  .icon-and-links {
    justify-content: center;
    margin-bottom: 20px;
  }
  .icon-and-links span {
    margin-right: 20px;
  }
  .icon-and-links p {
    text-align: center;
  }

  .icons {
    text-align: center;
  }
}

@media screen and (max-width: 500px) {
  .foot {
    padding: 20px;
  }

  .content-container {
    flex-direction: column;
  }

  div.description-container {
    max-width: 100%;
  }

  .icons-2 {
    display: none;
  }

  .icons-1 {
    display: block;
  }

  .icon-and-links {
    justify-content: center;
    margin-bottom: 20px;
  }
  .icon-and-links span {
    margin-right: 20px;
  }
  .icon-and-links p {
    text-align: center;
  }

  .icons {
    text-align: center;
  }
};
</style>
