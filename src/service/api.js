/*
 * @Description:
 * @Author: CoolSnow (coolsnow2020@gmail.com)
 * @Date: 2020-09-14 17:46:51
 * @LastEditors: CoolSnow
 * @LastEditTime: 2020-09-14 17:47:01
 */
import request from "@/service";

export const hello = (params, opts) =>
  request.get("hello", { params, ...opts });
