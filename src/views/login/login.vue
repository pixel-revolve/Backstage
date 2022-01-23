<template>
<div class="login">
  <div id="login-button">
    <img src="../../assets/image/login/login-w-icon.png">
    </img>
  </div>
  <div id="container">
    <h1>Log In</h1>
    <span class="close-btn">
    <img src="../../assets/image/login/circle_close_delete.png"></img>
  </span>

    <form>
      <input type="email" name="email" placeholder="E-mail" v-model="username">
      <input type="password" name="pass" placeholder="Password" v-model="password">
      <a id="log-in" @click="login">Log in</a>
      <div id="remember-container">
        <input type="checkbox" id="checkbox-2-1" class="checkbox" checked="checked"/>
        <span id="remember">Remember me</span>
<!--        <span id="forgotten">Forgotten password</span>-->
      </div>
    </form>
  </div>

  <!-- Forgotten Password Container -->
  <div id="forgotten-container">
    <h1>Forgotten</h1>
    <span class="close-btn">
    <img src="../../assets/image/login/circle_close_delete.png"></img>
  </span>

    <form>
      <input type="email" name="email" placeholder="E-mail">
      <a href="#" class="orange-btn">Get new password</a>
    </form>
  </div>
</div>

</template>

<script>
import { gsap } from "gsap";
import {TweenMax,Sine} from "gsap";

export default {
  name: "login",
  data(){
    return {
      username: '',
      password: ''
    }
  },
  methods:{
    login: function (){
      if(this.username==="2682538663@qq.com"&&this.password==="123456"){
        alert("登录成功!");
        this.$router.push("/home")
      }else{
        console.log(this.username+" "+this.password)
        alert("账号或密码错误");
      }
    }

  },
  mounted() {
    $('#login-button').click(function(){
      $('#login-button').fadeOut("slow",function(){
        $("#container").fadeIn();
        TweenMax.from("#container", .4, { scale: 0, ease:Sine.easeInOut});
        TweenMax.to("#container", .4, { scale: 1, ease:Sine.easeInOut});
      });
    });

    $(".close-btn").click(function(){
      TweenMax.from("#container", .4, { scale: 1, ease:Sine.easeInOut});
      TweenMax.to("#container", .4, { left:"0px", scale: 0, ease:Sine.easeInOut});
      $("#container, #forgotten-container").fadeOut(800, function(){
        $("#login-button").fadeIn(800);
      });
    });

    /* Forgotten Password */
    $('#forgotten').click(function(){
      $("#container").fadeOut(function(){
        $("#forgotten-container").fadeIn();
      });
    });


  }
}
</script>

<style lang="scss" scoped>

@import "../../assets/css/views/login/login.scss";

</style>