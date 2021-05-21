<template>
	<div id="header" class="transparent-nav">
		<div class="container">
			<Navbar></Navbar>
		</div>
	
		<!-- /Header -->
					<!-- Home -->
		<div id="home" class="hero-area">

			<!-- Backgound Image -->
			<div class="bg-image bg-parallax overlay hero-image home-bg"></div>
			<!-- /Backgound Image -->

			<div class="home-wrapper">
				<div class="container">
					<div class="row hero-content">
						<div class="col-12 mx-5">
							<h1 class="white-text" style="font-size: 50px;">See your Growth, Progress and Evolution</h1>
							<p class="hero-lead white-text">Learn to Successfully Put Agile Practices Into Action. Improve your Ability to Plan,<br> Manage & Lead in Your Project Teams with Agile</p>
							<router-link :to = "{ name:'Signin' }">
								<a class="main-button icon-button" style="cursor: pointer;">Get Started!</a>
							</router-link>
						</div>
					</div>
				</div>
			</div>

		</div>

		<!-- Courses -->
		<div id="courses" class="section">

			<!-- container -->
			<div class="container">

				<!-- row -->
				<div class="row">
					<div class="section-header text-center col-12">
						<h2>Explore Courses</h2>
						<p class="lead">Learn the several paths to a successful agility.</p>
					</div>
				</div>
				<!-- /row -->

				<!-- courses -->
				<div id="courses-wrapper">

					<!-- row -->
					<div class="row">

						<!-- single course -->
						<div class="col-md-3 col-sm-6 col-xs-6">
							<div class="course">
								<a href="#" class="course-img">
									<img src="../../assets/course01.jpg" alt="">
									<i class="course-link-icon fas fa-chalkboard-teacher"></i>
								</a>
								<a href='/accounts/signup/'>Business Analysis</a>
							</div>
						</div>
						<!-- /single course -->

						<!-- single course -->
						<div class="col-md-3 col-sm-6 col-xs-6">
							<div class="course">
								<a href="#" class="course-img">
									<img src="../../assets/course02.jpg" alt="">
									<i class="course-link-icon fas fa-chalkboard-teacher"></i>
								</a>
								<a class="course-title" href="#">Agile Software Engineering </a>
								<div class="course-details">
								</div>
							</div>
						</div>
						<!-- /single course -->

						<!-- single course -->
						<div class="col-md-3 col-sm-6 col-xs-6">
							<div class="course">
								<a href="#" class="course-img">
									<img src="../../assets/course03.jpg" alt="">
									<i class="course-link-icon fas fa-chalkboard-teacher"></i>
								</a>
								<a class="course-title" href="#">Agile Human Resource Management</a>
								<div class="course-details">
								</div>
							</div>
						</div>
						<!-- /single course -->

						<div class="col-md-3 col-sm-6 col-xs-6">
							<div class="course">
								<a href="#" class="course-img">
									<img src="../../assets/course04.jpg" alt="">
									<i class="course-link-icon fas fa-chalkboard-teacher"></i>
								</a>
								<a class="course-title" href="#">Agile Management</a>
							</div>
						</div>
						<!-- /single course -->

					</div>
					<!-- /row -->


				</div>
				<!-- /courses -->
		<!-- /Home -->

		<!-- About -->
		<div id="about" class="section">

			<!-- container -->
			<div class="container">

				<!-- row -->
				<div class="row">

					<div class="col-md-6">
						<div class="section-header">
							<h2>Welcome to LiTT LMS</h2>
						</div>

						<!-- feature -->
						<div class="feature">
							<i class="feature-icon fa fa-flask"></i>
							<div class="feature-content">
								<h4>Online Courses </h4>
								<p>Gain new skills and earn a certificate of completion.</p>
							</div>
						</div>
						<!-- /feature -->

						<!-- feature -->
						<div class="feature">
							<i class="feature-icon fa fa-users"></i>
							<div class="feature-content">
								<h4>Expert Coaches</h4>
								<p>learn with like-minded experts.</p>
							</div>
						</div>
						<!-- /feature -->

						<!-- feature -->
						<div class="feature">
							<i class="feature-icon fa fa-comments"></i>
							<div class="feature-content">
								<h4>Agile Community</h4>
								<p onclick="location.href='/accounts/signup/'">Join a team of agile minded experts</p>
							</div>
						</div>
						<!-- /feature -->

					</div>

					<div class="col-md-6">
						<div class="about-img">
							<img src="../../assets/about.png" alt="">
						</div>
					</div>

				</div>
				<!-- row -->

			</div>
			<!-- container -->
		</div>
		<!-- /About -->

		<!-- Courses -->
				<div class="row">
					<div class="center-btn">
						<!--a class="main-button icon-button" href="#">More Courses-->
					</div>
				</div>

			</div>
			<!-- container -->

		</div>
		<!-- /Courses -->

		<!-- Call To Action -->
		<div id="cta" class="section">

			<!-- Backgound Image -->
			<div class="bg-image bg-parallax overlay cta-image cta-bg"></div>
			<!-- /Backgound Image -->

			<!-- container -->
			<div class="container">

				<!-- row -->
				<div class="row">

					<div class="col-md-8">
						<h2 class="white-text">Agile Training.</h2>
						<p class="lead white-text">Agile training is a way to improve project performance by teaching the basic concepts of Agile to an organization or team and how to implement it. ... Training can help expose the underlying Agile concepts and clarify the differences between the various implementation methods..</p>
					<router-link :to = "{ name:'Signin' }">
					<a class="main-button icon-button" href="#">Get Started!</a>
					</router-link>
					</div>

				</div>
				<!-- /row -->

			</div>
			<!-- /container -->

		</div>
		<!-- /Call To Action -->

		<!-- Why us -->
		<div id="why-us" class="section">

			<!-- container -->
			<div class="container">

				<!-- row -->
				<div class="row">

				</div>
				<!-- /row -->

				<hr class="section-hr">

				<!-- row -->
				<div class="row">

					<div class="col-md-6">
						<h2>WHY LITT LMS...</h2>
						<!--p class="lead">Libris vivendo eloquentiam ex ius, nec id splendide abhorreant.-->
						<p>In everything we do, what we care about is making human lives better through continuous personal growth and we believe together we can drive it through the LITT LMS.</p>
					</div>

					<div class="col-md-5 col-md-offset-1">
						<object data="https://www.youtube.com/embed/6mv_18Yftt8" width="560" height="315"></object>
					</div>

				</div>
				<!-- /row -->

			</div>
			<!-- /container -->

		</div>
		<!-- /Why us -->

		<!-- Contact CTA -->
		<div id="contact-cta" class="section contact-container">

			<!-- Backgound Image -->
			<div class="bg-image bg-parallax overlay cta2-image"></div>
			<!-- Backgound Image -->

			<!-- container -->
			<div class="container">

				<!-- row -->
				<div class="row">

					<div class="col-md-8 col-md-offset-2 text-center">
						<!--h2 class="white-text" onclick="location.href='https:leanicontechnology.com/'"></h2>>Contact Us</h2>
						
						<!-p class="lead white-text">Libris vivendo eloquentiam ex ius, nec id splendide abhorreant.-->
						<a class="main-button icon-button" href="https://leanicontechnology.com/">Contact Us Now</a>
					</div>

				</div>
				<!-- /row -->

			</div>
		</div>	
		<Footer></Footer>
	</div>
