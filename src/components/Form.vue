<template>
  <v-form>
    <v-text-field
      v-model="fullname"
      placeholder="Input nama"
      :rules="nameRules"
    ></v-text-field>
    <p>Halo, nama saya adalah {{ fullname }}</p>

    <h3 v-if="this.fullname % 2 == 0">Genap</h3>
    <h3 v-else>Ganjil</h3>

    <v-btn color="primary" @click="cekGenap()">Submit</v-btn>
    <v-btn @click="getAxios">Get Data Axios</v-btn>
  </v-form>
</template>

<script>
import { getData } from "../api/index";

export default {
  data: () => ({
    fullname: "",
    nameRules: [(v) => v % 2 || "Genap", (v) => !(v % 2) || "Ganjil"],
  }),

  methods: {
    cekGenap() {
      const num = this.fullname % 2;
      if (num == 0) {
        alert("Genap");
      } else {
        alert("Ganjil");
      }
    },

    getAxios() {
      getData()
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style></style>
