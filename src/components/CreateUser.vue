<template>
  <form @submit.prevent="$emit('create', user)" class="mx-auto sticky-top" style="margin-top: 5rem">
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
    <button type="submit" class="btn btn-primary">Create</button>
  </form>
</template>

<script>
export default {
  name: "CreateUser",
  emits: ["create"],
  data() {
    return {
      user: {
        name: "",
        email: "",
        bio: "",
        city: "",
        country: ""
      }
    }
  },
}
</script>

<style scoped>

</style>