<template>
  <Analytics />
  <router-view />
</template>

<script>
import { Analytics } from '@vercel/analytics/vue';

export default {
  name: 'App',
  components: {
    Analytics,
  },
};
</script>