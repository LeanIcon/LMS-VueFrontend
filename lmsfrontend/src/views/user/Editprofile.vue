<template>
    <div class="editprofile">
        <div class="mobileNav">
            <MobileNav/>
        </div>
         <router-link to="/editprofile"></router-link>
      <router-view/>
            <div class="container rounded bg-white mt-1 mb-5">
        <form v-on:submit.prevent="updateProfile"  method="POST">
        <div class="row">
            <div class="col-md-3 border-right">
                <div class="d-flex flex-column align-items-center text-center p-3 py-5"><img class="rounded-circle mt-5" style="width:150px; height:150px" src="https://leanicontechnology.co.uk/wp-content/uploads/2020/03/UK-lOGO-01-01.png"><span class="font-weight-bold"></span><span class="text-black-50"></span><span> </span></div>
            </div>
            <div class="col-md-5 border-right">
                <div class="p-3 py-5">
                    <div class="d-flex justify-content-between align-items-center mb-3">
                        <h4 class="text-right">Edit Profile</h4>
                    </div>
                    <div class="row mt-3">
                        <div class="col-md-12"><label class="labels">Phone Number</label><input type="text" class="form-control" placeholder="enter phone number" v-model="profileData.phone"></div>
                        <div class="comment-area col-md-12"><label class="labels">Bio</label> <textarea class="form-control" placeholder="Tell us about you" rows="6"  v-model="profileData.bio"></textarea> </div>
                        <div class="col-md-12"><label class="labels">Education</label><input type="text" class="form-control" placeholder="education" v-model="profileData.education"></div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-md-6"><label class="labels">Country</label><input type="text" class="form-control" placeholder="country" value="" v-model="profileData.location"></div>
                        <div class="col-md-6"><label class="labels">State/Region</label><input type="text" class="form-control" value="" placeholder="state" v-model="profileData.state_region"></div>
                    </div>
                    <div class="form-submit" v-on:submit.prevent="updateProfile" >
                        <input type="submit" name="submit" id="submit" class="btn btn-primary profile-button" v-on:submit.prevent="updateProfile" value="Save Profile"/>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="p-3 py-5">
                    <div class="d-flex justify-content-between align-items-center experience"><span>Edit Social</span></div><br>
                    <div class="col-md-12"><label class="labels">LinkedIn</label><input type="text" class="form-control" placeholder="linkedin profile" v-model="profileData.linkedIn_address"></div> <br>
                    <div class="col-md-12"><label class="labels">FaceBook</label><input type="text" class="form-control" placeholder="facebook profile" v-model="profileData.facebook_address"></div>
                </div>
                <div class="p-3 py-5">
                    <div class="d-flex justify-content-between align-items-center experience"><span>Edit Experience</span></div><br>
                    <div class="col-md-12"><label class="labels">Profession</label><input type="text" class="form-control" placeholder="profession" v-model="profileData.profession"></div> <br>
                    <div class="col-md-12"><label class="labels">Additional Details</label><input type="text" class="form-control" placeholder="additional details" v-model="profileData.profession_info"></div>
                </div>
            </div>
        </div>
        </form>
    </div>

    </div>
</template>

<script>
import MobileNav from '@/components/Dashboard/MobileNav.vue'
// import { getAPI } from '../../utils/axios-api';
// // import { mapState } from 'vuex';
// const token = localStorage.getItem('access_token');
export default {
    name: 'Editprofile',
    data () {
    return {
        avatar_url: '',
        bio: '', 
        phone: '',
        profession: '',
        profession_info: '', 
        education: '', 
        location : '',
        state_region: '', 
        linkedIn_address : '',
        facebook_address: '',
        submitted: false,
        profileData: this.$store.state.userprofile.profileData,
      }
    },
    components:{
        MobileNav
    },
    // created() {
    //     // GET request using axios with error handling
    //     getAPI.get("/api/users/profile/74/", { headers: { Authorization: `Bearer ${ token }`} } )
    //         .then(response => this.profileData = response.data)
    //         .catch(error => {
    //             console.error("There was an error!", error);
    //     });
    // },
    methods: {
        updateProfile() {
            this.$store.dispatch('userProfile', {
                avatar_url: this.profileData.avatar_url,
                bio: this.profileData.bio, 
                phone: this.profileData.phone,
                profession: this.profileData.profession,
                profession_info: this.profileData.profession_info, 
                education: this.profileData.education,
                location : this.profileData.location,
                state_region: this.profileData.state_region, 
                linkedIn_address : this.profileData.linkedIn_address,
                facebook_address:this.profileData.facebook_address,
                
            })
                

             //Replace '/' with the homepage
            .then(({ status }) => {
                console.log('check your email')
                console.log(status)
            this.$store.dispatch('fetchProfile')
            })
            .catch(err => {
                this.errinfo = 'Email is already registered'
                console.log(err)
                this.userExists = true
                this.alertUser = true
        })
        },
    },
    // computed: mapState(['profileData']),
}
</script>

<style scoped>
.form-control:focus {
    box-shadow: none;
    border-color: #f44336
}

.profile-button {
    background: #f44336;
    box-shadow: none;
    border: none
}

.profile-button:hover {
    background: #d4352a
}

.profile-button:focus {
    background: #f44336;
    box-shadow: none
}

.profile-button:active {
    background: #f44336;
    box-shadow: none
}

.back:hover {
    color: #f44336;
    cursor: pointer
}

.labels {
    font-size: 11px
}

.add-experience:hover {
    background: #f44336;
    color: #fff;
    cursor: pointer;
    border: solid 1px #f44336;
}

.mobileNav{
    display: none;
}



@media screen and (max-width: 754px) {
    .mobileNav{
        display: initial;
    }
}
</style>