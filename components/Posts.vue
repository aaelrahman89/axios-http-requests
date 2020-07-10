<template>

    <div class="container">
      <app-create></app-create>
        <h1>Items</h1>

        <table class="table table-hover">
            <thead>
            <tr>
                <td>ID</td>
                <td>Title</td>
                <td>Author</td>
                <td>Edit</td>
                <td>Delete</td>
            </tr>
            </thead>

            <tbody>
                <tr v-for="item in items" :key="item.id">
                    <td>{{ item.id }}</td>
                    <td>{{ item.title }}</td>
                    <td>{{ item.author }}</td>
                    <td><router-link :to="{name: 'Edit', params: { id: item.id }}" class="btn btn-primary">Edit</router-link></td>
                    <td><button class="btn btn-danger"  @click="deleteItem(item.id)">Delete</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

    export default {
        data(){
            return{
                items: []
            }
        },

        created: function()
        {
            this.fetchItems();
        },

        methods: {
            fetchItems()
            {
              this.axios.get('http://localhost:3000/posts').then((response) => {
                  this.items = response.data;
              });
            },
            deleteItem(id)
            {
              this.axios.delete('http://localhost:3000/posts/'+id).then(response =>
                this.fetchItems()
              );
            }
        }
    }
</script>
