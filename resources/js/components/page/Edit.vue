<template>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h4>Update Page</h4>
                </div>
                <div class="card-body">
                    <form @submit.prevent="update">
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
                            <img v-if="image" :src="image" width="300" height="300" style="object-fit: contain" alt="">
                        </div>
                        <div class="col-7">
                            <button type="submit" class="btn btn-primary">Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"update-page",
    data(){
        return {
            page:{
                title:"",
                description:"",
                slug: "",
                image: false,
                _method:"patch"
            },
            image:false,
            errors:[],
            errorAlert: false
        }
    },
    mounted(){
        this.showPage()
    },
    methods:{
        onImageChange(e){
            this.page.image = e.target.files[0];
        },
        async showPage(){
            await this.axios.get(`/api/pages/${this.$route.params.id}`).then(response=>{
                const { title, description, slug, image } = response.data
                this.page.title = title
                this.page.slug = slug
                this.page.description = description
                this.image = image
            }).catch(error=>{
                console.log(error)
            })
        },
        async update(){
            const config = {
                headers: { 'content-type': 'multipart/form-data' }
            }
            const formData = new FormData()
            formData.append('title', this.page.title)
            formData.append('description', this.page.description)
            formData.append('slug', this.page.slug)
            if (this.page.image) {
                formData.append('image', this.page.image)
            }
            formData.append('_method', this.page._method)
            await this.axios.post(`/api/pages/${this.$route.params.id}`,formData, config).then(response=>{
                this.$router.push({name:"pageList"})
            }).catch(error=>{
                console.log(error)
            })
        }
    }
}
</script>
