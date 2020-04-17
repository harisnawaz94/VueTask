<template>
  <b-container>
    <b-row>
      <b-col>
        <h1>Edit Address Form</h1>
        
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
  }
}
</script>