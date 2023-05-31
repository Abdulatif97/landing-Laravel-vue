<template>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h4>Add Page</h4>
                </div>

                <div class="card-body">
                    <form @submit.prevent="create">
                        <div class="row justify-content-center">
                            <div class="col-7" v-if="errorAlert">
                                <div class="alert alert-danger" role="alert" >
                                    <ul  class="list-group">
                                        <li  class="list-group-item" style="background: unset; border: none" v-for="(error, index) in errors " :key="index">{{ error[0] }}</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-7 mb-2">
                                <div class="form-group">
                                    <label>Slug</label>
                                    <select name="slug" id="" v-model="page.slug" class=" form-control">
                                        <option value="about">About</option>
                                        <option value="service">Service</option>
                                        <option value="main">Main</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-7 mb-2">
                                <div class="form-group">
                                    <label>Title</label>
                                    <textarea class="form-control" v-model="page.title"></textarea>
                                </div>
                            </div>
                            <div class="col-7 mb-2">
                                <div class="form-group">
                                    <label>Description</label>
                                    <textarea class="form-control" v-model="page.description"></textarea>
                                </div>
                            </div>
                            <div class="col-7 mb-2">
                                <div class="form-group">
                                    <label>Image</label>
                                    <input type="file" class="form-control" v-on:change="onImageChange">
                                </div>
                            </div>
                            <div class="col-7">
                                <button type="submit" class="btn btn-primary">Save</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"add-page",
    data(){
        return {
            page:{
                title:"",
                slug:"",
                image:"",
                description:""
            },
            errors:[],
            errorAlert: false

        }
    },
    methods:{
        onImageChange(e){
                this.page.image = e.target.files[0];
            },
        async create(){
            let formData = new FormData();
                formData.append('image', this.page.image);
                formData.append('title', this.page.title);
                formData.append('slug', this.page.slug);
                formData.append('description', this.page.description);
                const config = {
                    headers: { 'content-type': 'multipart/form-data' }
                }
            await this.axios.post('/api/pages', formData, config).then(response=>{
                this.errors = []
                this.errorAlert = false
                this.$router.push({name:"pageList"})
            }).catch(error=>{
                if(error.response.status == 422){
                    this.errors = error.response.data.errors
                    this.errorAlert = true

                }
                console.log(error)
            })
        }
    }
}
</script>
