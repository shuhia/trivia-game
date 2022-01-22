<template>
  <input v-model="inputs.username" type="username" />
  <input v-model="inputs.difficulty" type="number" />
  <input v-model="inputs.numberOfQuestions" type="number" />
  <input v-model="inputs.category" type="text" />
  <button @click="handleClick">Start</button>
</template>

<script setup>
import { useRouter } from "vue-router";
import { reactive, ref } from "vue";
const router = useRouter();
const username = ref("");
const difficulty = ref("");
const numberOfQuestions = ref(1);
const category = ref("");
const inputs = reactive({
  username,
  difficulty,
  numberOfQuestions,
  category,
});
const handleClick = () => {
  router.push("/questions");
  // Extract values from inputs
  const values = { ...inputs };
  console.log(values);
};
</script>

<style></style>
