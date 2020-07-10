
<template>
  <div class="container">
        <div class="card">
            <div class="card-header">
                <h3>Add Item</h3>
            </div>
            <div class="card-body">
                <form v-on:submit.prevent="addItem">
                    <div class="form-group">
                        <label>Post Title:</label>
                        <input type="text" class="form-control" v-model="item.title"/>
                    </div>
                    <div class="form-group">
                        <label>Post Author:</label>
                        <input type="text" class="form-control" v-model="item.author"/>
                    </div>
                    <div class="form-group">
                        <input type="submit" class="btn btn-primary" value="Add Post"/>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  components: {
      name: 'AddItem'
  },
  data() {
      return {
          item: {
            id: '',
            title: '',
            author: ''
          }
      }
  },
  methods: {
      addItem() {
            this.axios.post('http://localhost:3000/posts', this.item).then((response) => {
                console.log(response.data);
                this.$router.push({name: 'Posts'});
            });
        }
    }
}
</script>
