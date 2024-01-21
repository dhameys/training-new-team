const Layout = () => import('@/layouts/Index.vue')
const Dashboard = () => import('@/views/dashboard/Index.vue');
const Default = () => import('@/views/dashboard/default/Index.vue');
const Darkmenu = () => import('@/views/dashboard/dark menu/Index.vue');

// forms ===============================================================================
const Basicelements = () => import('@/views/forms/basic elements/Index.vue');
const Groups = () => import('@/views/forms/Groups/Index.vue');
const Maxlength = () => import('@/views/forms/max length/Index.vue');
const Layouts = () => import('@/views/forms/layouts/index.vue')


// Invoice ====================================================================
const Invoice = () => import('@/views/invoice/Index.vue');

// Board =======================================================================
const Board = () => import('@/views/Board/Index.vue')

// ui kits==============================================================================
const Colors = () => import('@/views/ui kits/colors/Index.vue')
const alerts = () => import('@/views/ui kits/alerts/Index.vue')
const Buttons = () => import('@/views/ui kits/buttons/Index.vue')
const Modal = () => import('@/views/ui kits/modal/Index.vue')
const Droopdowns = () => import('@/views/ui kits/droopdowns/Index.vue')
const Badges = () => import('@/views/ui kits/badges/Index.vue')
const Loading = () => import('@/views/ui kits/loading/Index.vue')
const State  = () => import('@/views/ui kits/state/Index.vue')
const Typography  = () => import('@/views/ui kits/typography/Index.vue')
const Date  = () => import('@/views/ui kits/date/Index.vue')

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
            // Layouts ==============================
            {
                path: '/forms/layouts',
                name: 'app.layouts',
                component: Layouts
            },

            // ========= invoice  
            {
                path: '/invoice',
                name: 'app.invoice',
                component: Invoice
            },
            {
                path: '/Board',
                name: 'app.Board',
                component: Board
            },

            //========================= ui kits====================================================
            {
                path: '/ui-kits/colors',
                name: 'app.ui-kits.colors',
                component: Colors
            },
            {
                path: '/ui-kits/alerts',
                name: 'app.ui-kits.alerts',
                component: alerts
            },
            {
                path: '/ui-kits/buttons',
                name: 'app.ui-kits.buttons',
                component: Buttons
            },
            {
                path: '/ui-kits/modal',
                name: 'app.ui-kits.modal',
                component: Modal
            },
            {
                path: '/ui-kits/droopdowns',
                name: 'app.ui-kits.droopdowns',
                component: Droopdowns
            },
            {
                path: '/ui-kits/badges',
                name: 'app.ui-kits.badges',
                component: Badges
            },
            {
                path: '/ui-kits/loading',
                name: 'app.ui-kits.loading',
                component: Loading
            },
            {
                path: '/ui-kits/state',
                name: 'app.ui-kits.state',
                component: State
            },
            {
                path: '/ui-kits/typography',
                name: 'app.ui-kits.typography',
                component: Typography
            },
            {
                path: '/ui-kits/date',
                name: 'app.ui-kits.date',
                component: Date
            },
        ]
    }
]
