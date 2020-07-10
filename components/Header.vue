
<template>
  <div class="container">
        <ul class="nav justify-content-center">
  <li class="nav-item p-3">
    <router-link :to="{name: 'Create'}">Add Post</router-link>
  </li>
  <li class="nav-item p-3">
    <router-link :to="{name: 'Posts'}">Posts</router-link>
  </li>
</ul>
    </div>
</template>

<script>
export default {
  components: {
      name: 'AddItem'
  },
  data() {
      return {

      }
  }
}
</script>
