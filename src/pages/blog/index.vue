<script setup lang="ts">

const client = useSupabaseClient()
const user = useSupabaseUser()
const router = useRouter()

watchEffect(() => {
  if (user.value) {
    router.push('/dashboard')
  }
})

console.log('user:'+ user.value)


  const articles = await queryContent('blog')
                  .sort({ createdAt: -1 })
                  .find()
  const tags = await queryContent('tags')
              .only(['name', 'description', 'img', 'slug', '_path'])
              .sort({createdAt: 1})
              .find()  
              
  function chunkArray(array, size) {
    let result = []
    for (let i = 0; i < array.length; i += size) {
      let chunk = array.slice(i, i + size)
      result.push(chunk)
    }
    return result
  }        
  
  let arrPairs = chunkArray(articles, 2);
  //console.log(arrPairs);

  const posts = arrPairs[0]

  const cart = useCart();
  console.log(cart.value.length)

  let collection = "posts"

  const foo = useFoo();
  console.log(foo)
         
</script>


<template>
  <div>
    <ui-Header />
    <main class="prose lg:prose-xl container mx-auto max-w-3xl p-8 flex-grow">
    <h2>Articles</h2>
    <ul>
      <li v-for="article in posts">

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