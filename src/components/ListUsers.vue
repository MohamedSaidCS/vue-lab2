<template>
  <UserCard v-bind="$attrs" v-for="user in users" :user="user" :key="user.id" />
</template>

<script>
import UserCard from "@/components/UserCard";

export default {
  name: "ListUsers",
  components: {UserCard},
  props: {
    users: Array
  },
}
</script>

<style scoped>

</style>