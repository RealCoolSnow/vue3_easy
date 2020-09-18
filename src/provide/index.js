/*
 * @Description:
 * @Author: CoolSnow (coolsnow2020@gmail.com)
 * @Date: 2020-09-14 18:45:15
 * @LastEditors: CoolSnow
 * @LastEditTime: 2020-09-15 12:18:17
 */
import { provide } from "vue"
import Symbols from "@/provide/symbols"
import { getLanguage } from "@/locale"

function setProvide() {
  provide(Symbols.lang, getLanguage())
}
export { setProvide }
