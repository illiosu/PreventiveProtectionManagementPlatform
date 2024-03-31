import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";


export const routes = [
    {
        // path: '/login',
        path: '/',
        redirect: "/weibaoguanli",
        component: () => import("./layout/login.vue"), //登录页

    },
    {
        name: 'map',
        path: '/map',
        component: () => import("./layout/map.vue"), //地图页

    },
    {
        name: 'home',
        path: '/home1',
        redirect: "/weibaoguanli",  //重定向
        component: () => import("./pages/home/home1.vue"), //详情页
        children:[
            {
                name: 'weibaoguanli',
                path: '/weibaoguanli',
                component: () => import("./pages/home/weibaoguanli/weibaoguanli.vue"), //详情页
            },
            {
                name: 'biaoguansunshang',
                path: '/biaoguansunshang',
                component: () => import("./pages/home/biaoguansunshang/biaoguansunshang.vue"), //详情页
            },
            {
                name: '表格模式',
                path: '/sunshangxiangqing',
                component: () => import("./pages/home/sunshangxiangqing/sunshangxiangqing.vue"), //表格模式
            },
        ]

    },
]





const rotuer = createRouter({
    /**
     * 路由模式
     * 需要引入对应的模式一般是creatWeb开头
     * 比如hash模式就是createWebHashHistory
     * 注意引入的是一个方法需要调用
     */
    history: createWebHashHistory(),
    /**
     * 路由表
     */
    routes,
});
rotuer.beforeEach((to, from, next) => {
    /**
     * 一般来说会在内部进行登录判断
     */
    // if (localStorage.getItem("token")) {
    //   next();
    // } else {
    //   next("/login");
    // }
    next();
});


export default rotuer;