<template>
    <div class="skill">
        <div class="sidebar">
            <Sidebar></Sidebar>
        </div>
        <div class="dashnav">
          <Dashboardnavbar></Dashboardnavbar>
        </div>
		<div class="skillpage">
			
				<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
					<div class="modal-dialog" role="document">
						<div class="modal-card  modal-content">
						<nav>
							<div type="button" data-dismiss="modal" style="pointer: cursor;">
								<svg class="arrow" version="1.1" viewBox="0 0 512 512" width="512px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><polygon points="352,115.4 331.3,96 160,256 331.3,416 352,396.7 201.5,256 " stroke="#727272"/></svg>
								Back to Quizzes
							</div>
						</nav>
						<div class="description">
							<h2>Business Analysis</h2>
							<h4>A four module Business Analysis examination mockup.</h4>
							<ul class="list-group">
								<li class="list-group-item mt-3">
									<span class="name">Business Analysis Quiz One</span>
								<router-link tag="div" data-dismiss="modal"  :to="{ name:'Question', params: {slug: 'business-analysis-1'} }" exact type="button" class='btn btn-default btn-xs pull-right remove-item' data-toggle='modal' data-target='#exampleModal'>
									<i class="fas fa-arrow-right"></i>
								</router-link>
								</li>
								<li class="list-group-item">
									<span class="name">Business Analysis Quiz Two</span> 
										<div class="btn btn-default btn-xs pull-right remove-item">
									<i class="fas fa-arrow-right"></i>
									</div>
								</li>
								<li class="list-group-item">
									<span class="name">Business Analysis Quiz Three</span>
										<div class="btn btn-default btn-xs pull-right remove-item">
									<i class="fas fa-arrow-right"></i>
									</div>
								</li>
								<li class="list-group-item">
									<span class="name">Business Analysis Quiz Four</span> 
										<div class="btn btn-default btn-xs pull-right remove-item">
									<i class="fas fa-arrow-right"></i>
									</div>
								</li>
							</ul>
						</div>
					</div>
					</div>
				</div>
			<Section class="quiz-cards">
				<div class='quiz-card card col'>
					<div class='quiz-data row'>
						<div class='quiz-img col-6'>
							<img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.c-VJumIrfOg9qE7Fd4-GfQAAAA%26pid%3DApi&f=1' class='responsive'>
						</div>
						<div class='quiz-info col-6'>
							<h4 class="card-title">Business anaylsis</h4>
							<ul class="quiz-info-list card-body">
								<li>
									<i class="fa fa-clock-o mr-2" aria-hidden="true"></i>
									<b>~60 minutes</b> duration                    
								</li>
								<li>
									<i class="fa fa-check-square-o mr-2" aria-hidden="true"></i>
									<b>65 percent</b> required to pass and get a badge</li>
								<li>
									<i class="fa fa-calendar-check-o mr-2" aria-hidden="true"></i>
									You can <b>retake</b> this assessment if you don't pass
								</li>
						</ul>
						<!-- <router-link tag="button"  :to="{ name:'Question', params: {slug: 'business-analysis-1'} }" exact type="button" class='btn btn-danger quiz-btn' data-toggle='modal' data-target='#exampleModal'>
							Start Quiz
						</router-link> -->
						<button type="button" class="btn btn-danger quiz-btn" data-toggle="modal" data-target="#exampleModal">
							Start
						</button>
						</div>
					</div>
				</div>
				<!-- <div class='quiz-card card col'>
					<div class='quiz-data row'>
						<div class='quiz-img col-6'>
							<img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.c-VJumIrfOg9qE7Fd4-GfQAAAA%26pid%3DApi&f=1' class='responsive'>
						</div>
						<div class='quiz-info col-6'>
							<h4 class="card-title">Business anaylsis <b>2</b></h4>
							<ul class="quiz-info-list card-body">
								<li>
									<i class="fas fa-clock-o mr-2" aria-hidden="true"></i>
									<b>~60 minutes</b> duration                    
								</li>
								<li>
									<i class="fa fa-check-square-o mr-2" aria-hidden="true"></i>
									<b>65 percent</b> required to pass and get a badge</li>
								<li>
									<i class="fas fa-calendar-check-o mr-2"></i>
									You can <b>retake</b> this assessment if you don't pass
								</li>
						</ul>
						<router-link tag="button"  :to="{ name:'Question', params: {slug: 'business-analysis-2'} }" exact type="button" class='btn btn-danger quiz-btn' data-toggle='modal' data-target='#exampleModal'>
							Start Quiz
						</router-link>
						</div>
					</div>
				</div>
				<div class='quiz-card card col'>
					<div class='quiz-data row'>
						<div class='quiz-img col-6'>
							<img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.c-VJumIrfOg9qE7Fd4-GfQAAAA%26pid%3DApi&f=1' class='responsive'>
						</div>
						<div class='quiz-info col-6'>
							<h4 class="card-title">Business anaylsis <b>3</b></h4>
							<ul class="quiz-info-list card-body">
								<li>
									<i class="fa fa-clock-o mr-2" aria-hidden="true"></i>
									<b>~60 minutes</b> duration                    
								</li>
								<li>
									<i class="fa fa-check-square-o mr-2" aria-hidden="true"></i>
									<b>65 percent</b> required to pass and get a badge</li>
								<li>
									<i class="fa fa-calendar-check-o mr-2" aria-hidden="true"></i>
									You can <b>retake</b> this assessment if you don't pass
								</li>
						</ul>
						<router-link tag="button"  :to="{ name:'Question', params: {slug: 'business-analysis-3'} }" exact type="button" class='btn btn-danger quiz-btn' data-toggle='modal' data-target='#exampleModal'>
							Start Quiz
						</router-link>
						</div>
					</div>
				</div>
				<div class='quiz-card card col'>
					<div class='quiz-data row'>
						<div class='quiz-img col-6'>
							<img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.c-VJumIrfOg9qE7Fd4-GfQAAAA%26pid%3DApi&f=1' class='responsive'>
						</div>
						<div class='quiz-info col-6'>
							<h4 class="card-title">Business anaylsis <b>4</b></h4>
							<ul class="quiz-info-list card-body">
								<li>
									<i class="fas fa-clock-o mr-2" aria-hidden="true"></i>
									<b>~60 minutes</b> duration                    
								</li>
								<li>
									<i class="fa fa-check-square-o mr-2" aria-hidden="true"></i>
									<b>65 percent</b> required to pass and get a badge</li>
								<li>
									<i class="fas fa-calendar-check-o mr-2"></i>
									You can <b>retake</b> this assessment if you don't pass
								</li>
						</ul>
						<button type="button" class='btn btn-danger quiz-btn' data-toggle='modal' data-target='#exampleModal'>
							Start Quiz
						</button>
						</div>
					</div>
				</div> -->
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

