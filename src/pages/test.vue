<script setup lang="ts">
  const articles = await queryContent('blog').sort({ date: -1 }).find()
</script>

<template>
  <main>
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