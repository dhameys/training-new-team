const Layout = () => import('@/layouts/Index.vue')
const Dashboard = () => import('@/views/dashboard/Index.vue')
const Default = () => import('@/views/dashboard/default/Index.vue')
const Darkmenu = () => import('@/views/dashboard/dark menu/Index.vue')

//  App ==============================================================================
const app = () => import('@/views/App/Index.vue')
const editor = () => import('@/views/App/editor/Index.vue')
const mail = () => import('@/views/App/mail Box/Index.vue')
const chat = () => import('@/views/App/Chat/Index.vue')
const faq = () => import('@/views/App/FAQ/Index.vue')
// forms ===============================================================================
const Basicelements = () => import('@/views/forms/basic elements/Index.vue')
const Groups = () => import('@/views/forms/Groups/Index.vue')
const Maxlength = () => import('@/views/forms/max length/Index.vue')
const Layouts = () => import('@/views/forms/layouts/index.vue')

// Invoice ====================================================================
const Invoice = () => import('@/views/invoice/Index.vue')

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
const State = () => import('@/views/ui kits/state/Index.vue')
const Typography = () => import('@/views/ui kits/typography/Index.vue')
const Date = () => import('@/views/ui kits/date/Index.vue')

// Product ========================================================================
const product = () => import('@/views/Product/Index.vue')
const products = () => import('@/views/product/Products/Index.vue')
const Details = () => import('@/views/product/Product Details/Index.vue')
const cart = () => import('@/views/product/Cart/Index.vue')
const checkout = () => import('@/views/product/Checkout/Index.vue')
// Icons =============================================================
const icon = () => import('@/views/icon/Index.vue')
const fontawesomeicon = () => import('@/views/icon/fontawesome  icon/Index.vue')
const themefyicon = () => import('@/views/icon/themefy  icon/Index.vue')
// Animations =========================================================
const Animations = () => import('@/views/Animations/Index.vue')
const Animate = () => import('@/views/Animations/Animate/Index.vue')
const ScrollReveal = () => import('@/views/Animations/Scroll Reveal/Index.vue')
const TiltAnimation = () => import('@/views/Animations/Tilt Animation/Index.vue')
// Components =========================================================
const Components = () => import('@/views/Components/Index.vue')
const Accordions = () => import('@/views/Components/Accordions/Index.vue')
const Scrollable = () => import('@/views/Components/Scrollable/Index.vue')
const Carousel = () => import('@/views/Components/Carousel/Index.vue')
const Notifications = () => import('@/views/Components/Notifications/Index.vue')
const Pagination = () => import('@/views/Components/Pagination/Index.vue')


