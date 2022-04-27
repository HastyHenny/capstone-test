<template>
  <div>
    <router-link :to="{ name: 'Create' }" class="button is-success mt-5"
      >Add New</router-link
    >
    <table class="table is-striped is-bordered mt-2 is-fullwidth">
      <thead>
        <tr>
          <th>Notification ID</th>
          <th>User Email</th>
          <th>Notification Date</th>
          <th>Notification Time</th>
          <th class="has-text-centered">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.not_id">
          <td>{{ item.not_id }}</td>
          <td>{{ item.user_email }}</td>
          <td>{{ item.not_date }}</td>
          <td>{{ item.not_time }}</td>
          <td class="has-text-centered">
            <router-link
              :to="{ name: 'Edit', params: { id: item.not_id } }"
              class="button is-info is-small"
              >Edit</router-link
            >
            <a
              class="button is-danger is-small"
              @click="deleteNoti(item.not_id)"
              >Delete</a
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
  
<script>
// import axios
import axios from "axios";
  
export default {
  name: "notList",
  data() {
    return {
      items: [],
    };
  },
  
  created() {
    this.getNotis();
  },
  
  methods: {
    // Get All nots
    async getNotis() {
      try {
        const response = await axios.get("http://localhost:5000/nots");
        this.items = response.data;
      } catch (err) {
        console.log(err);
      }
    },
  
    // Delete not
    async deleteNoti(id) {
      try {
        await axios.delete(`http://localhost:5000/nots/${id}`);
        this.getNotis();
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
  
<style>
</style>