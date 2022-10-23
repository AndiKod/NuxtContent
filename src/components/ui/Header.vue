<template>
  <header>
    <ul class="flex">
      <li class="mx-2 font-bold"><NuxtLink to="/">Home</NuxtLink></li>
      <li class="mx-2"><NuxtLink to="/about">About</NuxtLink></li>
      <li class="mx-2"><NuxtLink to="/login">Login</NuxtLink></li>
      <li class="mx-2"><NuxtLink to="/dashboard">Dash</NuxtLink></li>
      <li> <button
      v-if="user"
      @click="client.auth.signOut()"
      class="px-2 py-1 text-sm font-medium rounded hover:bg-charcoal-600"
    >
      Log out
    </button></li>
    </ul>
  </header>
</template>


<script setup lang="ts">
const user = useSupabaseUser()
const client = useSupabaseClient()
</script>