// Table ==============================================================
const table = () => import('@/views/Table/Index.vue')
const DataTable = () => import('@/views/Table/Data Table/Index.vue')
const bootstrap = () => import('@/views/Table/bootstrap/Index.vue')
// Card ==========================================================
const card = () => import('@/views/Card/Index.vue')
const basicCard = () => import('@/views/Card/Basic Card/Index.vue')
const themesCard = () => import('@/views/Card/Themes Cards/Index.vue')
const draggable_Card = () => import('@/views/Card/Draggable Card/Index.vue')
// =======================pages========================
const Login = () => import('@/views/pages/login/Index.vue')
const Register = () => import('@/views/pages/register/Index.vue')
const Error = () => import('@/views/pages/error 404/Index.vue')
const Error500 = () => import('@/views/pages/error 500/Index.vue')
const Forgetpassword = () => import('@/views/pages/forget password/Index.vue')
const Gallery = () => import('@/views/pages/gallery/Index.vue')
// =====================WIDGET====================
const Chart_boxes = () => import('@/views/widgets/chart boxes/Index.vue')
const Profile = () => import('@/views/widgets/profile/Index.vue')

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
                component: app
            },

            {
                path: '/app/editor',
                name: 'app.app.editor',
                component: editor
            },
            {
                path: '/app/mail',
                name: 'app.app.mail box',
                component: mail
            },
            {
                path: '/app/chat',
                name: 'app.app.chat',
                component: chat
            },
            {
                path: '/app/faq',
                name: 'app.app.faq',
                component: faq
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
            // {
            //     path: '/Calendar',
            //     name: 'app.Calendar',
            //     component: Calendar
            // },
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
                path: '/product',
                name: 'app.Product',
                component: product
            },
            {
                path: '/product/products',
                name: 'app.product.products',
                component: products
            },
            {
                path: '/product/Details',
                name: 'app.product.Details',
                component: Details
            },
            {
                path: '/product/Cart',
                name: 'app.product.Cart',
                component: cart
            },
            {
                path: '/product/checkout',
                name: 'app.product.checkout',
                component: checkout
            },
            // ======================Icons =================================
            {
                path: '/icon',
                name: 'app.icon',
                component: icon
            },
            {
                path: '/fontawesomeicons',
                name: 'app.fontawesomeicons',
                component: fontawesomeicon
            },
            {
                path: '/themefyicons',
                name: 'app.themefyicons',
                component: themefyicon
            },
            // ========================= Animations ========================
            {
                path: '/Animations',
                name: 'app.Animations',
                component: Animations
            },
            {
                path: '/Animate',
                name: 'app.Animate',
                component: Animate
            },
            {
                path: '/ScrollReveal',
                name: 'app.ScrollReveal',
                component: ScrollReveal
            },
            {
                path: '/TiltAnimation',
                name: 'app.TiltAnimation',
                component : TiltAnimation
            },
            // ========================= Components ========================
            {
                path: '/Components',
                name: 'app.Components',
                component: Components
            },
            {
                path: '/components/Accordions',
                name: 'app.components.Accordions',
                component: Accordions
            },
            {
                path: '/components/Scrollable',
                name: 'app.components.Scrollable',
                component: Scrollable
            },
            {
                path: '/components/Notifications',
                name: 'app.components.Notifications',
                component : Notifications
            },
            {
                path: '/components/Carousel',
                name: 'app.components.Carousel',
                component : Carousel
            },
            {
                path: '/components/Pagination',
                name: 'app.components.Pagination',
                component : Pagination
            },

            // ========================== Table =============================
            {
                path: '/table',
                name: 'app.Table',
                component: table
            },
            {
                path: '/table/DataTable',
                name: 'app.table.DataTable',
                component: DataTable
            },
            {
                path: 'table/bootstrap',
                name: 'app.table.bootstrap',
                component: bootstrap
            },
            //======================================= Card ========================
            {
                path: '/card',
                name: 'app.card',
                component: card
            },
            {
                path: '/card/BasicCard',
                name: 'app.card.BasicCard',
                component: basicCard
            },
            // {
            //     path: '/ThemesCard',
            //     name: 'app.ThemesCard',
            //     component: ThemesCard
            // },
            {
                path: '/card/ThemesCard',
                name: 'app.card.ThemesCard',
                component: themesCard
            },
            {
                path: '/card/DraggableCard',
                name: 'app.card.DraggableCard',
                component: draggable_Card
            },
        //  ===================pages========================
            {
                path: '/pages/login',
                name: 'app.pages.login',
                component: Login
            },
            {
                path: '/register',
                name: 'app.pages.register',
                component: Register
            },
            {
                path: '/error 404',
                name: 'app.pages.error 404',
                component: Error
            },
            {
                path: '/error 500',
                name: 'app.pages.error 500',
                component: Error500
            },
            {
                path: '/forget-password',
                name: 'app.pages.forget password',
                component: Forgetpassword
            },
            {
                path: 'pages/gallery',
                name: 'app.pages.gallery',
                component: Gallery
            },
            // =================widgets===========
            {
                path: 'widgets/chart-boxes',
                name: 'app.widgets.chart-boxes',
                component: Chart_boxes
            },
            {
                path: '/profile',
                name: 'app.widgets.profile',
                component: Profile
            },
        ]
    }
]
