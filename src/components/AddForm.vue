<template>
  <form class="form-add">
    <label>
      Artist <input v-model="artist" v-on:focus="handleFocus()" type="text" placeholder="Artist" required/>
    </label>
    <label>
      Title <input v-model="title" v-on:focus="handleFocus()" type="text" placeholder="Title"/>
    </label>
    <label>
      Format 
      <select v-model="format" v-on:focus="handleFocus()">
        <option disabled value="">Select</option>
        <option value="lp">LP</option>
        <option value="cass">Cass</option>
        <option value="cd">CD</option>
      </select>
    </label>
    <button type="submit" v-on:click.prevent="handleAddClcik(itemToAdd)">Add</button>
    <br>
    <p>{{storeState.addFormMessage}}</p>
    <p>{{errorMsg}}</p>
  </form>
</template>

<script>
import { store } from '../store';

export default {
  name: 'AddForm',
  data: function () {
    return {
      storeState: store.state,
      artist:'',
      title:'',
      format: 'lp',
      errorMsg: '',
    }
  },
  computed: {
    itemToAdd: function() {
      return {
        artist: this.artist,
        title: this.title,
        format: this.format,
      }
    }
  },
  methods: {
    handleAddClcik: function() {
      if (this.validForm()) {
        store.addItem(this.itemToAdd);
      }
    },
    handleFocus() {
      store.clearFormMessage();
    },
    validForm() {
      this.errorMsg = ''; 
      if (this.artist === '' || this.title === '') {
        this.errorMsg = 'Please fill in all fields'; 
        return false;
      }
      return true;
    },
  },
}
</script>

<style>
.form-add {
  padding: 10px;
}

.form-add label{
  display: block;
  font-weight: bold;
  margin-bottom: 15px;
}

.form-add input,
.form-add select,
.form-add button {
  display: block;
  margin: 0 auto;
  width: 240px;
}

.form-add input,
.form-add select {
  border: 1px dashed #000;
  border-radius: 5px;
  height: 30px;
  margin-top: 5px;
}

.form-add input {
  padding: 2px 3px;
}


@media (min-width: 544px) {
.form-add {
  padding: 15px;
}

  .form-add label{
    margin-bottom: 20px;
  }

  .form-add input,
  .form-add select,
  .form-add button {
    width: 300px;
  }
}
</style>