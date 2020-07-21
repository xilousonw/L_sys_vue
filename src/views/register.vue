<template>
 <div id="register">
        用户名：<input type="text" v-model="username">
        密码：<input type="password" v-model="password">
        再次输入：<input type="password" v-model="re_password">
        手机号<input type="text" v-model="mobile">

        <button @click="register">注册</button>

   </div>
</template>

<script>
import axios from 'axios'

    export default {
        name: "register",
        // ContentType:application/json,
        data:function () {
          return{
                username:"",
                password:"",
                mobile:"",
                re_password:""
          }
        },
        methods:{
                  register(){
                      axios.post("http://127.0.0.1:8008/api/register/",
                        {
                          "username":this.username,
                          "password":this.password,
                          "mobile":this.mobile,
                          "re_password":this.re_password,
                        })
                          .then(response=>{
                              console.log(response.data);
                          }).catch(error=>{
                              console.log(error.response)
                      });

                  }
              }
    }
</script>

<style scoped>

</style>

