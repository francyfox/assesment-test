<script setup lang="ts">
import type { ICity } from '~/app/module/select-city/select-city.type';

const props = defineProps<{
  data: ICity[]
}>();

const input = ref(null)
</script>

<template>
  <v-select label="Выберите город"
            v-model="input"
            class="w-25"
            :items="data"
            @update:modelValue="$emit('change', input)"
  />
</template>

<style scoped>

</style>