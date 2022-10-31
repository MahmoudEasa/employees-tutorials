<template>
  <div class="temp">
    <h2 class="title">{{ title }} Team</h2>
    <div v-for="employee in employees" :key="employee.id">
      <div class="card" v-if="employee.department == title">
        <h3>Name: {{ employee.name }}</h3>
        <p>Age: {{ employee.age }}</p>
        <div>
          <button
            class="btn btn-info"
            @click="
              this.$router.push({
                name: `Employee`,
                params: { id: employee.id },
              })
            "
          >
            View
          </button>
          <button
            class="btn btn-primary"
            @click="
              this.$router.push({
                name: `EditEmployee`,
                params: { id: employee.id },
              })
            "
          >
            Edit
          </button>
          <button class="btn btn-danger" @click="deleteItem(employee.id)">
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EmployeesVue",
  props: ["employees", "title"],
  methods: {
    deleteItem: function (id) {
      this.$emit("delete", id);
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  border: 1px solid #ccc;
  padding: 30px 0;
  margin: 20px 0;
  border-radius: 10px;
  box-shadow: 0 0 10px #ccc;

  p {
    margin: 20px 0;
  }

  button {
    padding: 5px 30px;
    margin-left: 5px;
  }
}

.title {
  color: #42b983;
  font-weight: bold;
  font-size: 2.5em;
}
</style>
