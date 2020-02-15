export default {
    path: '/home', 
    name: 'home', 
    component: () => import('@/views/home/Home.vue'),
    children: [
        { path: 'city', name: 'city', component: () => import('@/views/home/childComps/City.vue') },
        { path: 'nowplaying', name: 'nowplaying', component: () => import('@/views/home/childComps/NowPlaying.vue') },
        { path: 'comingsoon', name: 'comingsoon', component: () => import('@/views/home/childComps/ComingSoon.vue') },
        { path: 'search', name: 'search', component: () => import('@/views/home/childComps/Search.vue') }
    ]
}