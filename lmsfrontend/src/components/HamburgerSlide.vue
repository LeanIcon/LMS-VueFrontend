<template>
    <div class="hamburger">
        <div class="header-icon"><span style="font-size: 30px; cursor: pointer;" v-if="navToggle" v-on:click="openNav">&#9776;</span></div>
        <div class="header-icon"><span style="font-size: 30px; cursor: pointer;" v-if="!navToggle" v-on:click="closeNav">&#9776;</span></div>
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
    this.navToggle = false
    },
    closeNav: function closeNav(){
    document.getElementById("mySideBar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    this.navToggle = true
  
  }
}
}
</script>

<style>

    #main .main-header div{
        display: inline-block;
        padding: 10px;
    }

</style>