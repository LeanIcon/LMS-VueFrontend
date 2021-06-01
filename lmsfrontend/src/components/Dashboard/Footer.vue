<template>
  <div class="footer-main">
      <div class="footer-block">
            <ul class="footer-navs">
                <li class="nav-link"><a>Contact LITT </a></li>
                <li class="nav-link"><a>Privacy </a></li>
                <li class="nav-link"><a>Terms of use </a></li>
                <li class="nav-link"><a>Accessibility </a></li>
                <li class="nav-link"><a>Cookie preferences </a></li>
            </ul>
        </div>
  </div>
</template>

<script>
export default {
    name: "Footer",
}
</script>

<style>
.footer-main{
    overflow-x: hidden;
    position: static;
    bottom: 0px;
}

.footer-block{
    height: 4rem;
    width: 100vw;
    background-color: #3f3f3f;
}

ul{
    list-style: none;
    display: flex;
    flex-direction: row;
    place-content: center;
}

.nav-link{
    color: #fefefe;
    font-weight: 500;
    margin: auto;
}

.footer-navs{
    height: 100%;
    margin-bottom: 0px;
    width: 60%;
    margin: auto;
}

.nav-link:hover{
    cursor: pointer;
}
</style>