<template>
  <div>
    <ui-Header />
    <main class="prose lg:prose-xl container mx-auto max-w-3xl p-8 flex-grow">
    <h2>Dashboard</h2>
    <p>Some words about stuff.</p>

  </main>
  </div>

  
</template>

<script setup>
  definePageMeta({
    middleware: ['auth']
  })
  const user = useSupabaseUser()
  onMounted(() => {
    watchEffect(() => {
      if (!user.value) {
        navigateTo('/login')
      }
    })
  })
</script>