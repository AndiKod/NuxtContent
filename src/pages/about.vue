<template>
  <div>
    <ui-Header />
    <main class="prose lg:prose-xl container mx-auto max-w-3xl p-8 flex-grow">
    <h2>About</h2>
    <p>Some words about {{foo}} stuff.</p>

  </main>
  </div>

  
</template>

<script setup>
const foo = useFoo()
</script>