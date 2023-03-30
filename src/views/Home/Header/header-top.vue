<template>
  <div class="header-top">
    <div class="container">
      <div class="left">
        <router-link class="link" to="#">登录</router-link>
        /
        <router-link class="link" to="#">注册</router-link>
        <router-link class="link" to="#">全球站</router-link>
      </div>
      <ul class="right">
        <router-link class="link" to="#">首页</router-link>
        <router-link class="link" to="#">购物车</router-link>
        <router-link class="link" to="#">个人中心</router-link>
        <router-link class="link" to="#">我的订单</router-link>
        <router-link class="link" to="#">手机版</router-link>
        <router-link class="link" to="#">帮助中心</router-link>
        <router-link class="link" to="#">快捷入口</router-link>
        <router-link class="link" to="#">币种</router-link>
        <router-link class="link" to="#">简体中文</router-link>
      </ul>
    </div>
  </div>
</template>
    

<script setup lang="ts">
</script>
      
<style lang="less" scoped>
.header-top {
  background: #eee;
  height: 34px;
  line-height: 34px;
  border-bottom: 1px solid #f3f3f0;
  padding: 0 128px;

  .link {
    font-size: 13px;
    color: #727272;
    padding: 0 8px;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: red;
    }
  }

  .left {
    float: left;
  }
  .right {
    float: right;
    padding-right: 10px;
  }
}
</style>
      