<script setup lang="ts">
import LayoutHeader from '~/layouts/Layout-Header.vue';
import { useWhiteRoomStore } from '#imports';
const store = useWhiteRoomStore();
const { error, errorMessage } = storeToRefs(store);
</script>

<template>
  <v-app class="bg-blue-grey" dark>
    <layout-header />
    <div class="u-container">
      <NuxtPage />
    </div>

    <!--  не очень удобный компонент для нотификации, по факту это стэк сообщений  -->
    <v-snackbar v-model="error" >
      {{ errorMessage }}

      <template v-slot:actions>
        <v-btn
            color="pink"
            variant="text"
            @click="error = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-app>
</template>

<style scoped>

</style>