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
                    <div  style="height:450px;width:450px;font:16px/26px Lato, Garamond, Serif;overflow:auto;">
                      <p>Introducing an agile approach has a significant impact on the role of the Business Analyst, on their existing skills and their way of working. Whilst traditional skills are still valuable, new skills and ways of working need to be adopted to harness the benefits of a new way of working and to appreciate the different relationships with co-workers and stakeholders.<br> This training provides the useful, practical and comprehensive guidance on the role of the Business Analyst working in an agile way.
                        Business Analysts play a crucial role in projects, through analysis of the organization’s needs and the alignment of business projects to those needs. This course gives context to the Business Analyst role beyond the individual project, in relation to organizational mission and strategy, and provides additional depth and guidance for the Business Analyst role.<br> As organizations and individuals embrace and transition to Agile ways of working, the role of the Business Analyst has evolved significantly, requiring fresh guidance, concepts and techniques.<br><br><br>

                        <b>Learning Goals</b>
                        <ul>
                          <li>	Knowledge and understanding Agile Business Analysis techniques</li>
                          <li>	How to move from traditional to more agile ways of working</li>
                          <li>	Learn tools needed to adopt an agile approach and when to use them</li>
                          <li>	Determine problems and identify business needs</li>
                          <li>	Identify and recommend viable solutions for meeting business needs </li>
                          <li>	Elicit, document and manage stakeholder requirements in order to meet operations and project objectives</li>
                          <li>	Facilitate the successful implementation of the product, service, or end result of the program or project</li>
                        </ul>
                        </p>
                      
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <router-link :to = "{ name:'Question' }" class="btn btn-primary" exact>Start Quiz</router-link>
                  </div>
                </div>
              </div>
            </div>
            </div>
        </div>

        <!-- Card 2 -->
        <div class="card" style="width: 20rem;">
            <img class="card-img-top" src="@/assets/logo.png" alt="Card image cap">
            <div class="card-body shadow-sm cardd">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>

        
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