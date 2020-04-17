<template>
  <b-form @submit.prevent="submitData()">
  
    <label>First Name {{address.firstName}}</label>
    <b-form-input 
      label="Your first name"
      v-model="address.firstName" 
      placeholder="First Name"
    />
    
    <label>Last Name</label>
    <b-form-input 
      label="Your Last name" 
      v-model="address.lastName"
      placeholder="Second Name"
    />
    
    <label>Locality</label>
    <b-form-input 
      label="Your City name" 
      v-model="address.locality"
      placeholder="Third Name"
    />
    
    <label>Postal Code</label>
    <b-form-input 
      label="Your Postal Code" 
      v-model="address.postalCode"
      placeholder="Postal Code"
    />

    <label>Street</label>
    <b-form-input 
      label="Your Street name" 
      placeholder="street Name"
      v-model="address.streetAddress"
    />

    <label>Country Name</label>
    <b-form-input 
      label="Your Country name" 
      placeholder="country Name"
      v-model="address.countryName"
    />

    <br>

    <b-button type="submit" variant="primary">Save</b-button>
    <br />
    <br />

    {{displayData}}
  </b-form>
</template>

<script>
import { mapState } from 'vuex';

const newAddress = {
  firstName: '',
  lastName:'',
  locality:'',
  postalCode:'',
  streetAddress:'',
  countryName:''
};

export default {
  computed: {
    ...mapState({
      address: state => state.address || newAddress
    })
  },
  data(){
    return{
      displayData: ''
    }
  },
  methods: {  
    submitData() {
      this.displayData = JSON.stringify(this.address)
    }
  }
}
</script>