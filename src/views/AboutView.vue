<template>
  <div class="about container">
    <h1>{{ aboutTitle }}</h1>
    <button @click="aboutTitle = 'Mahmoud Easa'">Change Title</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      aboutTitle: "This is an about page",
    };
  },
  components: {},
  methods: {},
  computed: {},
  created: function () {},
  beforeCreate: function () {},
  beforeUpdate: function () {},
};
</script>

<style lang="scss" scoped>
input {
  margin-bottom: 15px;
  height: 35px;
  width: 300px;
  padding: 5px 10px;
  outline: none;
  border-radius: 5px;
  border: 1px solid gray;
}

button {
  padding: 5px 30px;
  border-radius: 5px;
  outline: none;
  border: 1px solid gray;
  cursor: pointer;
  margin-left: 5px;
}
</style>
