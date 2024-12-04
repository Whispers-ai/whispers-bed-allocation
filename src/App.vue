<script setup lang="ts">
import MenuVue from "@/components/Menu.vue";
import { RouterView } from "vue-router";

</script>

<template>
  <MenuVue v-if="!$route.meta.hideMenu" />
  <div class="page-wrapper">
    <RouterView />
  </div>
</template>

<style scoped></style>
