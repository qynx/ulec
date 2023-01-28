<script lang="ts" setup>
import { ElMessage } from 'element-plus'
import TimeToolList from './components/TimeToolList.vue'

</script>

<template>
  <div class="div">
      <router-link to="/encode_tool">编码工具</router-link>
      <div class="space"></div>
      <router-link to="/time_tool">时间工具</router-link>
      <router-view></router-view>
  </div>
</template>

<style scoped>
.div {
  margin: 2rem;
}
.space {
  width: 20px;
  display: inline-block;
}
</style>
