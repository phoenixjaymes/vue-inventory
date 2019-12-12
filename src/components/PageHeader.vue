<template>
  <header>
    <div class="inner-container">
      <p>Inventory</p>
      <nav>
        <ul class="nav-ul">
          <li v-on:click="handleNavClick('home')">Home</li>
          <li v-on:click="handleNavClick('inv', 'lp')">LP</li>
          <li v-on:click="handleNavClick('inv', 'cass')">CASS</li>
          <li v-on:click="handleNavClick('inv', 'cd')">CD</li>
          <li v-on:click="handleNavClick('add')">Add</li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import { store } from '../store';

export default {
  name: 'PageHeader',
  methods: {
    handleNavClick: function(sectionType, invType = '') {
      let sectionObj;

      if (sectionType === 'home' || sectionType === 'add') {
        sectionObj = { section: sectionType, invType };
      } else {
        sectionObj = { section: sectionType, invType }
      }

      store.changeSection(sectionObj);
    },
  },
}
</script>

<style>
.nav-ul li{
  cursor: pointer;
  font-weight: bold;
}

.nav-ul li:hover {
  color: #ff0;
}
</style>