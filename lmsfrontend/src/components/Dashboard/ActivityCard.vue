<template>
    <div class="activity-card">
        <div class="courses-container">
            <div class="course">
                <div class="course-preview">
                    <h6>Course</h6>
                    <h2>Business Analysis</h2>
                    <a href="#">View all modules <i class="fas fa-chevron-right"></i></a>
                </div>
                <div class="course-info">
                    <div class="progress-container">
                        <div class="progress"></div>
                        <span class="progress-text">
                            1/9 Challenges
                        </span>
                    </div>
                    <h6>Module 1</h6>
                    <h2>Introduction to B.A</h2>
                    <button class="btn">Continue</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ActivityCard',
}
</script>

<style scoped>

.courses-container{
    /* z-index: 100; */
    position: relative;
}

.course {
	background-color: #fff;
	border-radius: 10px;
	box-shadow: 0 3px 3px rgba(0, 0, 0, 0.1);
	display: flex;
	max-width: 100%;
	overflow: hidden;
	/* width: 700px; */
}

.course h6 {
	opacity: 0.6;
	margin: 0;
	letter-spacing: 1px;
	text-transform: uppercase;
}

.course h2 {
	letter-spacing: 1px;
	margin: 10px 0;
}

.course-preview {
	background-color: #375066;
	color: #fff;
	padding: 30px;
	max-width: 250px;
}

.course-preview a {
	color: #fff;
	display: inline-block;
	font-size: 12px;
	opacity: 0.6;
	margin-top: 30px;
	text-decoration: none;
}

.course-info {
	padding: 30px;
	position: relative;
	width: 100%;
}

.progress-container {
	position: absolute;
	top: 30px;
	right: 30px;
	text-align: right;
	width: 150px;
}

.progress {
	background-color: #ddd;
	border-radius: 3px;
	height: 5px;
	width: 100%;
}

.progress::after {
	border-radius: 3px;
	background-color: #375066;
	content: '';
	position: absolute;
	top: 0;
	left: 0;
	height: 5px;
	width: 20%;
}

.progress-text {
	font-size: 10px;
	opacity: 0.6;
	letter-spacing: 1px;
}

.btn {
	background-color: #375066;
	border: 0;
	border-radius: 50px;
	box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
	color: #fff;
	font-size: 16px;
	padding: 12px 25px;
	position: absolute;
	bottom: 30px;
	right: 30px;
	letter-spacing: 1px;
}
</style>