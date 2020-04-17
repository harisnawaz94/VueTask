<template>
  <div>
    <div style="float: right">
      <b-button variant="success" to="/addresses/create">Add Address</b-button>
    </div>

    <h1>Addresses</h1>

    <table class="table table-hover">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>locality</th>
          <th>Street Address</th>
          <th>Postal Code</th>
          <th>Country</th>
          <th>Option</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="address in addresses" :key="address.id">
          <td>{{ address.firstName }}</td>
          <td>{{ address.lastName }}</td>
          <td>{{ address.locality }}</td>
          <td>{{ address.streetAddress }}</td>
          <td>{{ address.postalCode }}</td>
          <td>{{ address.countryName }}</td>
          <td>
            <b-button v-on:click="setAddress(address)">Edit</b-button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "AddressList",
  data(){
    return{
      addresses: []
    }
  },

  created: function()
  {
    this.fetchAddresses();
  },

  methods: {
    fetchAddresses()
    {
      let uri = '/test.json';
      this.axios.get(uri).then((response) => {
        this.addresses = response.data.addresses;
      });
    },
    changeCounter() {
      this.$store.commit('increment')
    },
    setAddress(address) {
      this.$store.commit('setAddress', address)
      this.$router.push({ path: '/addresses/edit' })
    }
  }
}
</script>