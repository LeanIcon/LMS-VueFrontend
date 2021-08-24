<template>
    <section class="container">
        <div class="hero-2">
            <h4 class="c1 text-center">{{ title }}</h4>
            <p>{{ title_info }}</p>
            <div class="row flex-row flex-nowrap">
                <div class="col-md-4">
                    <div class="card course-card">
                        <img class="card-img-top" src="@/assets/images/display-image (3).png" alt="Card image cap">
                        <div class="card-body">
                            <img src="@/assets/images/quizlogo.png" class="course-logo">
                            <div class="card-body row">
                                <h6 class="course-title text-left col-8">Practical Business Analysis</h6>
                                <div class="save-course col-4">
                                    <i class="fas fa-bookmark"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card course-card">
                        <img class="card-img-top" src="@/assets/images/display-image (1).png" alt="Card image cap">
                        <div class="card-body">
                            <img src="@/assets/images/quizlogo2.png" class="course-logo">
                            <div class="card-body row">
                                <h6 class="course-title text-left col-8">Requirement Engineering</h6>
                                <div class="save-course col-4">
                                    <i class="fas fa-bookmark"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card course-card">
                        <img class="card-img-top" src="@/assets/images/display-image (2).png" alt="Card image cap">
                        <div class="card-body">
                            <img src="@/assets/images/quizlogo1.png" class="course-logo">
                            <div class="card-body row">
                                <h6 class="course-title text-left col-8">Agile Scrumn Foundation</h6>
                                <div class="save-course col-4">
                                    <i class="fas fa-bookmark"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'TrendingCourses',
    props: [
        'title',
        'title_info'
    ]

}
</script>

<style scoped>

.section-2{
    background-color: rgba(158, 0, 10, 0.02);
}

.card{
    border: none;
    border-radius: 16px;
    filter: drop-shadow(0px 16px 16px rgba(50, 50, 71, 0.08)) drop-shadow(0px 24px 32px rgba(50, 50, 71, 0.08));
}

.course-card{
    width: 270px;
    height: 280px;
}

.c1{
    line-height: 30px;
}

.card-body{
    padding: 10px;
}

.save-course{
    margin: auto;
}

.save-course svg{
    color: rgba(180, 180, 183, 1);
    font-size: 25px;
}

.course-logo{
    width: 119px;
    height: 119px;
    margin-top: -71px;
    margin-left: 125px;
}

.card-img-top{
    height: 45%;
    border-radius: 16px 16px 0 0;
}

</style>