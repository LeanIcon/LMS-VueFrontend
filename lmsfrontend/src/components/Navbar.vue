<template>
  <div class="navbar px-5">
    <div class="block-1 d-flex">
      <router-link
        tag="div"
        :to="{ name: 'Homepage' }"
        style="cursor: pointer"
        class="navbar-brand"
      >
        <img src="@/assets/images/logo.png" class="nav-logo" alt="" />
      </router-link>
      <input type="text" class="search-bar px-3" placeholder="Search" />
    </div>
    <div class="">
      <ul class="navi-items d-flex">
        <li class="">
          <router-link tag="a" class="nav-item" :to="{ name: 'Individuals' }"
            >Home</router-link
          >
        </li>
        <li class="">
          <a href="" class="nav-item">Courses</a>
        </li>
        <li class="">
          <a href="" class="nav-item">Skill Accessment</a>
        </li>
        <li class="">
          <a href="" class="nav-item">Login</a>
        </li>
        <li class="">
          <a href="" class="_button">Dashboard</a>
        </li>
        <!-- <li class="link mr-4" v-if="!this.$store.getters.loggedIn">
            <router-link :to="{ name:'Signin' }" class="alt-link" tag="li"><a>Login</a></router-link>
          </li>
          <li class="link mr-4" v-else>
            <div class="alt-link logout" @click="created"><a>Logout</a></div>
          </li> -->
        <!-- <router-link
          :to="{ name: 'Dashboard' }"
          v-if="this.$store.getters.loggedIn"
          class="btn btn-primary link"
          tag="li"
          ><a class="bn">Dashboard</a></router-link
        >
        <router-link
          :to="{ name: 'Register' }"
          v-else
          class="btn btn-primary link"
          tag="li"
          ><a class="bn">Signup</a></router-link
        > -->
      </ul>
    </div>
  </div>
</template>
  
<script>
export default {
  name: "Navbar",
  methods: {
    created() {
      this.$store.dispatch("userLogout").then(() => {
        this.$router.push({ name: "Signin" });
      });
    },
  },
};
</script>

<style scoped>
.navbar {
  height: 80px;
  box-shadow: 0px 0px 6px 3px rgba(0, 0, 0, 0.06);
  padding: 10px;
  display: flex;
  align-items: center;
}

.block-1 {
  align-items: center;
}

.search-bar {
  background: #faf5f5;
  border: 0px solid rgba(0, 0, 0, 0.15);
  padding: 10px;
  height: 35px;
  width: 250px;
  box-shadow: inset -2px -2px 4px rgba(255, 255, 255, 0.5),
    inset 2px 2px 4px rgba(170, 170, 204, 0.25),
    inset 5px 5px 10px rgba(170, 170, 204, 0.5), inset -5px -5px 10px #ffffff;
  border-radius: 40px;
}

.search-bar:focus {
  outline: none;
}

.navi-items {
  list-style-type: none;
  margin: 0;
  padding: 0;
  align-items: center;
}

.nav-item {
  padding: 0 0.625rem;
}

.link {
  margin: auto;
}

.alt-link {
  color: blue;
}

.link .bn {
  color: white;
}

.link a:hover {
  text-decoration: none;
  cursor: pointer;
}

.logout {
  color: red;
}

.nav-item {
  color: #000;
  text-decoration: none;
}

._button {
  color: #fff;
  background: #007bff;
  border-radius: 5px;
  padding: 0.625rem 1.5rem;
  margin-left: 0.625rem;
}

@media only screen and (max-width: 1024px) {
  .navbar {
    display: none;
  }
}
</style>