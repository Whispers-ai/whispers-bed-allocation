<template>
  <div>
    <h1>Beds</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import BedRequestsService from '@/services/bed-requests/index';

export default defineComponent({
  name: 'BedsView',
  setup() {

    // Chama a função ao montar o componente
    onMounted(async () => {
      //fetchBedRequestById('218746')
      // fetchBedRequests();
    });

    return {
    };
  },
});
</script>

<style scoped>
h1 {
  margin-bottom: 20px;
}
</style>
