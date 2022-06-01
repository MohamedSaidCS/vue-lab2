<template>
  <div class="card mx-auto sticky-top" style="width: 30rem; margin-top: 5rem">
    <img src="https://media.istockphoto.com/vectors/male-face-silhouette-or-icon-man-avatar-profile-unknown-or-anonymous-vector-id1087531642?k=20&m=1087531642&s=612x612&w=0&h=D6OBNUY7ZxQTAHNVtL9mm2wbHb_dP6ogIsCCWCqiYQg=" class="card-img-top" alt="photo">
    <div class="card-body">
      <h1 class="card-title">{{ user.name }}</h1>
      <p class="card-text">{{ user.bio }}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">{{ user.email }}</li>
      <li class="list-group-item">{{ user.city }}</li>
      <li class="list-group-item">{{ user.country }}</li>
    </ul>
    <div class="card-body">
      <router-link to="/users" class="card-link">Close</router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "UserDetails",
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
        this.user.name = 'No user found.';
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