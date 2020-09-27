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
            <div class="bell-icon nav-item col icon dropdown">
               <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none"
                  stroke="rgba(248,244,244,1)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  class="feather feather-bell dropdown-toggle"  id="navbarDropdownMenuLink-333" data-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false">
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                  <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
               </svg>
                              
               <div class="dropdown-menu dropdown-menu-right"
                  aria-labelledby="navbarDropdownMenuLink-333">
                  <p class="dropdown-item">You have no new messages</p>
               </div>
            </div>

            <div class="dropdown-icon nav-item dropdown col icon menu-icon">
               <svg version="1.1" id="Capa_1 navbarDropdownMenuLink-333"  fill="rgba(188,188,203,1)" width="22" height="22" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" class="dropdown-toggle" data-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false"
                     viewBox="0 0 271.673 271.673" style="enable-background:new 0 0 271.673 271.673;" xml:space="preserve">
                  <g>
                     <g>
                        <g>
                           <path d="M114.939,0H10.449C4.678,0,0,4.678,0,10.449v104.49c0,5.771,4.678,10.449,10.449,10.449h104.49
                              c5.771,0,10.449-4.678,10.449-10.449V10.449C125.388,4.678,120.71,0,114.939,0z"/>
                           <path d="M261.224,0h-104.49c-5.771,0-10.449,4.678-10.449,10.449v104.49c0,5.771,4.678,10.449,10.449,10.449h104.49
                              c5.771,0,10.449-4.678,10.449-10.449V10.449C271.673,4.678,266.995,0,261.224,0z"/>
                           <path d="M114.939,146.286H10.449C4.678,146.286,0,150.964,0,156.735v104.49c0,5.771,4.678,10.449,10.449,10.449h104.49
                              c5.771,0,10.449-4.678,10.449-10.449v-104.49C125.388,150.964,120.71,146.286,114.939,146.286z"/>
                           <path d="M261.224,146.286h-104.49c-5.771,0-10.449,4.678-10.449,10.449v104.49c0,5.771,4.678,10.449,10.449,10.449h104.49
                              c5.771,0,10.449-4.678,10.449-10.449v-104.49C271.673,150.964,266.995,146.286,261.224,146.286z"/>
                        </g>
                     </g>
                  </g>
               </svg>
                <ul class="dropdown-menu user-area">
                     <div class="user-profile-bar row">
                        <img src="https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=Admin" alt="" class="avatar-icon col-3">
                        <router-link :to = "{ name:'Editprofile' }" class="profile-data col-9" tag="div" exact>
                           <h4>Adminstrator</h4>
                           <p>test.littlms@gmail.com</p>                           
                        </router-link>
                     </div>
                     <hr>
                     <li class="nav-item"><router-link :to = "{ name:'Dashboard' }" exact class="dropdown-item" tag="a">My Courses</router-link></li>
                     <!-- <li class="nav-item"><a class="dropdown-item" href="#">Wishlist</a></li> -->
                     <li class="nav-item"><a class="dropdown-item" href="#">Payment Settings</a></li>
                     <li class="nav-item"><router-link :to = "{ name:'Editprofile' }" class="dropdown-item" tag="a" exact>Edit Profile</router-link></li>
                     <li class="nav-item"><a class="dropdown-item logout" v-on:click="created">Logout</a></li>                
                  </ul>
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
      // // When the user clicks on div, open the popup
      // toggleNotification: function myFunction() {
      //    var popup = document.getElementById("myPopup");
      //    popup.classList.toggle("show");
      // },
      
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

.user-profile-bar{
   height: 3rem;
   padding-left: 10px;
   padding-right: 10px;
   cursor: pointer;
}

.avatar-icon{
   width: 60px;
   height: 60px;
}

.dropdown-menu{
   margin-top: .5rem;
   /* margin-right: 1rem; */
}

.dropdown-item{
   height: 2.5rem;
   padding: 0.5rem 1.5rem;
}

.user-area{
   width: 18rem;
}

.dashboard-nav{
   background-color: rgb(255, 255, 255);
   padding-left: 7rem;
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
    width: 7rem;
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