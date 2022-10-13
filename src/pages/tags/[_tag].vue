<template>
  <div>
    <ui-Header />
    <main class="prose lg:prose-xl container mx-auto max-w-3xl p-8 flex-grow">
    <h2>{{ tag.name }}</h2>
    <p>{{ tag.description }}</p>  

    <ul>
      <li v-for="article in articles">

        <h3>
          <NuxtLink :to="article._path">{{ article.title }}</NuxtLink>
        </h3>

      </li>
    </ul>

    <hr>






  </main>
  </div>
  
</template>

<script setup lang="ts">


const route = useRoute()
// When accessing /posts/1, route.params.id will be 1
console.log(route.params._tag)




  const tags = await queryContent('tags')
               .where({ name: { $contains: route.params._tag } })
               .limit(1)
               .find() 
  const tag = tags.length > 0 ? tags[0] : {}
          

  const articles = await queryContent('blog')
                  .where({ tags: { $contains: route.params._tag } })
                  .sort({ createdAt: -1 })
                  .find()


</script>
