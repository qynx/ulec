<script setup lang="ts">
import moment from 'moment';
import { ref } from 'vue'

const doConvert = function(input:string) {
  if (input.length === 0) {
      return "输入为空"
  }

  
  if (/^\d+$/.test(input))  {
    var timestamp = parseInt(input)
    if (input.length == 10) {
      timestamp = timestamp * 1000
    } else if (input.length != 13) {
      return "无效时间戳长度"
    }
    let date = moment(timestamp)
    return date.format("YYYY-MM-DD HH:mm:ss")
  }

  let m = moment(input)
  if (m.isValid()) {
    console.log(m.format())
    return m.toDate().getTime().toString()
  } else {
    return "invalid date format"
  }
}

const currTime = new Date().getTime()
const input = ref(currTime.toString())
let output:any = ref(doConvert(input.value)); 


const convert = function(_:string) {
  output.value = doConvert(input.value)
}
</script>
<template>
<div>
    <arco-space>
        <arco-input class="input" @input="convert" v-model="input" placeholder="输入时间"></arco-input>
        <arco-input class="input" v-model="output" placeholder="结果展示在这里"></arco-input>
    </arco-space>
  </div>
</template>
<style scoped>
.input {
}
</style>