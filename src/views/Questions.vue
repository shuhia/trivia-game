<template>
  <p>Question 1</p>
  <input v-model="answer" />
  <router-link to="/results"><button>Answer</button></router-link>
</template>

<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";
const router = useRouter();
const answer = ref("");
const handleClick = () => {
  router.push("/results");
};
</script>

<style></style>
