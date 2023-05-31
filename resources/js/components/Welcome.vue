<template>
<div>
    <div class="wrapper">
        <header>
            <div class="container">
                <div class="header row">
                    <div class="header__logo col-3 col-md-2"><a href="/"><img src="asset/img/logo.svg" alt="Hobbor"></a></div>
                    <div class="header__buttons navbar-expand-md col-2 col-md-5">
                        <button class="navbar-toggle collapsed toggle-menu-btn">
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <div class="navbar-collapse collapse toggle-menu">
                            <a class="nav-link" href="#">Карта</a>
                            <a class="nav-link" href="#">О сервисе</a>
                        </div>
                    </div>
                    <div class="header__icons col-7 col-md-5">
                        <ul class="navbar-nav">
                            <li class="nav-item"><a class="nav-link icon i-user-nav" href="#"></a></li>

                        </ul>
                    </div>
                </div>
            </div>
        </header>
        <main>
            <section class="serv-bann" :style="{ 'background-image': 'url('+ main.background+')' }">
                <div class="container">
                    <div class="serv-bann__inner">
                        <div class="serv-bann__list">
                            <div class="serv-bann__list-item">
                                <div class="serv-bann__list-numb">
                                    250 <span>тыс</span>
                                </div>
                                <div class="serv-bann__list-tx">Пользователей</div>
                            </div>
                            <div class="serv-bann__list-item">
                                <div class="serv-bann__list-numb">
                                    150+
                                </div>
                                <div class="serv-bann__list-tx">Городов России</div>
                            </div>
                            <div class="serv-bann__list-item">
                                <div class="serv-bann__list-numb">
                                    <img src="asset/img/all.png" alt="">
                                </div>
                                <div class="serv-bann__list-tx">Кол-во интересов</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section class="serv-application">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-7">
                            <div class="serv-application__img">
                                <img :src="about.image" alt="">
                            </div>
                        </div>
                        <div class="col-lg-5">
                            <div class="serv-application__text">
                                <h2 v-html="about.title"></h2>
                                <div class="serv-application__list">
                                    <a href="#" class="serv-application__list-item"><img src="asset/img/as.jpg" alt=""></a>
                                    <a href="#" class="serv-application__list-item"><img src="asset/img/gp.jpg" alt=""></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="serv-grade">
                <div class="container">
                    <div class="serv-grade__inner">
                        <div class="serv-grade__text">
                            <h2 v-html="service.title"></h2>
                            <span v-html="service.description"></span>
                        </div>
                        <div class="serv-grade__img">
                            <img :src="service.image" alt="">
                        </div>
                    </div>
                </div>
            </section>

            <section class="serv-reviews">
                <div class="container">
                    <div class="serv-reviews__inner">
                        <h2>Улучшим сайт вместе</h2>
                        <div class="serv-reviews__top">
                            <div class="serv-reviews__top-left">
                                <div class="serv-reviews__top-title">Рейтинг предложений</div>
                                <p>Вы можете поддержать предложения других пользователей, а так же прислать нам свое мнение по улучшению ресурса.</p>

                            </div>
                            <button class="btn btn-primary btn-md modalButton" type="submit" data-popup="popupTw" @click="modalOpen('popupTw')"
                            > Предложить идею  </button>
                        </div>

                        <div class="serv-reviews__slider js-serv-reviews" v-if="ideas.length > 0">

                            <div class="serv-reviews__slider-inner"  v-for="(idea,key) in ideas" :key="key" >
                                <div class="serv-reviews__slider-item serv-reviews__slider-item-online">
                                    <div class="serv-reviews__slider-text">
                                        <div class="serv-reviews__slider-name">{{ idea.name }}</div>
                                        <div class="serv-reviews__slider-time">{{ idea.time}}</div>
                                        <div class="serv-reviews__slider-tx">{{idea.description}}</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="serv-reviews__slider mob js-serv-reviews-mob" v-if="ideas.length > 0">

                            <div class="serv-reviews__slider-inner" v-for="(idea,key) in ideas" :key="key">
                                <div class="serv-reviews__slider-item serv-reviews__slider-item-online">
                                    <div class="serv-reviews__slider-text">
                                        <div class="serv-reviews__slider-name">{{ idea.name }}</div>
                                        <div class="serv-reviews__slider-time">{{ idea.time}}</div>
                                        <div class="serv-reviews__slider-tx">{{idea.description}}</div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </main>

        <footer class="footer">
            <div class="footer__wrap">
                <div class="container">
                    <div class="footer__links d-lg-flex justify-content-between">
                        <p>© 2021 Hobbor</p>
                        <p>Разработка сайта — <a href="#">Webformula</a></p>
                        <p><a href="#" class="bold">Политика конфиденциальности</a></p>
                        <p><a href="#" class="bold">Договор Оферты</a></p>
                        <p><a href="#" class="bold">Обратиться в техподдержку</a></p>
                    </div>
                </div>
            </div>
        </footer>
    </div>



    <section class="modal modalWindow" id="popupTw" v-if="modal"  style="display:block;">
        <div class="modal-dialog">
            <div class="modal-content">
                <section class="modal-wrapper">
                    <div class="modal-title">Предложить идею</div>
                    <div class="modal-form">
                        <form @submit.prevent="createIdea">
                        <input type="name" placeholder="Имя" v-model="idea.name">
                        <input type="email" placeholder="E-mail" v-model="idea.email">
                        <textarea placeholder="Описать предложение" v-model="idea.description"></textarea>
                        <button class="btn btn-primary btn-md" type="submit">Отправить сообщение</button>
                        </form>
                    </div>

                    <a class="modal-close" @click="modalClose"><img src="asset/img/close-i.svg" alt=""></a>
                </section>
            </div>
        </div>

    </section>
    <section class="modal overlay"></section>
