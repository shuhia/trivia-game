<script setup>
const name = "Trivia Game";
const props = defineProps({
  information: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="profile-information">
    <h2>About {{ name }}</h2>
    <ul>
      <li v-for="(key, value) in information" :key="key" class="information">
        {{ key + ": " + value }}
      </li>
    </ul>
    {{ name }}
  </div>
</template>

<style scoped>
.information {
  text-align: left;
}
</style>
