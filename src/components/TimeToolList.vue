<script setup lang="ts">
import { InputTag } from '@arco-design/web-vue';
import { ref } from 'vue'
import moment from 'moment'
import TimeTool from './TimeTool.vue'
import { ElMessage } from 'element-plus';

const arrays = ref([1])

const add = function() {
  let lastid = arrays.value[arrays.value.length - 1]
  let newId = lastid + 1
  arrays.value.push(newId)
}

const remove = function(id:number) {
  if (arrays.value.length <= 1) {
    ElMessage({message: "不能删除了", duration: 500})
    return
  }
  let targetIdx = -1;
  for (let idx = 0; idx < arrays.value.length; idx++) {
    if (arrays.value[idx] == id) {
      targetIdx = idx;
    }
  }
  if (targetIdx != -1) {
    arrays.value.splice(targetIdx, 1)
  }
}


</script>

<template>
  <div>
    <arco-space direction="vertical" fill>
    <arco-space v-for="item in arrays" :key="item">
      <span class="span">{{ item }}</span>
      <TimeTool />
      <arco-button type="text" @click="add">add</arco-button>
      <arco-button type="text" @click="remove(item)">
        <template #icon>
        <icon-delete />
      </template>
        remove</arco-button>
    </arco-space>
    </arco-space>
  </div>
</template>

<style scoped>
.span {
  width: 15px;
}
.space {
  width: 10px
}
</style>
