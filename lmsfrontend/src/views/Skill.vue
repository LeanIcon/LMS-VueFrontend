<template>
    <div class="skill">
        <div class="sidebar">
            <Sidebar></Sidebar>
        </div>
        <div class="dashnav">
          <Dashboardnavbar></Dashboardnavbar>
        </div>
    <div class="skillpage">
       <Section class=" container card-deck">
          <div class='quiz-card card'>
            <div class='quiz-data row'>
              <div class='quiz-img col-6'>
                <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.c-VJumIrfOg9qE7Fd4-GfQAAAA%26pid%3DApi&f=1' class='responsive'>
              </div>
              <div class='quiz-info col-6'>
                  <h5 class="card-title">Business anaylsis</h5>
                  <ul class="quiz-info-list card-body">
                      <li><i class="fa fa-check" aria-hidden="true"></i> Complete 40 set questions</li>
                      <li><i class="fa fa-check" aria-hidden="true"></i> Earn a skill badge</li>
                      <li><i class="fa fa-check" aria-hidden="true"></i> Complete 40 set questions</li>
                      <li><i class="fa fa-check" aria-hidden="true"></i> Earn a skill badge</li>
                  </ul>
                  <button type="button" class='btn btn-danger quiz-btn' data-toggle='modal' data-target='#exampleModal'>
                      Start Quiz
                  </button>
                  <!-- Modal -->
                  <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h4 class="modal-title" id="exampleModalLabel">Business Analysis</h4>
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
                          <a href='https://leanicontechnology.com/quiz/'><button type="button"  class="btn btn-primary">Start Quiz</button></a>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
        </div>
          <div class='quiz-card card'>
            <div class='quiz-data row'>
              <div class='quiz-img col-6'>
                <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.c-VJumIrfOg9qE7Fd4-GfQAAAA%26pid%3DApi&f=1' class='responsive'>
              </div>
              <div class='quiz-info col-6'>
                  <h4 class="card-title">Business anaylsis</h4>
                  <ul class="quiz-info-list card-body">
                      <li><i class="fa fa-check" aria-hidden="true"></i> Complete 40 set questions</li>
                      <li><i class="fa fa-check" aria-hidden="true"></i> Earn a skill badge</li>
                      <li><i class="fa fa-check" aria-hidden="true"></i> Complete 40 set questions</li>
                      <li><i class="fa fa-check" aria-hidden="true"></i> Earn a skill badge</li>
                  </ul>
                  <button type="button" class='btn btn-danger quiz-btn' data-toggle='modal' data-target='#exampleModal'>
                      Start Quiz
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
                          
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
        </div>
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

.quiz-info-list > li{
  list-style: none;
}

.dashnav{
  position: static;
  z-index: 1;
}

.quiz-card{
	width: 100%;
}

.quiz-info, .quiz-img{
  padding: 0;
  position: unset;
}

.responsive {
  max-width: 100%;
  height: 100%;
}


.quiz-btn{
	border-radius: 0px;
  position: absolute;
  right: 0;
  bottom: 0;
}

.quiz-context{
	height: 80%;
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

</style>