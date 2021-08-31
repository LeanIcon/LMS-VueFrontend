<template>
    <div class="navbar navbar navbar-expand-lg navbar-light px-5">
      <div class="block-1 d-flex">
        <router-link tag="div" :to="{name: 'Homepage'}" style="cursor: pointer;" class="nav-logo navbar-brand mr-5">
          <img src="@/assets/images/logo.png" alt="">
        </router-link>
        <input type="text" class="search-bar ml-5 px-3" placeholder="Search">
      </div>
      <div class="nav-links collapse navbar-collapse d-flex" style="justify-content: right;">
        <ul class="d-flex nav-items my-auto">
          <li class="link mr-4">
            <router-link tag="a" class="nav-item" :to="{ name: 'Individuals' }">For Individuals</router-link>
          </li>
          <li class="link mr-4">
            <a>Skill Accessment</a>
          </li>
          <li class="link mr-4" v-if="!this.$store.getters.loggedIn">
            <router-link :to="{ name:'Signin' }" class="alt-link" tag="li"><a>Login</a></router-link>
          </li>
          <li class="link mr-4" v-else>
            <div class="alt-link logout" @click="created"><a>Logout</a></div>
          </li>
            <router-link :to = "{ name:'Dashboard' }"  v-if="this.$store.getters.loggedIn" class="btn btn-primary link" tag="li"><a class="bn">Dashboard</a></router-link>
            <router-link :to = "{ name:'Register' }" v-else class="btn btn-primary link" tag="li"><a class="bn">Signup</a></router-link>
        </ul>
      </div>
    </div>
</template>
  
<script>
  export default {
    name: 'Navbar',
    methods:{
      created () {
        this.$store.dispatch('userLogout')
          .then(() => {
              this.$router.push({ name: 'Signin' })
          })
      }
    }
  }
</script>

<style scoped>
.navbar{
  height: 80px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  padding: 10px;
}

.search-bar{
  background: #FAF5F5;
  border: 0px solid rgba(0, 0, 0, 0.15);
  padding: 10px;
  height: 40px;
  box-shadow: inset -2px -2px 4px rgba(255, 255, 255, 0.5), inset 2px 2px 4px rgba(170, 170, 204, 0.25), inset 5px 5px 10px rgba(170, 170, 204, 0.5), inset -5px -5px 10px #FFFFFF;
  border-radius: 40px;
}

.search-bar:focus{
  outline: none;
}

.nav-items{
  list-style-type: none;
}

.link{
  margin: auto;
}

.alt-link{
  color: blue;
}

.link .bn{
  color: white;
}

.link a:hover{
  text-decoration: none;
  cursor: pointer;
}

.logout{
  color: red;
}

.nav-item{
  color: #000;
  text-decoration: none;
}

@media only screen and (max-width: 1024px){
  .navbar{
    display: none;
  }
}
</style>