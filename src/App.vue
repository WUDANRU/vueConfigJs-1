<template>
<div id="app">
  <div>吴鑫甫</div>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import axios from 'axios'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
    created() {
    // 1. 代理成功
    // https://api.taobao.cn/users/proxy 转换成 http://localhost:2021/api/users/proxy 
    // axios.get('/api/users/proxy').then(res => { // /api 不能少
    //   console.log(res,'ddd')
    // })
    axios.get('/api2/carts').then((res)=>{// /api 不能少
      console.log(res,'ffffff')
    })
  },
  mounted(){
    console.log(process.env.NODE_ENV,'dddddd') //main.js可以查看
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
