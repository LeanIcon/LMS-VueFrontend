<template>
    <div class="dashboard">
        <div class="sidebar">
            <Sidebar></Sidebar>
        </div>
        <div class="dashnav">
          <Dashboardnavbar></Dashboardnavbar>
        </div>
        <div class="home-content">
          <div class="containter-data">
            <div class="title">
              <h2>Progress</h2>
            </div>

            <div class="layer-1">
              <div class="row card-deck">
                <!-- STATISTICS CARD- PIE CHART -->
                <div class="card piechart layer-1-card stats-card">
                  <div class="card-head">
                    <p class="card-title">Statistics</p>
                  </div>
                    <div class="piechart-image">
                      <img src="../assets/Pie_Chart_ei.png" alt="Piechart">
                    </div>
                    <hr>
                    <div class="row chart-data">
                      <div class="col stat-data-placement">
                        <div class="stat-icon completed"></div>
                        <div class="stat-data">
                          <p class="stat-percentage">30%</p>
                          <span>completed</span>
                        </div>
                      </div>
                      <div class="col stat-data-placement">
                        <div class="stat-icon in-process"></div>
                        <div class="stat-data">
                          <p class="stat-percentage">50%</p>
                          <span>in process</span>
                        </div>
                      </div>
                      <div class="col stat-data-placement">
                        <div class="stat-icon to-begin"></div>
                        <div class="stat-data">
                          <p class="stat-percentage">15%</p>
                          <span>to begin</span>
                        </div>
                      </div>
                    </div>
                </div>

                <!-- STATISTICS CARD- BADGES-->
                <div class="card badges layer-1-card stats-card">
                  <div class="card-head">
                    <p class="card-title">Badges</p>
                  </div>
                    <div class="badge-frame ">
                      <div class="badge-1 badge-holder"></div>
                      <div class="badge-2 badge-holder"></div>
                      <div class="badge-3 badge-holder"></div>
                    </div>
                    <div class="show-all-badges">
                      <p class="badge-link">show all badges</p>
                    </div>
                </div>
              </div>
            </div>

            <!-- STATISTICS CARD- COURSE-->
            <div class="layer-2">
              <div class="title">
                <h2>My course</h2>
              </div>
              <div class="row card-deck">
                <div class="card course-progress stats-card">
                  <div class="card-head head-btn">
                    <p class="card-title ">Business Analysis</p>
                    <div class="start-btn btn btn-primary">Start</div>
                  </div>
                  <h1>Course Journey</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'
import Dashboardnavbar from '@/components/Dashboardnavbar.vue'
export default {
// @ is an alias to /src
  name: 'Dashboard',
  components:{
    Sidebar,
    Dashboardnavbar,
  },
}
</script>

<style scoped>
.sidebar{
  position: fixed;
  z-index: 2;
}

.dashnav{
  position: static;
  z-index: 1;
}

.home-content{
  background-color: #EDEDED;
  position: absolute;
  width: 100%;
  padding-left: 7rem;
  top: 4rem;
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
</style>