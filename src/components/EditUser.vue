<template>
  <form @submit.prevent="$emit('update', user)" class="mx-auto sticky-top" style="margin-top: 5rem">
    <div class="mb-3">
      <label for="name" class="form-label">Name</label>
      <input type="text" class="form-control" id="name" v-model="user.name">
    </div>
    <div class="mb-3">
      <label for="email" class="form-label">Email</label>
      <input type="email" class="form-control" id="email" v-model="user.email">
    </div>
    <div class="mb-3">
      <label for="bio" class="form-label">Bio</label>
      <textarea class="form-control" id="bio" rows="3" v-model="user.bio"></textarea>
    </div>
    <div class="mb-3">
      <label for="city" class="form-label">City</label>
      <input type="text" class="form-control" id="city" v-model="user.city">
    </div>
    <div class="mb-3">
      <label for="country" class="form-label">Country</label>
      <input type="text" class="form-control" id="country" v-model="user.country">
    </div>
    <button type="submit" class="btn btn-primary">Save</button>
  </form>
</template>

<script>
import axios from "axios";

export default {
  name: "EditUser",
  emits: ["update"],
  data() {
    return {
      id: this.$route.params.id,
      user: {}
    }
  },
  methods: {
    async getUser(id) {
      try {
        const response = await axios.get(`http://localhost:3000/users/${id}`);
        this.user = response.data;
      } catch (error) {
        await this.$router.push("/users");
      }
    }
  },
  watch: {
    id() {
      this.getUser(this.id)
    }
  },
  created() {
    this.getUser(this.id);
    this.$watch(
        () => this.$route.params.id,
        (id) => {
          if (id !== this.id && id !== undefined) {
            this.id = id;
          }
        }
    );
  }
}
</script>

<style scoped>

</style>