<template>
  <div>
    <h2>API Example</h2>
    <div v-if="loading">Loading...</div>
    <div v-else>{{ data }}</div>
  </div>
</template>

<script>
import apiClient from '../api.js';
import { ref, onMounted } from 'vue';

export default {
  setup() {
    const loading = ref(true);
    const data = ref(null);

    onMounted(async () => {
      try {
        const response = await apiClient.get('/data');
        data.value = response.data;
      } catch (error) {
        console.error('Fetch data error:', error);
      } finally {
        loading.value =


false;
      }
    });

    return { loading, data };
  },
};
</script>