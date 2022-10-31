<template>
  <div class="employeeList container">
    <h1>{{ aboutTitle }}</h1>
    <p class="loading" v-if="loading">Loading....</p>
    <div v-else>
      <br />
      <input
        class="form-control mb-4"
        type="text"
        v-model="searchData"
        placeholder="Search By Name"
      />
      <EmployeesVue
        :employees="searchingData"
        :title="'IT'"
        @delete="deleteEmployee"
      />
      <EmployeesVue
        :employees="searchingData"
        :title="'HR'"
        @delete="deleteEmployee"
      />
    </div>
  </div>
</template>

<script>
import EmployeesVue from "@/components/Employees.vue";
import { firestore } from "@/Firebase.js";
import { useToast } from "vue-toastification";
const toast = useToast();
// import axios from "axios";

export default {
  name: "EmployeeList",
  data() {
    return {
      aboutTitle: "Employee List",
      employees: [],
      loading: false,
      searchData: "",
      ref: firestore.collection("employees"),
    };
  },
  components: {
    EmployeesVue,
  },
  methods: {
    deleteEmployee: async function (id) {
      const employeesData = this.employees;
      const employeesFiltered = this.employees.filter((el) => el.id != id);
      this.employees = employeesFiltered;

      try {
        await this.ref.doc(id).delete();
        toast.success("Deleted Is Done");
      } catch {
        toast.error("Something Is Wrong");
        this.employees = employeesData;

        // try {
        //   axios.delete(`http://localhost:5000/employees/${id}`);
        // } catch {
        //   console.log("Err");
        //   this.employees = employeesData;
        // }
      }
    },
  },
  computed: {
    searchingData: function () {
      const reg = new RegExp(this.searchData, "i");
      const searched = this.employees.filter((el) => {
        // return el.name.toLowerCase().includes(this.searchData.toLowerCase());
        return el.name.match(reg);
      });

      return searched;
    },
  },
  created: function () {
    this.loading = true;

    this.ref.onSnapshot((querySnapshot) => {
      if (querySnapshot.docs.length > 0) {
        this.loading = false;
        this.employees = [];
        querySnapshot.forEach((doc) => {
          this.employees.unshift({ ...doc.data(), id: doc.id });
        });
      } else {
        toast.error("Something Is Wrong");
      }
    });

    // axios
    //   .get("http://localhost:5000/employees")
    //   .then((res) => {
    //     this.loading = false;
    //     this.employees = res.data;

    //     this.ref.onSnapshot((querySnapshot) => {
    //       // this.employees = [];
    //       querySnapshot.forEach((doc) => {
    //         // console.log(doc.id);
    //         // console.log(doc.data());
    //         this.employees.unshift({ ...doc.data(), id: doc.id });
    //       });
    //     });
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  },
  beforeCreate: function () {},
  beforeUpdate: function () {},
};
</script>

<style lang="scss" scoped>
button {
  padding: 5px 30px;
  border-radius: 5px;
  outline: none;
  border: 1px solid gray;
  cursor: pointer;
  margin-left: 5px;
}

.loading {
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
}
</style>
