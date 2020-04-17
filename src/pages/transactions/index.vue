<template>
  <div>
    <h1>Transactions</h1>

    <table class="table table-hover">
      <thead>
        <tr>
          <th>Amount</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Payment Type </th>
          <th>Card Type</th>
          <th>status</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="transaction in transactions" :key="transaction.id">
          <td>{{ transaction.amount }}</td>
          <td>{{ transaction.billing.firstName }}</td>
          <td>{{ transaction.billing.lastName }}</td>
          <td>{{ transaction.paymentInstrumentType}}</td>
          <td>{{ transaction.androidPayCard.sourceCardType}}</td>
          <td>{{ transaction.status}}</td>
        </tr>
      </tbody>
    </table>
    
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: "TransactionList",
  data() {
    return{
      transactions: []
    }
  },
  computed: {
    ...mapState({
      counter: state => state.counter
    })
  },

  created: function()
  {
    this.fetchTransactions();
  },

  methods: {
    fetchTransactions()
    {
      let uri = '/test.json';
      this.axios.get(uri).then((response) => {
        this.transactions = response.data.paymentMethods[0].subscriptions[0].transactions;
      });
    }
  }
}
</script>