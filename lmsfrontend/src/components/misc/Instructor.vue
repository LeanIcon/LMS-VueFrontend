<template>
    <div class="component">
        <div class="row">
            <div class="avatar-img col-3 text-right">
                <img src="@/assets/images/instructor1.png" alt="">
            </div>
            <div class="col- my-auto">
                <p class="ins_name">Daniel Korsinah</p>
                <p class="ins_role">Product Manager, Lean Icon Technology and Traning</p>
                <p class="ins_stats"><b>150</b> learners</p>
                <p class="ins_stats"><b>3</b> Courses</p>
                <!-- <p class="ins_name">Daniel Korsinah</p> -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Instructor"
}
</script>

<style scoped>
.component{
    background-color: #fff;
}

.avatar-img img{
    width: 100px;
}

.ins_name{
    font-size: 20px;
    font-weight: 600;
}

p{
    line-height: 10px;
    margin-bottom: 10px;
}

.ins_role, .ins_stats{
    font-size: 13px;
    /* line-height: 5px; */
    margin-bottom: 10px;
}
</style>