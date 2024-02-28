<script setup lang="ts">
import MarketInfo from '~/app/module/market-info/MarketInfo.vue';
import { useWhiteRoomStore } from '#imports';

const store = useWhiteRoomStore();
const { market, currentCity } = storeToRefs(store);
const { fetchMarket, showError, getCityNameByCode } = store;

const { data, error } = await fetchMarket();

if (error.value) {
  showError('Не удалось получить данные о магазине')
} else {
  market.value = data.value
}

currentCity.value = getCityNameByCode('750000000');

</script>

<template>
  <div class="d-flex flex-column ga-2">
    <v-card>
      <v-card-title>
        Город: {{ currentCity }}
      </v-card-title>
    </v-card>
    <market-info :data="market" />
  </div>
</template>

<style scoped>

</style>