<template>
  <div class="course-card">
    <div class="course-image">
      <img src="@/assets/images/home/coursecard.png" alt="courseimage" />
      <div class="course-logo">
        <img src="@/assets/images/home/courselogo.png" alt="" />
      </div>
    </div>

    <div class="course-details">
      <div class="names">
        <i class="fa fa-star-o" aria-hidden="true"></i>
        <i class="fa fa-star-o" aria-hidden="true"></i>
        <i class="fa fa-star-o" aria-hidden="true"></i>
        <i class="fa fa-star-o" aria-hidden="true"></i>
        <i class="fa fa-star-o" aria-hidden="true"></i>
        <p class="course-name">
          Agile Scrum <br />
          Fundamentals
        </p>
        <p class="tutor">By <span>Francis Otumahana</span></p>
      </div>
      <div class="price-and-participant">
        <div class="participants">
          <i class="fa fa-users-o" aria-hidden="true"></i> 2355
        </div>
        <div class="price">$1500</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CourseCard",
};
</script>

<style scoped>
.course-card {
  min-height: 440px;
  width: 350px;
  border-radius: 10px;
  box-shadow: 0px 3px 22px rgba(177, 23, 34, 0.12);
  background: #fff;
}

.course-image {
  position: relative;
  height: 240px;
  width: 350px;
}

.course-image img {
  width: 100%;
  height: 100%;
  border-radius: 10px 10px 0 0;
}

.course-logo {
  position: absolute;
  right: 20px;
  bottom: 0;
  transform: translateY(50%);
  width: 80px;
  background: #fff;
  border-radius: 50%;
}

.course-logo img {
  width: 100%;
}

.course-details {
  padding: 10px;
  padding-bottom: 0;
  justify-content: space-between;
  display: flex;

  flex-direction: column;
  height: 200px;
  width: 350px;
}

.course-name {
  font-size: 22px;
  font-weight: 600;
}

.tutor {
  font-size: 14px;
}

.price-and-participant {
  display: flex;
  padding: 5px;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  /* position: absolute; */
  bottom: 0;
  font-size: 14px;
}

.participants {
  vertical-align: bottom;
}

.participants svg {
  font-size: 16px;
}
</style>