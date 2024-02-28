import { defineStore } from 'pinia';
import type { ICity, IMarket } from '~/app/module/select-city/select-city.type';
import type { Ref } from 'vue';

export const useWhiteRoomStore = defineStore('whiteRoom', () => {
  const cities: Ref<ICity[]> = ref([]);
  const market: Ref<IMarket | null> = ref(null);
  const currentCity: Ref<string | null> = ref(null);
  const error: Ref<boolean> = ref(false);
  const errorMessage: Ref<string> = ref('');

  const base = 'https://bitbucket.org/ilakhmotkin/front-end-assesment-ru/raw'

  async function showError(message: string) {
    error.value = true;
    errorMessage.value = message;
  }
  async function fetchCities() {
    // useFetch явно не для стора, можно сделать копию фетча чтобы не пробрасывать baseurl
    const response = await useFetch(`${base}/7bc28b7ede222e25fe44fec52ad1e74a03168501/cities-response.json`, {
      parseResponse: JSON.parse
    });

    return response;
  }

  async function fetchMarket() {
    const response = await useFetch(`${base}/09c0e12a2b5325e71f36c08e7e29dc8eefbdb081/company-response.json`, {
      parseResponse: JSON.parse
    });

    return response;
  }

  return {
    currentCity,
    cities,
    market,
    fetchCities,
    fetchMarket,
    showError,
    error,
    errorMessage
  }
})