</div>
</template>

<script>
export default {
    name:"ideas",
    data(){
        return {
            ideas:[],
            idea:{
                name:'',
                email:'',
                description:''
            },
            modal:false,
            main: {
                background: 'asset/img/bann-serv.jpg',
            },
            service: {
                title: "<span>Оцените</span> наш сервис",
                description: "<p>Нам очень важно ваше мнение о нашем сервисе.<br> Если у вас есть предложения или вопросы<br> по работе сервиса, напишите нам. Мы будем рады<br> получить ваше сообщение. </p>",
                image: "asset/img/serv.png"
            },
            about: {
                title: "О нашем<br> <span>приложении</span>",
                description: "",
                image: "asset/img/application.png"
            },
            }
    },
    mounted(){
        this.getIdeas(),
        this.getPages()
    },
    methods:{
        async getPages() {
            await this.axios.get('/api/pages').then(response=>{
                console.log( 'response.data',response.data)
                response.data.map(item=>{
                    switch (item.slug) {
                        case 'main':
                            this.main.background = item.image
                            break;
                        case 'service':
                            this.service.title = item.title
                            this.service.description = item.description
                            this.service.image = item.image
                            break;
                        case 'about':
                            this.about.title = item.title
                            this.about.description = item.description
                            this.about.image = item.image
                            break;
                    }

                })
            }).catch(error=>{
                console.log(error)
                this.pages = []
            })
        },
        async getIdeas(){
            await this.axios.get('/api/ideas').then(response=>{
                console.log( 'response.data',response.data)
                this.ideas = response.data.reverse()
            }).catch(error=>{
                console.log(error)
                this.categories = []
            })
        },
        async createIdea(){
            await this.axios.post('/api/ideas', this.idea
            ).then(response=>{
                console.log( 'response.data',response.data.idea)
                this.modalClose()
                this.ideas.unshift(response.data.idea)
            }).catch(error=>{
                console.log(error)
                this.categories = []
            })
        },
        modalOpen(id){
            this.modal = true
        },
        modalClose(){
            this.modal = false
        }
    },

}

</script>
