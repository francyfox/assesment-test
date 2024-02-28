import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';
import presetUno from '@unocss/preset-uno';
import presetRemToPx from '@unocss/preset-rem-to-px';
import presetAttributify from '@unocss/preset-attributify';
import presetIcons from '@unocss/preset-icons';

export default defineNuxtConfig({
  ssr: false,
  devtools: {
    enabled: true
  },
  build: {
    transpile: ['vuetify']
  },
  modules: [
    '@unocss/nuxt',
    '@pinia/nuxt',
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({autoImport: true}));
      });
    }
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls
      }
    }
  },
  unocss: {
    presets: [
      presetUno({
        prefix: 'u-'
      }),
      presetAttributify(),
      presetIcons(),
      presetRemToPx()
    ],
    shortcuts: [],
    rules: [],
    theme: {
      container: {
        center: true,
        margin: {
          'DEFAULT': '0 auto'
        },
        maxWidth: {
          lg: '1024px',
        },
      }
    }
  }
});
