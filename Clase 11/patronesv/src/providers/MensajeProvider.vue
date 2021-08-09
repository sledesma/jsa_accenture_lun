<script>
export default {
  provide: {
    msj: 'Hola mundo desde MensajeProvider'
  },

  render() {
    return this.$slots.default();
  }
}
</script>