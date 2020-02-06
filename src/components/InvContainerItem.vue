<template>
  <li class="inventory-list__item" v-bind:class="'format-' + format">
    <ul>
      <li><b>{{ artist }}</b></li>
      <li>{{ title }}</li>
      <li>{{ format }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  name: 'InvContainerItem',
  props: {
    artist: String,
    title: String,
    format: String,
  }
}
</script>

<style>
.inventory-list__item {
  min-height: 100px;
  height: 100%;
  width: 100%;
}

.inventory-list__item ul {
  display: flex;
  flex-flow: column;
  justify-content: center;

  background: rgba(251, 251, 251, .9);
  border-radius: 5px;
  height: 100%;
  text-align: center;
  width: 100%;
}

.format-lp {
    background: url('../assets/turntable.svg') center center / 90% 90% no-repeat transparent;
}

.format-cass {
    background: url('../assets/cassette.svg') center center / 90% 90% no-repeat transparent;
}

.format-cd {
    background: url('../assets/compact-disc.svg') center center / 90% 90% no-repeat transparent;
}
</style>