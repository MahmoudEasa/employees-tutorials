<template>
  <div class="container">
    <p v-if="loading">Loading...</p>

    <form v-else @submit="handleSubmit">
      <div class="form-group">
        <label for="exampleInputEmail1">Name</label>
        <input
          type="text"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          v-model.trim="employee.name"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Age</label>
        <input
          type="text"
          class="form-control"
          id="exampleInputPassword1"
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

      <button type="submit" class="btn btn-primary">Update</button>
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
      loading: false,
      ref: firestore.collection("employees"),
      id: this.$route.params.id,
    };
  },
  methods: {
    handleSubmit: function (e) {
      e.preventDefault();
      if (this.employee.name && this.employee.age) {
        this.ref
          .doc(this.id)
          .set(this.employee)
          .then(() => {
            toast.success("Editing Is Done");
            this.$router.push({
              name: "EmployeeList",
            });
          })
          .catch(() => {
            toast.error("Something Is wrong");
          });
      } else {
        toast.warning("Please Complete Your Data");
      }
    },
  },
  created() {
    this.loading = true;

    this.ref
      .doc(this.id)
      .get()
      .then((res) => {
        if (res.exists) {
          this.loading = false;
          this.employee.name = res.data().name;
          this.employee.age = res.data().age;
          this.employee.department = res.data().department;
        } else {
          toast.error("Something Is wrong");
        }
        // else {
        //   axios
        //     .get(`http://localhost:5000/employees/${this.id}`)
        //     .then((res) => {
        //       this.loading = false;
        //       this.name = res.data.name;
        //       this.age = res.data.age;
        //       this.department = res.data.department;
        //     })
        //     .catch(() => {
        //       alert("ERROOOOOR");
        //     });
        // }
      })
      .catch(() => {
        toast.error("Something Is wrong");
      });
  },
};
</script>

<style lang="scss" scoped>
button {
  width: 100%;
  margin-top: 20px;
}
</style>