</template>

<script>
import Footer from '@/components/Footer.vue'
// import Navbar from '@/components/Navbar.vue'
export default {
	name: 'Landingpage',
	components :{
		Footer ,
		// Navbar
	},
}

</script>
<style scoped>
@import url("https://fonts.googleapis.com/css?family=Lato:700%7CMontserrat:400,600");

.hero-lead{
	font-size: 20px;
}

.hero-content{
	text-align: center;
}

button {
	position:absolute;
	top:50%;
	left:50%;
	transform:translate(-50%,-50%);
	padding:15px;
	font-size:18px;
	border:2px solid #222;
	color:#222;
	text-transform:uppercase;
	font-weight:600;
	background:#fff;
}

body {
    font-family: 'Montserrat', sans-serif;
	font-size: 15px;
    font-weight: 400;
    color: rgb(255, 255, 255);
	overflow-x:hidden;
}

h1,h2,h3,h4,h5,h6 {
	margin-top: 12px;
	margin-bottom: 15px;
	font-weight: 600;
	color: #3D3D3D;
}

h1 {
	font-size:38px;
}

h2 {
	font-size:30px;
}

h3 {
	font-size:24px;
}

h4 {
	font-size:18px;
}

a {
	font-family: 'Lato', sans-serif;
	color: #3D3D3D;
	font-weight: 700;
}

a:hover,
a:focus{
    text-decoration: none;
    outline: none;
	color: #3D3D3D;
	opacity: 0.9;
}

ul,ol{
    margin: 0;
    padding: 0;
    list-style: none
}

.white-text {
	color: #FFF;
}

/* --- Section --- */
.section {
	position:relative;
	padding-top:80px;
	padding-bottom:80px;
	background-color: white;
}

.section-hr {
	margin-top:80px;
	margin-bottom:80px;
	border-color: #EBEBEB;
}

.section-header {
	margin-bottom:40px;
}

/* --- Background Image --- */
.home-bg{
	background-image:url(../../assets/homebg.jpg);
}

