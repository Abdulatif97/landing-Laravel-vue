<template>
    <div class="row">
        <div class="col-12 mb-2 text-end">
            <router-link :to='{name:"pageAdd"}' class="btn btn-primary">Create</router-link>
        </div>
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h4>Page</h4>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Slug</th>
                                    <th>Title</th>
                                    <th>Description</th>
                                    <th>Image</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody v-if="pages.length > 0">
                                <tr v-for="(page,key) in pages" :key="key">
                                    <td>{{ page.id }}</td>
                                    <td>{{ page.slug }}</td>
                                    <td>{{ page.title }}</td>
                                    <td>{{ page.description }}</td>
                                    <td><img :src="page.image" width="150" height="150" style="object-fit: contain" alt=""></td>
                                    <td>
                                        <router-link :to='{name:"pageEdit",params:{id:page.id}}' class="btn ">Edit</router-link>
                                        <button type="button" @click="deletePage(page.id)" class="btn ">Delete</button>
                                    </td>
                                </tr>
                            </tbody>
                            <tbody v-else>
                                <tr>
                                    <td colspan="4" align="center">No pages Found.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"pages",
    data(){
        return {
            pages:[]
        }
    },
    mounted(){
        this.getpages()
    },
    methods:{
        async getpages(){
            await this.axios.get('/api/pages').then(response=>{
                this.pages = response.data
            }).catch(error=>{
                console.log(error)
                this.pages = []
            })
        },
        deletePage(id){
            if(confirm("Are you sure to delete this page ?")){
                this.axios.delete(`/api/pages/${id}`).then(response=>{
                    this.getpages()
                }).catch(error=>{
                    console.log(error)
                })
            }
        }
    }
}
</script>
