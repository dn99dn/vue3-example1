<template>
  <div>
    <h1>Welcome to {{title}}</h1>
    <input type="text" v-model="input1" />
    <button type="button" @click="getData">Get</button>
    <button type="button" @click="setData">Set</button>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      title: '개발자의 품격',
      input1: 'abc',
    };
  },
  created() {
    console.log('created');
  },
  mounted() {
    console.log('mounted');
  },
  beforeUpdate() {
    console.log('beforeUpdate');
  },
  updated() {
    console.log('updated');
  },
  watch: {
    input1() {
      console.log('input1 watch');
    }
  },
  methods: {
    getData() {
      alert(this.input1);
    },
    setData() {
      this.input1 = 1234;
    }
  },
}
</script>

<style>

</style>