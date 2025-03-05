<template>
  <v-container fluid class="fill-screen">
    <h3>Cadernos / Língua Portuguesa</h3>
    <ListAcordeon />
  </v-container>
</template>

<style  src="../assets/estilo/estilo.css">

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