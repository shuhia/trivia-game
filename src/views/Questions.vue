<template>
  <p>Question 1</p>
  <router-link to="/results"><button>Answer</button></router-link>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();

const handleClick = () => {
  router.push("/results");
};
</script>

<style></style>
