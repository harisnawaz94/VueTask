<template>
  <b-container>
    <b-row>
      <b-col>
        <h1>New Address Form</h1>
        
        <AddressForm />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import AddressForm from './form';

export default {
  components: {
    AddressForm
  },
  created: function()
  {
    this.clearAddress();
  },
  methods: {
    clearAddress() {
      this.$store.commit('clearAddress')
    }
  }
}
</script>