<template>
  <div class="card-layer" style="position: relative">
    <div class="cut-out" style="background: #473028"></div>
    <div class="card testimonial-card text-center">
      <img src="@/assets/images/user3.png" class="avatar" />
      <div class="context">
        <h3 class="author">Jane</h3>
        <p class="info">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis
          vitae asperiores sequi amet temporibus culpa eveniet eos inventore,
          quos placeat?
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TestimonialCard",
};
</script>

<style scoped>
.card {
  border: none;
  border-radius: 16px;
  filter: drop-shadow(0px 16px 16px rgba(50, 50, 71, 0.08))
    drop-shadow(0px 24px 32px rgba(50, 50, 71, 0.08));
}

.testimonial-card {
  align-items: center;
  padding: 0 20px;
  margin: auto;
  height: 330px;
  width: 300px;
}

.cut-out {
  top: 100px;
  left: 1px;
  position: relative;
  margin: auto;
  width: 287px;
  height: 100px;
  border-radius: 14px 14px 0px 0px;
  transform: rotate(4.68deg);
}

.avatar {
  width: 120px;
  height: 120px;
  border-radius: 100px;
  margin-top: -40px;
  border: 2px solid #fdfdfd00;
}

.context {
  margin-top: 1.5rem;
}
</style>