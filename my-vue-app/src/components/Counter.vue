   <template>
     <div>
       <h1>Counter: {{ count }}</h1>
       <button @click="increment">Increase</button>
       <button @click="decrement">Decrease</button>
     </div>
   </template>

   <script>
   import { defineComponent, computed, onMounted } from 'vue';
   import { useCounterStore } from '../stores/counter';

   export default defineComponent({
     setup() {
       const counterStore = useCounterStore();

       // Используем computed для реактивного отслеживания состояния
       const count = computed(() => counterStore.count);

       // Загружаем текущее значение счетчика при монтировании
       onMounted(() => {
         counterStore.fetchCounter();
       });

       // Увеличивает значение счетчика с помощью store
       const increment = () => {
         counterStore.increment();
       };
       const decrement = () => {
         counterStore.decrement();
       };

       return {
         count,
         increment,
         decrement
       };
     },
   });
   </script>
