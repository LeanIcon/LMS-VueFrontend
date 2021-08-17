<template>
    <div class="navbar px-5">
      <div class="block-1 d-flex">
        <div class="nav-logo mr-5">
          <img src="@/assets/images/logo.png" alt="">
        </div>
        <input type="text" class="search-bar ml-5 px-3" placeholder="Search">
      </div>
      <div class="nav-links d-flex">
        <ul class="d-flex nav-items">
          <li class="link mr-4">
            <a>For Individuals</a>
          </li>
          <li class="link mr-4">
            <a>Skill Accessment</a>
          </li>
          <li class="link mr-4">
            <router-link :to = "{ name:'Signin' }" class="alt-link" tag="li"><a>Login</a></router-link>
          </li>
            <router-link :to = "{ name:'Dashboard' }" class="btn btn-primary link" tag="li"><a class="bn">Dashboard</a></router-link>
        </ul>
      </div>
    </div>
</template>
  
<script>
  export default {
    name: 'Navbar',
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

.link, .nav-items{
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
</style>