<!--
 * @Description: 

 * @Author: CoolSnow (coolsnow2020@gmail.com)
 * @Date: 2020-09-14 16:19:45
 * @LastEditors: CoolSnow
 * @LastEditTime: 2020-09-15 15:02:19
-->
<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view />
</template>
<script>
import { setProvide } from "@/provide";
export default {
  setup() {
    setProvide();
  }
};
</script>
<style lang="less"></style>
