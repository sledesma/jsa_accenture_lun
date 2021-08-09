<template>
  <api-provider uri="https://jsonplaceholder.typicode.com/posts/">
    <mensaje-provider>
      <texto />
    </mensaje-provider>
  </api-provider>
</template>

<script>
import MensajeProvider from './providers/MensajeProvider.vue'
import Texto from './components/Texto.vue';
import ApiProvider from './providers/ApiProvider.vue';

export default {
  components: { MensajeProvider, Texto, ApiProvider },
  name: 'App',
}
</script>
