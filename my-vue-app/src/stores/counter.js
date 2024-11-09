// stores/counter.js
import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0,
  }),
  actions: {
    async fetchCounter() {
      try {
        const response = await fetch('http://localhost:3000/data');
        if (!response.ok) throw new Error('Ошибка при получении данных');
        const data = await response.json();
        this.count = data.count;
      } catch (error) {
        console.error('Ошибка при получении счетчика:', error);
      }
    },
    async increment() {
      try {
        const response = await fetch('http://localhost:3000/increment', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        if (!response.ok) throw new Error('Ошибка при увеличении счета');
        const data = await response.json();
        this.count = data.count;
      } catch (error) {
        console.error('Ошибка при увеличении счетчика:', error);
      }
    },
    async decrement() {
      try {
        const response = await fetch('http://localhost:3000/decrement', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        if (!response.ok) throw new Error('Ошибка при уменьшении счета');
        const data = await response.json();
        this.count = data.count;
      } catch (error) {
        console.error('Ошибка при уменьшении счетчика:', error);
      }
    }
  },
});
