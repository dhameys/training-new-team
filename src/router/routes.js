const Layout = () => import('@/layouts/Index.vue')
const Dashboard = () => import('@/views/dashboard/Index.vue')
const Default = () => import('@/views/dashboard/default/Index.vue')
const Darkmenu = () => import('@/views/dashboard/dark menu/Index.vue')

//  App ==============================================================================
const App = () => import('@/views/App/Index.vue')
const Editor = () => import('@/views/App/editor/Index.vue')
const Mail = () => import('@/views/App/mail Box/Index.vue')
const Chat = () => import('@/views/App/Chat/Index.vue')
const FAQ = () => import('@/views/App/FAQ/Index.vue')
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
const Product = () => import('@/views/Product/Index.vue')
const Products = () => import('@/views/product/Products/Index.vue')
const Details = () => import('@/views/product/Product Details/Index.vue')
const Cart = () => import('@/views/product/Cart/Index.vue')
const Checkout = () => import('@/views/product/Checkout/Index.vue')
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
const Table = () => import('@/views/Table/Index.vue')
const DataTable = () => import('@/views/Table/Data Table/Index.vue')
const bootstrap = () => import('@/views/Table/bootstrap/Index.vue')
// Card ==========================================================
const card = () => import('@/views/Card/Index.vue')
const BasicCard = () => import('@/views/Card/Basic Card/Index.vue')
const ThemesCard = () => import('@/views/Card/Themes Cards/Index.vue')
const Draggable_Card = () => import('@/views/Card/Draggable Card/Index.vue')
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
                path: '/Accordions',
                name: 'app.Accordions',
                component: Accordions
            },
            {
                path: '/Scrollable',
                name: 'app.Scrollable',
                component: Scrollable
            },
            {
                path: '/Notifications',
                name: 'app.Notifications',
                component : Notifications
            },
            {
                path: '/Carousel',
                name: 'app.Carousel',
                component : Carousel
            },
            {
                path: '/Pagination',
                name: 'app.Pagination',
                component : Pagination
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
            //======================================= Card ========================
            {
                path: '/card',
                name: 'app.card',
                component: card
            },
            {
                path: '/BasicCard',
                name: 'app.BasicCard',
                component: BasicCard
            },
            // {
            //     path: '/ThemesCard',
            //     name: 'app.ThemesCard',
            //     component: ThemesCard
            // },
            {
                path: '/ThemesCard',
                name: 'app.ThemesCard',
                component: ThemesCard
            },
            {
                path: '/DraggableCard',
                name: 'app.DraggableCard',
                component: Draggable_Card
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
