
<template>
  <div>
    <ui-Header />
    <main class="prose lg:prose-xl container mx-auto max-w-3xl p-8 flex-grow">
    <h2>Articles</h2>
    <ul>
      <li v-for="article in articles">

        <h3>
          <NuxtLink :to="article._path">{{ article.title }}</NuxtLink>
        </h3>
        <ul class="flex list-none">
          <li v-for="tag in article.tags" class="mw-2">
            <NuxtLink :to="`/tags/${tag}`" class="text-sm">{{ tag }}</NuxtLink>
          </li>
        </ul>

      </li>
    </ul>



   <h4 x-data="{ message: 'I ❤️ Alpine' }" x-text="message"></h4>



  </main>
  </div>
  
</template>

<script setup lang="ts">
  const articles = await queryContent('blog')
                  .sort({ createdAt: -1 })
                  .find()
  const tags = await queryContent('tags')
              .only(['name', 'description', 'img', 'slug', '_path'])
              .sort({createdAt: 1})
              .find()                  
</script>