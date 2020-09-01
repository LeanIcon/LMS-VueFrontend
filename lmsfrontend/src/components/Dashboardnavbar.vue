<template>
     <div class="dashboard-nav user-bar">
      <div class="nav-area nav-list">
         <div class="search-icon nav-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24" fill="none"
               stroke="rgba(248,244,244,1)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
               class="feather feather-search">
               <circle cx="11" cy="11" r="8"></circle>
               <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
         </div>
         <div class="right-shift">
            <div class="bell-icon nav-item">
               <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none"
                  stroke="rgba(248,244,244,1)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  class="feather feather-bell">
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                  <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
               </svg>
            </div>
            <div class="user-image nav-item">
               <div class="user-img">
                  <img src="../assets/user.png" alt="">
               </div>
            </div>
            <div class="dropdown-icon nav-item">
               <img src="../assets/dropdown.png" alt="">
            </div>
         </div>
      </div>

   </div>
</template>

<script>   
export default {
    name: "Dashboardnavbar"
}
</script>

<style scoped>
.dashboard-nav{
    /* background-color: #333; */
    position: absolute;
    width: 100%;
    /* left: 117px; */
    top: 0px;
    height: 4.2rem;
}

.nav-item > svg{
    stroke: rgba(188,188,203,1);
}

.nav-list, .right-shift{
    display: inline-flex;
    margin-top: 10px;
    margin-left: 112px;
    height: 4.2rem;
}

.right-shift{
    position: absolute;
    /* padding-top: 50%, 0; */
    right: 0px;
}

.search-icon{
    margin-left: 2rem;
    margin-top: 10px;
}

.bell-icon{
    margin-right: 30px;
    margin-top: 4px;
}

.user-img > img {
    height: 50px;
    margin-right: 30px;
    margin-top: -12px;
}

.dropdown-icon > img{
    height: 15px;
    margin-right: 30px;    
}

.search-icon:hover, .bell-icon:hover, .dropdown-icon:hover, .user-img>img:hover{
   cursor: pointer;
}
</style>