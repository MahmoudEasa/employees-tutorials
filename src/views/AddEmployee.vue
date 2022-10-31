<template>
  <div class="container">
    <form @submit="handleSubmit">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          type="text"
          class="form-control"
          id="name"
          aria-describedby="emailHelp"
          v-model.trim="employee.name"
        />
      </div>
      <div class="form-group">
        <label for="age">Age</label>
        <input
          type="text"
          class="form-control"
          id="age"
          v-model.trim="employee.age"
        />
      </div>

      <div class="col-auto my-1">
        <label class="mr-sm-2" for="department">department</label>
        <select
          v-model="employee.department"
          class="custom-select mr-sm-2"
          id="department"
        >
          <option value="IT">IT</option>
          <option value="HR">HR</option>
        </select>
      </div>

      <button type="submit" class="btn btn-primary">Save</button>
    </form>

    <button
      class="btn btn-info"
      @click="
        this.$router.push({
          name: `EmployeeList`,
        })
      "
    >
      Back
    </button>
  </div>
</template>

<script>
import { firestore } from "@/Firebase.js";
import { useToast } from "vue-toastification";
const toast = useToast();
// import axios from "axios";

export default {
  name: "EditEmployee",
  data() {
    return {
      employee: {
        name: "",
        age: "",
        department: "",
      },
      ref: firestore.collection("employees"),
    };
  },
  methods: {
    handleSubmit: function (e) {
      e.preventDefault();
      if (this.employee.name && this.employee.age && this.employee.department) {
        this.ref
          .add(this.employee)
          .then(() => {
            toast.success("Added Is Done");
            this.employee.name = "";
            this.employee.age = "";
            this.employee.department = "";

            // this.$router.push({
            //   name: "EmployeeList",
            // });
          })
          .catch(() => {
            toast.error("Something Is wrong");
          });
      } else {
        toast.warning("Please Complete Your Data");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  width: 100%;
  margin-top: 20px;
}
</style>
