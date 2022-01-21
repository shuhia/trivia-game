<template>
  <input type="username" />
  <button @click="handleClick">Start</button>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
const handleClick = () => {
  router.push("/questions");
};
</script>

<style></style>
