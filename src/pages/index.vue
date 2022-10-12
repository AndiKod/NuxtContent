<script setup lang="ts">
  const articles = await queryContent('blog').sort({ date: -1 }).find()
</script>

<template>
  <main class="prose lg:prose-xl container mx-auto max-w-3xl p-8 flex-grow">
    <h2>Articles</h2>
    <ul>
      <li v-for="article in articles">

        <h3>
          <NuxtLink :to="article._path">{{ article.title }}</NuxtLink>
        </h3>

      </li>
    </ul>

  </main>
</template>