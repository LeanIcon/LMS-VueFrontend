<template>
<div class="signin">
  <router-link to="/signin">Signin</router-link>
    <router-view/>
  <form class="container">
    <div class="form-group ">
      <label for="exampleInputEmail1">Email address</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1">
    </div>
    <button type="submit" class="btn btn-primary">login</button>
    <button type="submit" class="btn btn-primary">Signup</button>
  </form>
</div>
</template>
