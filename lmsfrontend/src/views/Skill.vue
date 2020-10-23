<template>
    <div class="skill">
        <div class="sidebar">
            <Sidebar></Sidebar>
        </div>
        <div class="dashnav">
          <Dashboardnavbar></Dashboardnavbar>
        </div>
		<div class="skillpage">
			<Section class="row row-cols-1 row-cols-md-2  quiz-cards">
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
						<router-link tag="button"  :to="{ name:'Question', params: {slug: 'business-analysis-1'} }" exact type="button" class='btn btn-danger quiz-btn' data-toggle='modal' data-target='#exampleModal'>
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
							<h4 class="card-title">Business anaylsis</h4>
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
							<h4 class="card-title">Business anaylsis</h4>
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
						<button type="button"  :to="{ name:'Question', params: {slug: 'business-analysis-3'} }" class='btn btn-danger quiz-btn' data-toggle='modal' data-target='#exampleModal'>
							Start Quiz
						</button>
						</div>
					</div>
				</div>
				<div class='quiz-card card col'>
					<div class='quiz-data row'>
						<div class='quiz-img col-6'>
							<img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.c-VJumIrfOg9qE7Fd4-GfQAAAA%26pid%3DApi&f=1' class='responsive'>
						</div>
						<div class='quiz-info col-6'>
							<h4 class="card-title">Business anaylsis</h4>
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
						<button type="button"  :to="{ name:'Question', params: {slug: 'business-analysis-4'} }" class='btn btn-danger quiz-btn' data-toggle='modal' data-target='#exampleModal'>
							Start Quiz
						</button>
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
	width: 15rem !important;
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
    width: 100%;
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
</style>