<template>
    <div class="skill">
        <div class="sidebar">
            <Sidebar></Sidebar>
        </div>
        <div class="dashnav">
          <Dashboardnavbar></Dashboardnavbar>
        </div>
    <div class="skillpage">
       <Section class=" container card-box">
        <hr>
        <div class="card" style="width: 20rem;">
            <img class="card-img-top" src="@/assets/download.png" alt="Card image cap">
            <div class="card-body shadow-sm cardd">
              <h5 class="card-title">Business Analysis</h5>
              <p class="card-text">Job titles for business analysis practitioners include not only business analyst, 
                but also business systems analyst, systems analyst, requirements engineer, process analyst, product manager,
               product owner, enterprise analyst, business architect, management consultant, business intelligence analyst, 
               data scientist, and more. 
              .</p>
              <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
              <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
              Start
            </button>
            <!-- Modal -->
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Business Analysis</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <div class="modal-data">
                      <p>Performing a business analysis can help you identify problems within a business, and this quiz/worksheet duo will help test your ability to understand the steps involved in the process.<br><br><br>

                        <b>Quizz Goals</b><br>
                        <b>	These assessments will test your understanding to identify the following:</b>
                        <ul>
                          
                          <li>	Requirements of a business analysis</li>
                          <li>	Who provides organization and strategic guidance</li>
                          <li>	Determine problems and identify business needs</li>
                          <li>	Techniques uses to define stakeholder requirements </li>
                          <li>	How a business analysis project originates</li>
                          <!-- <li>	Facilitate the successful implementation of the product, service, or end result of the program or project</li> -->
                        </ul>
                        </p>
                      
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <router-link :to = "{ name:'Question' }" class="btn btn-primary"  data-dismiss="modal" exact>Start Quiz</router-link>
                  </div>
                </div>
              </div>
            </div>
            </div>
        </div>

        <!-- Card 2 -->
        <!-- <div class="card" style="width: 20rem;">
            <img class="card-img-top" src="@/assets/logo.png" alt="Card image cap">
            <div class="card-body shadow-sm cardd">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div> -->

        
        <!-- <div class="card-deck mb-3 text-center">
            <div class="card mb-4 shadow-sm cardd">
                <div class="card-body">
                    <button class="btn btn-lg btn-primary">Add new Course</button>
                </div>
            </div>
            <div class="card mb-4 shadow-sm cardd">
                <div class="card-body">
                    <button class="btn btn-lg btn-primary">Add new Course</button>
                </div>

            </div>
            <div class="card mb-4 shadow-sm cardd">
                <div class="card-body">
                    <button class="btn btn-lg btn-primary">Add new Course</button>
                </div>
            </div>
        </div>
 -->

    </Section>

    </div>
        
    </div>    
</template>

<script>
import Sidebar from '@/components/Dashboard/Sidebar.vue'
import Dashboardnavbar from '@/components/Dashboard/Dashboardnavbar.vue'

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

.modal-data{
height:450px;
width:450px;
font:16px/26px Lato, Garamond, Serif;
overflow:auto;
}

.skillpage{
  position: absolute;
    padding-top: 3rem;
    margin: 0 auto;
    height: 100%;
}

Section{
    width: 100%;
    /* display: inline-block; */
    float: left;
    margin: 0 auto;
    padding:50px 0 0 100px;
    text-justify: auto;
}

.card{
  display: inline-block;
  margin-left: 50px;
}




</style>