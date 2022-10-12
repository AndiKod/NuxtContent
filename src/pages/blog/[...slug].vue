<template>
  <main>
    <NuxtLayout :name="layout">
      <h2>{{data.title}}</h2>
      <ContentDoc />
    </NuxtLayout>
  </main>
</template>

<script setup>
// layouts/custom.vue
const layout = 'other'
const { path } = useRoute()
const { data } = await useAsyncData(`content-${path}`, () => {
  return queryContent().where({ _path: path }).findOne()
})
</script>