<script setup lang="ts">
const user = useSupabaseUser()
const client = useSupabaseClient()
const router = useRouter()

definePageMeta({
  middleware: ['auth']
})


// Login method using providers
const login = async (provider: 'github') => {
  const { error } = await client.auth.signIn({ provider })
  if (error) {
    return alert('Something went wrong !')
  }
  alert('A priori c\'est bon!')
  router.push('/dashboard')
}

onMounted(() => {
  watchEffect(() => {
    if (user.value) {
      navigateTo('/dashboard')
    }
  })
})
</script>

<template>
  <div>
    <ui-Header />
    <main class="prose lg:prose-xl container mx-auto max-w-3xl p-8 flex-grow">
    <h2>Login</h2>
    <p>Some words about.</p>

    <button @click="login('github')">Login with GitHub</button>  

  </main>
  </div>

  
</template>

