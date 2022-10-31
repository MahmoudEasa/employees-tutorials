<template>
  <div>
    <div class="container card">
      <p v-if="loading">Loading...</p>

      <div v-else>
        <h3>Name: {{ employee.name }}</h3>
        <p>Age: {{ employee.age }}</p>
        <div>
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
          <button
            class="btn btn-primary"
            @click="
              this.$router.push({
                name: `EditEmployee`,
                params: { id: id },
              })
            "
          >
            Edit
          </button>
          <button class="btn btn-danger" @click="deleteItem">Delete</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { firestore } from "@/Firebase.js";
import { useToast } from "vue-toastification";
const toast = useToast();
// import axios from "axios";

export default {
  name: "EmployeePage",
  data() {
    return {
      loading: false,
      employee: {},
      id: this.$route.params.id,
      ref: firestore.collection("employees"),
    };
  },
  methods: {
    deleteItem: function () {
      this.ref
        .doc(this.id)
        .delete()
        .then(() => {
          toast.success("Deleted Is Done");
          this.$router.push({ name: "EmployeeList" });
        })
        .catch(() => {
          toast.error("Something Is Wrong");
        });
    },
  },
  created: function () {
    this.loading = true;

    this.ref
      .doc(this.id)
      .get()
      .then((res) => {
        if (res.exists) {
          this.loading = false;
          this.employee = res.data();
        } else {
          toast.error("Something Is Wrong");
        }
        // else {
        //   axios
        //     .get(`http://localhost:5000/employees/${this.id}`)
        //     .then((res) => {
        //       this.loading = false;
        //       this.employee = res.data;
        //     })
        //     .catch(() => {
        //       alert("ERROOOOOR");
        //     });
        // }
      })
      .catch(() => {
        toast.error("Something Is Wrong");
      });
  },
};
</script>

<style lang="scss" scoped>
.card {
  border: 1px solid #ccc;
  padding: 30px 0;
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
</style>
