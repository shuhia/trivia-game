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

<script setup>
const name = "Trivia Game";
const information = {
  interests: "Gaming",
  favoriteQuote: "Takes courage to give up",
};
</script>

<style scoped>
.information {
  text-align: left;
}
</style>
