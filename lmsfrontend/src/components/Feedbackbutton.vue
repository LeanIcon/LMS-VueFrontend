<template>
  <div>
            <button type="button" class="btn btn-primary btnfeedb" data-toggle="modal" data-target="#form"> Feedback </button>
        <div class="modal fade" id="form" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="text-right cross">
                        <i class="fa fa-times mr-2" href="btn btn-outline-primary" data-dismiss="modal"></i> 
                    </div>
                    <div class="card-body text-center"> <img src="../assets/GH-01.png" height="100" width="100">
                        <div class="comment-box text-center">
                            <h6>How would you rate your experience using LittLMS</h6>
                            <form id="feedback-form" v-on:submit.prevent="feedback">
                                <div class="rating">
                                    <input type="radio" name="rating" value="5" id="5" v-model="rating">
                                    <label for="5">☆</label>
                                    <input type="radio" name="rating" value="4" id="4" v-model="rating">
                                    <label for="4">☆</label> 
                                    <input type="radio" name="rating" value="3" id="3" v-model="rating">
                                    <label for="3">☆</label> 
                                    <input type="radio" name="rating" value="2" id="2" v-model="rating">
                                    <label for="2">☆</label> 
                                    <input type="radio" name="rating" value="1" id="1" v-model="rating">
                                    <label for="1">☆</label>
                                </div>
                            <!-- <h6>What can we do better? Details help</h6> -->
                                <div class="comment-area"> <textarea class="form-control" placeholder="Did you enjoy the course? Share your feedback" rows="4" v-model="message"></textarea> </div>
                            </form>
                            <!-- <div class="text-center mt-4"> <button class="btn btn-success send px-5">Submit <i class="fa fa-long-arrow-right ml-1"></i></button></a> <a href="" class="btn btn-outline-primary" data-dismiss="modal">Cancel</a></div> -->
                             <!-- <a href="" class="btn btn-outline-primary" data-dismiss="modal">Cancel</a> </div> -->
                        </div>
                    </div>
                <button class="text-center mt-2 btn btn-primary feedbtn" type="submit" form="feedback-form" style="width:150px;" data-dismiss="modal">Submit</button>
                
                </div>
            </div>
        </div>
            
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'Feedbackbutton',
  component:{
	Navbar,
  Footer
  },
    data () {
        return {
            message: '',
            rating: '',
            course: '',
        }
        },
        methods:{
            feedback() { 
                this.$store.dispatch('userFeedback', {
                message: this.message,
                rating: this.rating,
                course: 1,
                })
                .then(({ status }) => {
                
                console.log(status)
                this.$router.push({ name: 'Coursepage' })
            })
            .catch(err => {
                this.errinfo = 'invalid message'
                console.log(err)
                
            })
            }
        }
  }
</script>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200&display=swap');

    .feedbtn{
        margin: 0 auto;
        margin-bottom: 20px;
        // position:fixed;
    }

    .cross {
        padding: 10px;
        color: #d6312d;
        cursor: pointer;
        font-size: 23px
    }

    .cross i {
        margin-top: -5px;
        cursor: pointer
    }

    .comment-box {
        padding: 5px
    }

    .comment-area textarea {
        resize: none;
        border: 1px solid #ff0000
    }

    .form-control:focus {
        color: #495057;
        background-color: #fff;
        border-color: #ffffff;
        outline: 0;
        box-shadow: 0 0 0 1px rgb(255, 0, 0) !important
    }

    .send {
        color: #fff;
        background-color: #ff0000;
        border-color: #ff0000
    }

    .send:hover {
        color: #fff;
        background-color: #f50202;
        border-color: #f50202
    }

    .rating {
        display: inline-flex;
        margin-top: -10px;
        flex-direction: row-reverse
    }

    .rating>input {
        display: none
    }

    .rating>label {
        position: relative;
        width: 28px;
        font-size: 35px;
        color: #ff0000;
        cursor: pointer
    }

    .rating>label::before {
        content: "\2605";
        position: absolute;
        opacity: 0
    }

    .rating>label:hover:before,
    .rating>label:hover~label:before {
        opacity: 1 !important
    }

    .rating>input:checked~label:before {
        opacity: 1
    }

    .rating:hover>input:checked~label:before {
        opacity: 0.4
    }
    .btnfeedb{
        position:absolute;
        right: 0;
        bottom:0;
        font-size:20px;
        border: none !important;
        transform: rotate(-90deg);
        -moz-transform:rotate(-90deg);
        -ms-transform:rotate(-90deg);
        -o-transform:rotate(-90deg);
        -webkit-transform:rotate(-90deg);
        transform-origin: bottom right;
    }
    .btn:focus,
    .btn:active,
    .btn:hover{
        outline: none !important;
        border: none;
        box-shadow: none;
    }
</style>
