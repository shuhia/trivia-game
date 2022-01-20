<template>
  <div class="Profile">
    <h1>Your Name</h1>
    <button @click="handleClick">Show ProfilePhoto</button>
    <ProfilePhoto v-show="showProfile"></ProfilePhoto>
    <ProfileInformation></ProfileInformation>
  </div>
</template>

<script setup>
import ProfileInformation from "./ProfileInformation.vue";
import ProfilePhoto from "./ProfilePhoto.vue";
import { onUpdated, onMounted, onUnmounted } from "vue";
import { ref } from "vue";
const showProfile = ref(false);
const handleClick = () => {
  showProfile.value = !showProfile.value;
  console.log("Button was clicked");
};
onMounted(() => {
  console.log("Profile is mounted");
});
onUnmounted(() => {
  console.log("Profile is unMounted");
});

onUpdated(() => {
  console.log("Profile is updated");
});
</script>

<style></style>
