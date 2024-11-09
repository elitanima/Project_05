import { defineStore } from 'pinia';

// Определяем хранилище
export const useCounterStore = defineStore('counter', {
  // Состояние хранилища
  state: () => ({
    count: 0, // Инициализация счетчика
  }),
  // Допустимая для использования бизнес-логика
  actions: {
    increment() {
      this.count++;
    },
  },
});