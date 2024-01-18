import { maxLength } from '@vuelidate/validators';

const Layout = () => import('@/layouts/Index.vue')
const Dashboard = () => import('@/views/dashboard/Index.vue');
const Default = () => import('@/views/dashboard/default/Index.vue');
const Darkmenu = () => import('@/views/dashboard/dark menu/Index.vue');
const Basicelements = () => import('@/views/forms/basic elements/Index.vue');
const Groups = () => import('@/views/forms/Groups/Index.vue');
const Maxlength = () => import('@/views/forms/max length/Index.vue');

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
                path: '/default',
                name: 'app.default',
                component: Default
            },
            {
                path: '/dark-menu',
                name: 'app.dark-menu',
                component: Darkmenu
            },

            // =====================Forms

            {
                path: '/forms/basic-elements',
                name: 'app.basic-elements',
                component: Basicelements
            },
            
            // =============== GROUPS

            {
                path: '/forms/groups',
                name: 'app.groups',
                component: Groups
            },

            // ===================Max length

            {
                path: '/forms/max-length',
                name: 'app.max-length',
                component: Maxlength
            },


            // ========= invoice  
            {
                path: '/invoice',
                name: 'app.invoice',
                component: Invoice
            },
        ]
    },

]
