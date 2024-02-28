<script setup lang="ts">
import type { IMarket } from '~/app/module/market-info/market-info.type';
import { localeTime } from '../../utils';

// локализацию как бы тоже необязательно хранить на фронте, можно упоковать в ключ->значение
defineProps<{
  data: IMarket
}>()
</script>

<template>
  <v-card>
    <v-card-title>
        <span class="headline">
          {{ data.name }}
        </span>
    </v-card-title>
    <v-card-text>
      <ul>
        <li>
          <span class="u-font-bold">
            Сегодня:
          </span>

          <span>
            {{ localeTime(data.status.today) }}
          </span>
        </li>

        <li>
          <span class="u-font-bold">
            Доступно продуктов:
          </span>

          <span>
            {{ data.status.availableProducts }}
          </span>
        </li>

        <li>
          <span class="u-font-bold">
            Недоступно продуктов:
          </span>

          <span>
            {{ data.status.nonAvailableProducts }}
          </span>
        </li>

        <li>
          <span class="u-font-bold">
            Всего продуктов:
          </span>

          <span>
            {{ data.status.totalProducts }}
          </span>
        </li>
      </ul>
    </v-card-text>
  </v-card>
</template>

<style scoped>

</style>