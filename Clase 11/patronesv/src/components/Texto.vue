<template>
  <h1>{{ msj }}</h1>
</template>

<script>
export default {
  inject: {
    msj: {
      default: {}
    },
    api_data: {
      default: {}
    }
  },

  mounted() {
    console.log(this);
  }
}
</script>