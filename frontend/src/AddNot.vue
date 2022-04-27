<template>
  <div>
     <div class="field">
      <label class="label">Notification ID</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Notification ID"
          v-model="notId"
        />
      </div>
    </div>
  
    <div class="field">
      <label class="label">Email</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Email"
          v-model="userEmail"
        />
      </div>

    <div class="field">
      <label class="label">Date</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Date"
          v-model="notDate"
        />
      </div>

    <div class="field">
      <label class="label">Time</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Time"
          v-model="notTime"
        />
      </div>
    </div>
  
    <div class="control">
      <button class="button is-success" @click="saveProduct">SAVE</button>
    </div>
  </div>
</template>
  
<script>
// import axios
import axios from "axios";
  
export default {
  name: "AddProduct",
  data() {
    return {
      notId: "",
      userEmail: "",
      notDate: "",
      notTime: "",
    };
  },
  methods: {
    // Create New product
    async saveProduct() {
      try {
        await axios.post("http://localhost:5000/products", {
          not_id: this.notId,
            user_email: this.userEmail,
            not_date: this.notDate,
            not_time: this.notTime,
        });
        this.notId = "";
        this.userEmail = "";
        this.notDate = "";
        this.notTime = "";
        this.$router.push("/");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
  
<style>
</style>