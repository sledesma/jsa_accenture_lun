<script>
import axios from 'axios';

export default {
  props: {
    uri: String
  },

  provide: {
    api_data: {}
  },

  render() {
    axios.get(this.uri).then(({ data }) => this.api_data = data )
    return this.$slots.default();
  }
}
</script>