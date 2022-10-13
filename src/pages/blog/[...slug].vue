<template>
  <main>
    <ui-Header/>
  <article class="prose lg:prose-xl container mx-auto max-w-3xl p-8 flex-grow">
    <NuxtLayout :name="layout">
      <h1>{{data.title}}</h1>
      <em>{{ data.gitCreatedAt }}</em>

      

      <ContentDoc />

      <hr>

      <!-- content author component -->
      


    </NuxtLayout>
    <ul class="flex list-none">
      <li v-for="tag in data.tags" class="mx-2">
        <NuxtLink :to="`/tags/${tag}`" class="text-sm">{{ tag }}</NuxtLink>
      </li>
    </ul>
  </article>
  
  <author :author="data.author" class="container mx-auto max-w-3xl" />
  </main>
</template>

<script setup>
// layouts/custom.vue
const layout = 'other'
const { path } = useRoute()

const { data } = await useAsyncData(`content-${path}`, () => {
  return queryContent().where({ _path: path }).findOne()
})


function formatDate(date) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  return new Date(date).toLocaleDateString('fr', options)
}
  
</script>