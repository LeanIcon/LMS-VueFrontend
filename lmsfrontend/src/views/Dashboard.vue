<template>
    <div class="dashboard">
        <div class="sidebar">
            <Sidebar></Sidebar>
        </div>
        <div class="mobileNav">
            <MobileNav/>
        </div>
        <div class="dashnav">
          <Dashboardnavbar v-bind:profileInfo="profileInfo"></Dashboardnavbar>
        </div>
        <div class="home-content">
          <div class="containter-data">
            <div class="title">
              <h2>Progress</h2>
            </div>
            <div class="header-body">
              <div class="row">
                <div class="col-xl-3 col-lg-6">
                  <div class="card card-stats mb-4 mb-xl-0">
                    <div class="card-body">
                      <div class="row">
                        <div class="col">
                          <h5 class="card-title text-uppercase text-muted mb-0">Learning Streak</h5>
                          <span class="h2 font-weight-bold mb-0">N/A Days</span>
                        </div>
                        <div class="col-auto">
                          <div class="icon icon-shape bg-danger text-white rounded-circle shadow">
                            <i class="fas fa-chart-bar"></i>
                          </div>
                        </div>
                      </div>
                      <!-- <p class="mt-3 mb-0 text-muted text-sm">
                        <span class="text-success mr-2"><i class="fa fa-arrow-up"></i> 3.48%</span>
                        <span class="text-nowrap">Since last month</span>
                      </p> -->
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-lg-6">
                  <div class="card card-stats mb-4 mb-xl-0">
                    <div class="card-body">
                      <div class="row">
                        <div class="col">
                          <h5 class="card-title text-uppercase text-muted mb-0">Courses Taken</h5>
                          <span class="h2 font-weight-bold mb-0">N/A</span>
                        </div>
                        <div class="col-auto">
                          <div class="icon icon-shape bg-warning text-white rounded-circle shadow">
                            <i class="fas fa-chart-pie"></i>
                          </div>
                        </div>
                      </div>
                      <!-- <p class="mt-3 mb-0 text-muted text-sm">
                        <span class="text-success mr-2"><i class="fa fa-arrow-up"></i> 3.48%</span>
                        <span class="text-nowrap">Since last month</span>
                      </p> -->
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-lg-6">
                  <div class="card card-stats mb-4 mb-xl-0">
                    <div class="card-body">
                      <div class="row">
                        <div class="col">
                          <h5 class="card-title text-uppercase text-muted mb-0">Quizzes Taken</h5>
                          <span class="h2 font-weight-bold mb-0">N/A</span>
                        </div>
                        <div class="col-auto">
                          <div class="icon icon-shape bg-yellow text-white rounded-circle shadow">
                            <i class="fas fa-users"></i>
                          </div>
                        </div>
                      </div>
                      <!-- <p class="mt-3 mb-0 text-muted text-sm">
                        <span class="text-warning mr-2"><i class="fas fa-arrow-down"></i> 1.10%</span>
                        <span class="text-nowrap">9 retakes</span>
                      </p> -->
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-lg-6">
                  <div class="card card-stats mb-4 mb-xl-0">
                    <div class="card-body">
                      <div class="row">
                        <div class="col">
                          <h5 class="card-title text-uppercase text-muted mb-0">Performance</h5>
                          <span class="h2 font-weight-bold mb-0">N/A</span>
                        </div>
                        <div class="col-auto">
                          <div class="icon icon-shape bg-info text-white rounded-circle shadow">
                            <i class="fas fa-percent"></i>
                          </div>
                        </div>
                      </div>
                      <!-- <p class="mt-3 mb-0 text-muted text-sm">
                        <span class="text-success mr-2"><i class="fas fa-arrow-up"></i> 12%</span>
                        <span class="text-nowrap">Since last month</span>
                      </p> -->
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- <div class="title">
              <h2>Recent Activity</h2>
            </div>
            <div class="row">
                <div class="col-xl-6 col-lg-12 col-md-12 mb-3">
                  <ActivityCard></ActivityCard>
                </div>
                <div class="col-xl-6 col-lg-12 col-md-12 mb-3">
                  <quizCard></quizCard>
                </div>
            </div> -->

          </div>
        </div>
    </div>
</template>

<script>
import Sidebar from '@/components/Dashboard/Sidebar.vue'
import MobileNav from '@/components/Dashboard/MobileNav.vue'
// import ActivityCard from '@/components/Dashboard/ActivityCard.vue'
// import quizCard from '@/components/Dashboard/quizCard.vue' 
import Dashboardnavbar from '@/components/Dashboard/Dashboardnavbar.vue'
export default {
// @ is an alias to /src
  name: 'Dashboard',
  components:{
    Sidebar,
    Dashboardnavbar,
    MobileNav,
    // ActivityCard,
    // quizCard
  },
  
  mounted () {
      this.$store.dispatch('fetchProfile'),
      this.$store.dispatch('fetchInfo'),
      this.$store.dispatch('fetchQuizCategory')
  },
}
</script>

<style scoped>

.mobileNav{
  display: none;
}

h2,
h5,
.h2,
.h5 {
  font-family: inherit;
  font-weight: 600;
  line-height: 1.5;
  margin-bottom: .5rem;
  color: #32325d;
}

