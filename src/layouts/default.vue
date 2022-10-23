<template>
  <div class=".once">  
      <slot/>
  </div>
</template>

<script setup lang="ts">

definePageMeta({
  middleware: ['auth']
})


useHead({
  title: "NuxtCont",
  script: [
    {
      src: 'https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js',
      defer: true
    }
  ]
})


</script>