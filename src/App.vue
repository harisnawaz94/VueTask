<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand >Haris Nawaz</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/addresses">Addresses</b-nav-item>
          <b-nav-item to="/transactions">Transactions</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <b-container style="padding-top: 10px">
      <router-view></router-view>
    </b-container>
  </div>
</template>

<script>
export default {
}
</script>
