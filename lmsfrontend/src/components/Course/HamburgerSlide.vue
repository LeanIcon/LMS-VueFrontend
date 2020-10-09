<template>
    <div class="ham-bar">
        <div class="hamburger">
            <span class="ham-icon" v-on:click="openNav">&#9776;</span>
            <!-- <span class="ham-icon" v-if="!navToggle" v-on:click="closeNav">&#9776;</span> -->
        </div>
    </div>
</template>

<script>
export default {
    name: 'HamburgerSlide',

    data () {
        return {
            navToggle: true,
            }
    },

   methods:{
    // When the user clicks on div, open the popup
    openNav: function openNav(){
    document.getElementById("mySideBar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    // this.navToggle = false
    },
//     closeNav: function closeNav(){
//     document.getElementById("mySideBar").style.width = "0";
//     document.getElementById("main").style.marginLeft = "0";
//     this.navToggle = true
  
//   }
}
}
</script>

<style>
.ham-bar{
    height: 100vh;
    width: 4rem;
    background-color:  #C3000C;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1;
    margin: 0 auto;
}

    /* #main .main-header div{
        display: inline-block;
        padding: 10px;
    } */

    .ham-icon{
        font-size: 30px;
        cursor: pointer;
        margin: 0 30%;
        color: white;
    }

</style>