.cta-bg{
	background-image:url(https://res.cloudinary.com/littlms/image/upload/c_scale,h_3053,q_64/v1599265732/image%20sources%20litt/cta1-background.46df1642_ix6yzd.webp);
}

.cta2-image{
	background-image:url(https://res.cloudinary.com/littlms/image/upload/c_scale,h_672,q_68/v1599265731/image%20sources%20litt/cta2-background.163a5ec7_brwxei.webp);
}

.bg-image {
	position:absolute;
	left:0;
	right:0;
	top:0;
	bottom:0;
	background-position:center;
	background-size:cover;
}

.bg-image.bg-parallax {
	background-attachment:fixed;
}

.bg-image.overlay:after {
	content:"";
	position:absolute;
	left:0;
	right:0;
	top:0;
	bottom:0;
	background-image: -webkit-gradient(linear, left top, left bottom, from(#3D3D3D), to(#798696));
	background-image: linear-gradient(to bottom, #3D3D3D 0%, #798696 100%);
	opacity: 0.7;
}

/* --- Buttons --- */
.main-button {
	position:relative;
	display:inline-block;
	padding:10px 30px;
	background: rgba(190,30,45,255);
	border: 2px solid transparent;
	border-radius: 40px;
	color: #FFF;
	-webkit-transition:0.1s all;
	transition:0.1s all;
}

.main-button:hover , .main-button:focus {
	background-color: rgb(134, 15, 15);
	color: #fff;
}

.main-button.icon-button:hover , .main-button.icon-button:focus {
	padding-right: 47px;
}

.main-button.icon-button:after {
	content:"\f178";
	font-family:FontAwesome;
	position:absolute;
	width: 30px;
	right: 15px;
	text-align:center;
	opacity:0;
	-webkit-transition:0.2s all;
	transition:0.2s all;
}

.main-button.icon-button:hover:after , .main-button.icon-button:focus:after {
	opacity:1;
}

/*------------------------------------*\
	Hero Area
\*------------------------------------*/
.hero-area {
	position:relative;
	padding-top: 80px;
	padding-bottom: 80px;
}

#home.hero-area {
	height:calc(100vh - 80px);
	padding-top: 0px;
	padding-bottom: 0px;
}

.home-wrapper {
	position:absolute;
	top:50%;
	-webkit-transform:translateY(-50%);
	-ms-transform:translateY(-50%);
   transform:translateY(-50%);
	left:0;
	right:0;
}

.feature {
	position:relative;
}

.feature + .feature  {
	margin-top:40px;
}

.feature .feature-icon {
	position:absolute;
	left:0;
	top:0;
	width:80px;
	height:80px;
	line-height:80px;
	text-align:center;
	border-radius: 50%;
	font-size:30px;
	border:1px solid #EBEBEB;
	color:rgba(190,30,45,255);
}

.feature-content {
	padding-left:100px;
}

/* -- About Img -- */
.about-img {
	margin-top:40px;
}

.about-img > img {
	width:100%;
}


/*------------------------------------*\
	Courses
\*------------------------------------*/
.course {
	margin-top:20px;
	margin-bottom:20px;
}

.course .course-img {
	position: relative;
	display:block;
	margin-bottom:20px;
	border-radius:4px;
	overflow:hidden;
}

.course .course-img > img {
	width:100%;
}

.course-img:after {
	content:"";
	position:absolute;
	left:0;
	right:0;
	bottom:0;
	top:0;
	background-color:rgba(190,30,45,255);
	opacity:0;
	-webkit-transition:0.2s opacity;
	transition:0.2s opacity;
}

.course .course-img:hover:after {
	opacity:0.7;
}

.course .course-img .course-link-icon {
	position:absolute;
	left:50%;
	top:50%;
	-webkit-transform: translate(-50% , calc(-50% - 15px));
	-ms-transform: translate(-50% , calc(-50% - 15px));
	transform: translate(-50% , calc(-50% - 15px));
	width:40px;
	height:40px;
	line-height:40px;
	text-align:center;
	border:2px solid #fff;
	color:#fff;
	border-radius:50%;
	opacity:0;
	z-index:10;
	-webkit-transition:0.2s all;
	transition:0.2s all;
}

.course .course-img:hover .course-link-icon {
	-webkit-transform: translate(-50% , -50%);
	-ms-transform: translate(-50% , -50%);
	transform: translate(-50% , -50%);
	opacity:1;
}

.course .course-title {
	display:block;
	height:42px;
}

.course .course-details {
	margin-top: 20px;
	padding-top: 10px;
	border-top: 1px solid #EBEBEB;
}

.course .course-details .course-price {
	float: right;
}

.course .course-details .course-price.course-free {
	color: green;
}

.course .course-details .course-price.course-premium {
	color: rgba(190,30,45,255);
}

#courses .center-btn {
	text-align:center;
	margin-top:40px;
}

/*------------------------------------*\
	Responsive
\*------------------------------------*/
@media only screen and (max-width: 991px) {
	.section-header h2 {
		font-size:24px;
	}

	/*-- Why us --*/
	#why-us .feature {
		margin-top:40px;
	}
	
	.about-video {
		margin-top:40px;
	}
	
	/*-- Call to action --*/
	#cta {
		text-align:center;
	}
}

@media only screen and (max-width: 767px) {
	/*-- Hero area --*/
	.hero-area h1 {
		font-size:30px;
	}
}

@media only screen and (max-width: 480px) {
	/*-- Courses --*/
	#courses-wrapper [class*='col-xs'] {
		width:100%;
	}
}

</style>