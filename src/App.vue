<script setup lang="ts">
import Avatar from './components/Avatar.vue'

</script>

<template>
  <Avatar name="h z" :size="200" />
  <Avatar name="m z" :size="200" />
  <Avatar name="z z" :size="200" :radius="10" />
  <Avatar name="x M" :size="200" :radius="10" color="red" />
  <Avatar name="m a-b b" :size="48" />
  <Avatar 
    name="h z" 
    :radius="10" 
    :size="200" 
    image="https://amymhaddad.s3.amazonaws.com/morocco-blue.png" 
  />
  test a
</template>

<style scoped>
</style>
