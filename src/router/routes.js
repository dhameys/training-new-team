const Layout = () => import('@/layouts/Index.vue')
const Dashboard = () => import('@/views/dashboard/Index.vue');
const Default = () => import('@/views/dashboard/default/Index.vue');
const Darkmenu = () => import('@/views/dashboard/dark menu/Index.vue');

//  App ==============================================================================
const App = () => import('@/views/App/Index.vue')
const Editor = () => import('@/views/App/editor/Index.vue')
const Mail = () => import('@/views/App/mail Box/Index.vue')
const Chat = () => import('@/views/App/Chat/Index.vue')
const FAQ = () => import('@/views/App/FAQ/Index.vue')
// forms ===============================================================================
const Basicelements = () => import('@/views/forms/basic elements/Index.vue');
const Groups = () => import('@/views/forms/Groups/Index.vue');
const Maxlength = () => import('@/views/forms/max length/Index.vue');
const Layouts = () => import('@/views/forms/layouts/index.vue')


// Invoice ====================================================================
const Invoice = () => import('@/views/invoice/Index.vue');


// Calander ====================================================================
const calander = () => import('@/views/Calander/Index.vue')
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

// Product ========================================================================
const Product = () => import('@/views/Product/Index.vue')
const Products = () => import('@/views/product/Products/Index.vue')
const Details = () => import('@/views/product/Product Details/Index.vue')
const Cart = () => import('@/views/product/Cart/Index.vue')
const Checkout = () => import('@/views/product/Checkout/Index.vue')
// Table ==============================================================
const Table = () => import('@/views/Table/Index.vue')
const DataTable = () => import('@/views/Table/Data Table/Index.vue')
const bootstrap = () => import('@/views/Table/bootstrap/Index.vue')
// Card ==========================================================
const Card = () => import('@/views/Card/Index.vue')
const BasicCard = () => import('@/views/Card/Basic Card/Index.vue')
const ThemesCard = () => import('@/views/Card/Themes Card/Index.vue')

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
            //  ===================== App =========
            {
                path: '/app',
                name: 'app.App',
                component: App
            },

            {
                path: '/editor',
                name: 'app.editor',
                component: Editor
            },
            {
                path: '/mail',
                name: 'app.mail',
                component: Mail
            },
            {
                path: '/Chat',
                name: 'app.Chat',
                component: Chat
            },
            {
                path: '/FAQ',
                name: 'app.FAQ',
                component: FAQ
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

            // ==============  Board =============

            {
                path: '/Board',
                name: 'app.Board',
                component: Board
            },




            // ================ calander ===========
            {
                path: '/calander',
                name: 'app.calander',
                component: calander
            },
            // =============  board ===================
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

            // =============================== product========================================================
            {
                path: '/Product',
                name: 'app.Product',
                component: Product
            },
            {
                path: '/Products',
                name: 'app.Products',
                component: Products
            },
            {
                path: '/Details',
                name: 'app.Details',
                component: Details
            },
            {
                path: '/Cart',
                name: 'app.Cart',
                component: Cart
            },
            {
                path: '/Checkout',
                name: 'app.Checkout',
                component: Checkout
            },
            // ========================== Table =============================
            {
                path: '/Table',
                name: 'app.Table',
                component: Table
            },
            {
                path: '/DataTable',
                name: 'app.DataTable',
                component: DataTable
            },
            {
                path: '/bootstrap',
                name: 'app.bootstrap',
                component: bootstrap
            },
         
        ]
    }
]
