const Welcome = () => import('./components/Welcome.vue' /* webpackChunkName: "resource/js/components/welcome" */)

const PageList = () => import('./components/page/List.vue' /* webpackChunkName: "resource/js/components/page/list" */)
const PageCreate = () => import('./components/page/Add.vue' /* webpackChunkName: "resource/js/components/page/add" */)
const PageEdit = () => import('./components/page/Edit.vue' /* webpackChunkName: "resource/js/components/page/edit" */)


export const routes = [
    {
        name: 'home',
        path: '/',
        component: Welcome
    },
    {
        name: 'pageList',
        path: '/page',
        component: PageList
    },
    {
        name: 'pageEdit',
        path: '/page/:id/edit',
        component: PageEdit
    },
    {
        name: 'pageAdd',
        path: '/page/add',
        component: PageCreate
    }
]
