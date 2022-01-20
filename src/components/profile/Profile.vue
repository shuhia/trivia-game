<script setup>
import ProfileInformation from "./ProfileInformation.vue";
import ProfilePhoto from "./ProfilePhoto.vue";
import { onUpdated, onMounted, onUnmounted } from "vue";
import { ref } from "vue";
const showProfile = ref(false);
const handleClick = () => {
  showProfile.value = !showProfile.value;
  console.log("Button was clicked");
  console.log(args);
};
const profile = {
  name: "Alex",
  information: { interest: "Gaming" },
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

<template>
  <div class="Profile">
    <h1>{{ profile.name }}</h1>
    <button @click="handleClick">Show ProfilePhoto</button>
    <ProfilePhoto v-show="showProfile" @click="handleClick"></ProfilePhoto>
    <ProfileInformation :information="profile.information"></ProfileInformation>
  </div>
</template>

<style></style>
