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
      <button class="button is-success" @click="updateProduct">UPDATE</button>
    </div>
  </div>
</template>
  
<script>
// import axios
import axios from "axios";
  
export default {
  name: "EditNot",
  data() {
    return {
      notId: "",
      userEmail: "",
      notDate: "",
      notTime: "",
    };
  },
  created: function () {
    this.getNotiById();
  },
  methods: {
    // Get notification By Id
    async getNotiById() {
      try {
        const response = await axios.get(
          `http://localhost:5000/notification/${this.$route.params.id}`
        );
        this.notId = response.data.not_id;
        this.userEmail = response.data.user_email;
        this.notDate = response.data.not_date;
        this.notTime = response.data.not_time;
      } catch (err) {
        console.log(err);
      }
    },
  
    // Update notification
    async updateNoti() {
      try {
        await axios.put(
          `http://localhost:5000/notification/${this.$route.params.id}`,
          {
            not_id: this.notId,
            user_email: this.userEmail,
            not_date: this.notDate,
            not_time: this.notTime,
          }
        );
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