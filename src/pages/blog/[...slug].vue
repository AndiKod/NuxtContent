<template>
  <ui-Header/>
  <article class="prose lg:prose-xl container mx-auto max-w-3xl p-8 flex-grow">
    <NuxtLayout :name="layout">
      <h1>{{data.title}}</h1>
      <ContentDoc />
    </NuxtLayout>
  </article>
</template>

<script setup>
// layouts/custom.vue
const layout = 'other'
const { path } = useRoute()
const { data } = await useAsyncData(`content-${path}`, () => {
  return queryContent().where({ _path: path }).findOne()
})
</script>