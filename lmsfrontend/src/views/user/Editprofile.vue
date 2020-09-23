<template>
    <div class="editprofile">
         <router-link to="/editprofile"></router-link>
      <router-view/>
            <div class="container rounded bg-white mt-1 mb-5">
        <div class="row">
            <div class="col-md-3 border-right">
                <div class="d-flex flex-column align-items-center text-center p-3 py-5"><img class="rounded-circle mt-5" style="width='50px' height='50px'" src="@/assets/logo.png"><span class="font-weight-bold">Amelly</span><span class="text-black-50">amelly12@bbb.com</span><span> </span></div>
            </div>
            <div class="col-md-5 border-right">
                <div class="p-3 py-5">
                    <div class="d-flex justify-content-between align-items-center mb-3">
                        <h4 class="text-right">Profile Settings</h4>
                    </div>
                    <div class="row mt-2">
                        <div class="col-md-6"><label class="labels">Name</label><input type="text" class="form-control" placeholder="first name" value=""></div>
                        <div class="col-md-6"><label class="labels">Surname</label><input type="text" class="form-control" value="" placeholder="surname"></div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-md-12"><label class="labels">PhoneNumber</label><input type="text" class="form-control" placeholder="enter phone number" value=""></div>
                        <div class="comment-area col-md-12"><label class="labels">Bio</label> <textarea class="form-control" placeholder="Tell us about you" rows="6"></textarea> </div>
                        <div class="col-md-12"><label class="labels">Education</label><input type="text" class="form-control" placeholder="education" value=""></div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-md-6"><label class="labels">Country</label><input type="text" class="form-control" placeholder="country" value=""></div>
                        <div class="col-md-6"><label class="labels">State/Region</label><input type="text" class="form-control" value="" placeholder="state"></div>
                    </div>
                    <div class="mt-5 text-center"><button class="btn btn-primary profile-button" type="button">Save Profile</button></div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="p-3 py-5">
                    <div class="d-flex justify-content-between align-items-center experience"><span>Edit Social</span></div><br>
                    <div class="col-md-12"><label class="labels">LinkedIn</label><input type="text" class="form-control" placeholder="linkedin profile" value=""></div> <br>
                    <div class="col-md-12"><label class="labels">FaceBook</label><input type="text" class="form-control" placeholder="facebook profile" value=""></div>
                </div>
                <div class="p-3 py-5">
                    <div class="d-flex justify-content-between align-items-center experience"><span>Edit Experience</span></div><br>
                    <div class="col-md-12"><label class="labels">Profession</label><input type="text" class="form-control" placeholder="profession" value=""></div> <br>
                    <div class="col-md-12"><label class="labels">Additional Details</label><input type="text" class="form-control" placeholder="additional details" value=""></div>
                </div>
            </div>
        </div>
    </div>

    </div>
</template>

<script>
export default {
    name: 'Editprofile',
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
    background: #f44336
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
</style>