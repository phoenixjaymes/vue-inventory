<template>
  <section>
    <h1>{{sectionName()}} Inventory</h1>
    <InvContainer></InvContainer>
  </section>
</template>

<script>
import InvContainer from './InvContainer';

export default {
  name: 'PageInv',
  props: {
    invType: String,
  },
  components: {
    InvContainer,
  },
  methods: {
    sectionName() {
      if (this.invType === 'cass') {
        return 'Cassette';
      }
      return this.invType.toUpperCase();
    }
  }
}
</script>