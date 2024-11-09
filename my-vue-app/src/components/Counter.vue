<template>
  <div>
    <h1>Counter: {{ count }}</h1>
    <button @click="increment">Increase</button>
  </div>
</template>

<script>
import { defineComponent, computed } from 'vue';
import { useCounterStore } from '../stores/counter';

export default defineComponent({
  setup() {
    const counterStore = useCounterStore();

    // Используем computed для реактивного отслеживания состояния
    const count = computed(() => counterStore.count);

    const increment = () => {
      counterStore.increment();
    };

    return {
      count,
      increment,
    };
  },
});
</script>