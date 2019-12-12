<template>
  <main>
    <div class="container">
      <component
        v-bind:is="pageName()"
        v-bind:inv-type="storeState.invType"
      ></component>
    </div>
  </main>
</template>

<script>
import { store } from '../store';
import PageHome from './PageHome';
import PageInv from './PageInv';
import PageAdd from './PageAdd';

export default {
  name: 'PageMain',
  data() {
    return {
      storeState: store.state,
    }
  },
  components: {
    PageHome,
    PageInv,
    PageAdd,
  },
  methods: {
    pageName () {
      return 'Page' + this.storeState.sectionType.charAt(0).toUpperCase() + this.storeState.sectionType.slice(1);
    }
  },
}
</script>

<style>
.container {
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px; }
  .container::after {
    content: "";
    display: table;
    clear: both; }

  @media (min-width: 544px) {
    .container {
      max-width: 576px; } }

  @media (min-width: 768px) {
    .container {
      max-width: 720px; } }

  @media (min-width: 992px) {
    .container {
      max-width: 940px; } }
      
  @media (min-width: 1200px) {
    .container {
      max-width: 1140px; } }
</style>

