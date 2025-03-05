<template>
  <v-container fluid class="fill-screen">
    <h3>Cadernos / Língua Portuguesa</h3>
    <ListAcordeon />
  </v-container>
</template>

<style scoped>

h3{
  margin-left: 2.4vw;
}

.fill-screen {
  width: 100vw; 
  min-height: 100vh;
  background-color: #eff0f0;
  flex-direction: column;
  display: flex;
}
</style>

  
  <script lang="ts">
  import ListAcordeon from '@/components/ListAcordeon.vue';
  import { defineComponent } from 'vue';

  
  export default defineComponent({
    name: 'HomeView',
    components: {
      ListAcordeon,
    },
  });
  </script>