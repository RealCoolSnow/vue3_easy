<!--
 * @Description: 
 * @Author: CoolSnow (coolsnow2020@gmail.com)
 * @Date: 2020-09-15 12:22:07
 * @LastEditors: CoolSnow
 * @LastEditTime: 2020-09-15 14:49:05
-->
<template>
  <div class="about">
    {{ lang }} - {{ $t("route.about") }}
  </div>
</template>
<script>
import { inject } from "vue"

import Symbols from "@/provide/symbols"

export default {
  name: "About",
  setup() {
    const lang = inject(Symbols.lang, "test")
    return { lang }
  }
}
</script>
