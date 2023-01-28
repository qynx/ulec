<script setup lang="ts">
import md5 from 'js-md5'
import { ref } from 'vue'


const doMd5 = function(str:string) {
    if (!str) {
        return str;
    }
    let m = md5.create()
    m.update(str)
    return m.hex()
}



const md5_origin = ref("")
const md5_ouput = ref("")

const model_md5 = function(_:string) {
    md5_ouput.value = doMd5(md5_origin.value)
}

</script>
<template>

<div>
    <arco-space>
        <span>md5</span>
        <arco-input v-model="md5_origin" @input="model_md5" placeholder="原文"></arco-input>
        <div contenteditable="true" class="md5_ouput" placeholder="密文">{{ md5_ouput }}</div>
    </arco-space>
</div>
</template>

<style scoped>
.md5_ouput {
    padding: 3px 3px;
    max-width: 300px;
    min-width: 180px;
    border: solid;
    border-width: 0.5px;
    border-radius: 2px;
    border-color:blue;
}
</style>