h2,
.h2 {
  font-size: 1.25rem;
}

h5,
.h5 {
  font-size: .8125rem;
}

.card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  border: 1px solid rgba(0, 0, 0, .05);
  border-radius: .375rem;
  background-color: #fff;
  background-clip: border-box;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.1);
}


.bg-info {
  background-color: #11cdef !important;
}

a.bg-info:hover,
a.bg-info:focus,
button.bg-info:hover,
button.bg-info:focus {
  background-color: #0da5c0 !important;
}

.bg-warning {
  background-color: #fb6340 !important;
}

a.bg-warning:hover,
a.bg-warning:focus,
button.bg-warning:hover,
button.bg-warning:focus {
  background-color: #fa3a0e !important;
}

.bg-danger {
  background-color: #f5365c !important;
}

a.bg-danger:hover,
a.bg-danger:focus,
button.bg-danger:hover,
button.bg-danger:focus {
  background-color: #ec0c38 !important;
}

.bg-default {
  background-color: #172b4d !important;
}

a.bg-default:hover,
a.bg-default:focus,
button.bg-default:hover,
button.bg-default:focus {
  background-color: #0b1526 !important;
}

.rounded-circle {
  border-radius: 50% !important;
}

.align-items-center {
  align-items: center !important;
}

@media (min-width: 1200px) {
  .justify-content-xl-between {
    justify-content: space-between !important;
  }
}

.shadow {
  box-shadow: 0 0 2rem 0 rgba(136, 152, 170, .15) !important;
}


.bg-yellow {
  background-color: #ffd600 !important;
}

a.bg-yellow:hover,
a.bg-yellow:focus,
button.bg-yellow:hover,
button.bg-yellow:focus {
  background-color: #ccab00 !important;
}

.bg-gradient-primary {
  background: linear-gradient(87deg, #5e72e4 0, #825ee4 100%) !important;
}

.bg-gradient-primary {
  background: linear-gradient(87deg, #5e72e4 0, #825ee4 100%) !important;
}

.main-content {
  position: relative;
}

@media (min-width: 768px) {
  .main-content .container-fluid {
    padding-right: 39px !important;
    padding-left: 39px !important;
  }
}

.header {
  position: relative;
}

.icon {
  width: 3rem;
  height: 3rem;
}

.icon i {
  font-size: 2.25rem;
}

.icon-shape {
  display: inline-flex;
  padding: 12px;
  text-align: center;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
}

.icon-shape i {
  font-size: 1.25rem;
}

.sidebar{
  position: fixed;
  z-index: 2;
}

.dashnav{
  position: fixed;
  z-index: 1;
}

.home-content{
  background-color: #EDEDED;
  position: absolute;
  width: 100%;
  padding-left: 7rem;
  top: 52px;
  height: 150%;
}

.title{
  margin-top: 1.5rem;
  margin-bottom: 1rem;
}
.card{
  border-width: none;
  border: 0px solid rgba(0,0,0,.125);
  border-radius: 10px;
}

.containter-data{
  padding: 0 4rem;
}

.stats-card{
  box-shadow: 5px 10px 18px #E0E0E0;
}

.stats-card:hover{
  box-shadow: 5px 10px 18px #D9D9D9;  
}

.layer-2{
  margin-top: 3rem;
  
}

/* .layer-1-card{
  height: 20rem !important;
} */

.card-head{
  margin-left: 20px;
  margin-top: 15px;
}

.piechart-image{
  margin: auto;
}

.piechart-image > img{
  height: 10rem;
}

.chart-data{
  margin: auto 0;
  margin-bottom: 20px;
}

.stat-percentage{
  margin-bottom: -4px;
}

.stat-icon{
  width: 17px;
  height: 17px;
  border: 0 solid #abcabc;
  border-radius: 100%;
  margin: 10px 5px 0 0;
}

.completed{
  background-color: rgba(255,127,0,1);
}

.to-begin{
  background-color:rgba(255,229,204,1);
}

.in-process{
  background-color: rgba(255,183,113,1)
}

.stat-data-placement{
  display: flex;
  place-content: center;
}

/* ================ */
/* Badges */
/* ================= */
.badge-holder{
  display: inline-block;
  height: 10rem;
  width: 10rem;
  background-color: rgb(189, 177, 177);
  border-radius: 100%;
}

.badge-1, .badge-2{
  margin-right: 15px;
  /* margin: auto; */
}

.badge-frame{
  padding-left: 15px;
}

.show-all-badges{
height: 4.2rem;
padding-left: 40%;
padding-top: 7%;
}

.badge-link{
  margin: auto;
}

@media (max-width: 1104px) {
  .badge-3{
    display: none;
  }
}

/* ======================== */
/*    Start Course Card     */
/* ======================== */
.start-btn{
  position: absolute;
  width: 4rem;
  height: 1.5rem;
  padding: .0rem .75rem;
  left: 92%;
}

.head-btn{
  display: inline-flex;
  flex-direction: row;
}
.crd{
  height: 8rem;
}


@media screen and (max-width: 754px) {
  .sidebar{
    display: none;
  }

  .mobileNav{
    display: initial;
  }

  .home-content{
    background-color: #EDEDED;
    position: absolute;
    width: 100%;
    padding-left: 0;
    top: 52px;
    height: 150%;
  }
}

</style>