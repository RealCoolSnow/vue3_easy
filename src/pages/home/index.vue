<!--
 * @Description: 
 * @Author: CoolSnow (coolsnow2020@gmail.com)
 * @Date: 2020-09-15 12:20:22
 * @LastEditors: CoolSnow
 * @LastEditTime: 2020-09-15 14:49:21
-->
<template>
  <div class="home">
    {{ lang }} - {{ $t("route.home") }}
  </div>
</template>
<script>
import {
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
  onActivated,
  onDeactivated,
  onErrorCaptured,
  inject
} from "vue"
import Symbols from "@/provide/symbols"
export default {
  name: "Home",
  setup() {
    onBeforeMount(() => {
      console.log("onBeforeMount")
    })
    onMounted(() => {
      console.log("onMounted")
    })
    onBeforeUpdate(() => {
      console.log("onBeforeUpdate")
    })
    onUpdated(() => {
      console.log("onUpdated")
    })
    onBeforeUnmount(() => {
      console.log("onBeforeUnmount")
    })
    onUnmounted(() => {
      console.log("onUnmounted")
    })
    onActivated(() => {
      console.log("onActivated")
    })
    onDeactivated(() => {
      console.log("onDeactivated")
    })
    onErrorCaptured(() => {
      console.log("onErrorCaptured")
    })
    const lang = inject(Symbols.lang)
    return { lang }
  }
}
</script>