<style lang="scss" scoped>
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
	width: 35rem !important;
	margin-bottom: 3rem;
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
    width: 100vw;
    /* display: inline-block; */
    float: left;
    margin: 0 auto;
    padding:50px 0 0 100px;
    text-justify: auto;
}

@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,700&display=swap');


html{
    font-size: 62.5%;
    /* font-family: 'Lato', sans-serif; */
}

.startmodal{
    width: 50vw;
    height: 70vh;
    /* margin: auto; */
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 1.6rem;
}

.header{
    text-align: center;
}

.info-header{
    font-weight: 600;
    line-height: 1.75;
    margin-bottom: 8px !important;
    color: rgba(0,0,0,.9);
}

.info-text{
    line-height: 1.5;
}

.overview_list{
    list-style-type: none;
    /* font-size: 0; */
}

/* li{
    margin-bottom: 1.5rem;
} */


.list-group-item.mouseover {
  background: #fafafa;
  cursor: pointer;
}

.list-group-item .remove-item.mouseover {
  background: #aaf;
  cursor: pointer;
}

.modal.fade .modal-dialog{
	transition: transform .3s ease-out;
	transform: none;
}

.modal-card {
    
    width: 650px;
    // height: 375px;
    position: fixed;
    background: white;
    margin: 0 auto;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12);
    transition: all 0.3s;
    
    &:hover {
      
      box-shadow: 0 8px 17px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
    
    }
    
    nav {
      
      width: 100%;
      color: #727272;
      text-transform: uppercase;
      padding: 20px;
      border-bottom: 2px solid #efefef;
      font-size: 12px;
      
      svg.arrow {
        float: left;
        height: 15px;
        width: 15px;
        margin-right: 10px;
      }
      
    }

    .description {
      
       padding: 20px;
       float: left;
       width: auto;
       border-left: 2px solid #efefef;
       
       h1 {
         color: #515151;
         font-weight: 300;
         padding-top: 15px;
         margin: 0;
         font-size: 30px;
         font-weight: 300;
       }
     
       h2 {
        color: #515151;
        margin: 0;
        text-transform: uppercase;
        font-weight: 500;
       }
      
       h4 { 
         margin: 0;
         color: #727272;
         text-transform: uppercase;
         font-weight: 500;
         font-size: 12px
       }
      
       p { 
         font-size: 12px; 
         line-height: 20px;
         color: #727272;
         padding: 20px 0;
         margin: 0;
      }
      
       button {
         outline: 0;
         border: 0;
         background: none;
         border: 1px solid #d9d9d9;
         padding: 8px 0px;
         margin-bottom: 30px;
         color: #515151;
         text-transform: uppercase;
         width: 125px;
         font-family: inherit;
         margin-right: 5px;
         transition: all 0.3s ease;
         font-weight: 500;
         
         &:hover {          
           // background: darken(white, 2%);
           border: 1px solid #aedaa6;
           color: #aedaa6;
           cursor: pointer;           
         }
       }
    }
}
</style>