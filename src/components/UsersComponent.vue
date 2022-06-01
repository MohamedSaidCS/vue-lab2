<template>
  <div class="users-home container">
    <div class="user-cards">
      <router-link to="/users/create" class="btn btn-primary mt-4">Add User</router-link>
      <ListUsers @delete="deleteUser" :users="users"/>
    </div>
    <router-view @create="createUser" @update="updateUser"/>
  </div>
</template>

<script>
import ListUsers from "@/components/ListUsers";
import axios from "axios";
export default {
  name: "UsersComponent",
  components: {ListUsers},
  data() {
    return {
      users: [],
    }
  },
  methods: {
    async getUsers() {
      const response = await axios.get('http://localhost:3000/users');
      this.users = response.data;
    },
    async createUser(user) {
      user.id = this.users[this.users.length - 1].id + 1;
      await axios.post('http://localhost:3000/users', user);
      await this.getUsers();
      await this.$router.push(`/users/${user.id}`);
    },
    async updateUser(user) {
      await axios.put(`http://localhost:3000/users/${user.id}`, user);
      await this.getUsers();
      await this.$router.push(`/users/${user.id}`);
    },
    async deleteUser(id) {
      await axios.delete(`http://localhost:3000/users/${id}`);
      await this.getUsers();
    }
  },
  created() {
    this.getUsers();
  },

}
</script>

<style scoped>
.users-home {
  display: flex;
  align-items: start;
}
.user-cards {
  flex-basis: 50%;
}
</style>