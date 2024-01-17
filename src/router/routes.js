const Layout = () => import('@/layouts/Index.vue')
const Dashboard = () => import('@/views/dashboard/Index.vue');
const Invoice = () => import('@/views/invoice/Index.vue');

export default [
    {
        path: '/',
        component: Layout,
        meta: { authRequired: false },
        children: [
            {
                path: '/',
                name: 'app.dashboard',
                component: Dashboard
            },
            {
                path: '/invoice',
                name: 'app.invoice',
                component: Invoice
            },
        ]
    },

]
