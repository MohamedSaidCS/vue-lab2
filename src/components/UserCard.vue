<template>
  <div class="card mx-auto my-4 w-75">
    <h4 class="card-header">{{ user.name }}</h4>
    <div class="card-body">
      <h5 class="card-title">{{ user.email }}</h5>
      <p class="card-text">{{ user.city }}, {{ user.country }}</p>
      <div class="actions">
        <router-link :to="`/users/${user.id}`" class="btn btn-primary">Details</router-link>
        <router-link :to="`/users/${user.id}/edit`" class="btn btn-dark">Edit</router-link>
        <button @click="$emit('delete', user.id)" class="btn btn-danger">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserCard",
  props: {
    user: Object
  },
  emits: ["delete"],
}
</script>

<style scoped>
.actions {
  display: flex;
  justify-content: center;
  column-gap: 5px;
}
</style>