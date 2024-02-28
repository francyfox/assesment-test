<script setup lang="ts">
import SelectCity from '~/app/module/select-city/SelectCity.vue';
import { useWhiteRoomStore } from '#imports';
import type { ICity } from '~/app/module/select-city/select-city.type';

const store = useWhiteRoomStore();
const { cities, currentCity } = storeToRefs(store);
const { fetchCities, showError, getCityNameByCode } = store;

const { data, error } = await fetchCities();
const cityNames: Ref<string[]> = ref([]);

if (error.value) {
  showError('Не удалось получить список городов');
} else {
  cities.value = (data.value as { cities: ICity[] }).cities;
  cityNames.value = (data.value as { cities: ICity[] }).cities.map(i => i.name);
  currentCity.value = getCityNameByCode('750000000');
}

const changeCity = (name: string) => {
  currentCity.value = name
}
</script>

<template>
  <header>
    <div class="u-container">
      <div class="u-flex u-justify-between u-items-center u-gap-5 u-py-2">
        <a href="/" class="u-text-2xl u-font-bold">
          assesment-test
        </a>

        <select-city class="u-max-w-xl"
                     :data="cityNames"
                     @change="changeCity"
        />
      </div>
    </div>
  </header>
</template>

<style scoped>

</style>