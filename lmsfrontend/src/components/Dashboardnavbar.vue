<template>
     <div class="dashboard-nav user-bar">
      <div class="nav-area nav-list row">

         <div class="search-icon nav-item col">
            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24" fill="none"
               stroke="rgba(248,244,244,1)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
               class="feather feather-search">
               <circle cx="11" cy="11" r="8"></circle>
               <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
         </div>

         <div class="right-shift row col">
            <div class="bell-icon nav-item popup col icon" v-on:click="toggleNotification">
               <span class="popuptext" id="myPopup">You have no new notifications</span>
               <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none"
                  stroke="rgba(248,244,244,1)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  class="feather feather-bell">
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                  <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
               </svg>
            </div>

            <div class="user-img col icon">
               <img src="../assets/user.png" alt="">
            </div>

            <div class="dropdown-icon nav-item dropdown col icon">
               <img src="../assets/dropdown.png" class="dropdown-toggle" id="navbarDropdownMenuLink-333" data-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false">
               
               <div class="dropdown-menu dropdown-menu-right dropdown"
                  aria-labelledby="navbarDropdownMenuLink-333">
                  <router-link :to = "{ name:'Dashboard' }" exact class="dropdown-item">My Courses</router-link>
                  <a class="dropdown-item logout" v-on:click="created" v-on:hover="created">Logout</a>
               </div>
            </div>

         </div>
      </div>
   </div>
</template>
 
<script>   
// import { store } from '../store/user';
export default {
   name: "Dashboardnavbar",
   methods:{
      // When the user clicks on div, open the popup
      toggleNotification: function myFunction() {
         var popup = document.getElementById("myPopup");
         popup.classList.toggle("show");
      },
      
      created () {
      this.$store.dispatch('userLogout')
         .then(() => {
            this.$router.push({ name: 'Signin' })
         })
      }
  },
}
</script>

<style scoped>
.logout{
   color: red;
}

.dropdown-menu{
   margin-top: 1rem;
   margin-right: -1rem;
}

.dashboard-nav{
   background-color: rgb(255, 255, 255);
   position: fixed;
   width: 100%;
   top: 0px;
   height: 52px;
   z-index: 1;
   box-shadow: rgb(207 198 198 / 50%) 0px 0px 8px 0px;
}

.nav-item > svg{
    stroke: rgba(188,188,203,1);
}

.nav-list{
    /* display: inline-flex; */
    height: 52px;
}

.right-shift{
    position: absolute;
    /* padding-top: 50%, 0; */
    right: 0px;
    width: 10rem;
    height: 52px;
}

/* .search-icon{
    margin-left: 7rem;
    margin-top: 10px;
} */

/* .bell-icon{
    margin-right: 20px;
    margin-top: 2px;
} */

.icon{
   margin: auto 0px;
   padding: 0px;
}
  
.user-img > img {
    height: 35px;
    /* margin-right: 30px; */
}

.dropdown-icon > img{
    height: 15px;
    /* margin-right: 30px;     */
}

.search-icon:hover, .bell-icon:hover, .dropdown-icon:hover, .user-img>img:hover{
   cursor: pointer;
}


/* ======================== */
/* THE BELL NOTIFICATION */
/* ========================== */
.popup {
  position: relative;
  display: inline-block;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.popup .popuptext {
  visibility: hidden;
  width: 160px;
  background-color: #555;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 8px 0;
  position: absolute;
  z-index: 1;
  top: 48%;
  left: 50%;
  margin-left: -80px;
}

/* Popup arrow */
.popup .popuptext::after {
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #555 transparent transparent transparent;
}

/* Toggle this class - hide and show the popup */
.popup .show {
  visibility: visible;
  -webkit-animation: fadeIn 1s;
  animation: fadeIn 1s;
}

/* Add animation (fade in the popup) */
@-webkit-keyframes fadeIn {
  from {opacity: 0;} 
  to {opacity: 1;}
}

@keyframes fadeIn {
  from {opacity: 0;}
  to {opacity:1 ;}
}
</style>