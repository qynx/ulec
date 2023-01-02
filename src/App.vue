<script lang="ts" setup>
import { ElMessage } from 'element-plus'
import TimeToolList from './components/TimeToolList.vue'


function fuckYou() {
    console.log("clicked")
    ElMessage("gg")
}

</script>

<template>
  <div class="div">
   <TimeToolList />
  </div>
</template>

<style scoped>
.div {
  margin: 2rem;
}
</style>
