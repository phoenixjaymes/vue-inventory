<template>
  <ul class="inventory-list">
    <InvContainerItem
      v-for="item in currentInventory()"
      v-bind:key="item.id"
      v-bind="item"
    ></InvContainerItem>
  </ul>
</template>

<script>
import { store } from '../store';
import InvContainerItem from './InvContainerItem';

export default {
  name: 'InventoryList',
  components: {
    InvContainerItem,
  },
  data() {
    return { storeState: store.state }
  },
  methods: {
    currentInventory() {
      if (this.storeState.invType !== '') {
        return this.storeState.inventoryData.filter(item => item.format === this.storeState.invType);
      }
      return this.storeState.inventoryData;
    }
  }
}
</script>

<style>
.inventory-list {
  display: grid;
  grid-template-columns: repeat(1, 200px);
  gap: 10px;
}

@media (min-width: 544px) {
  .inventory-list {
    grid-template-columns: repeat(2, 200px);
  }
}

@media (min-width: 768px) {
  .inventory-list {
    grid-template-columns: repeat(3, 200px);
  }
}
</style>