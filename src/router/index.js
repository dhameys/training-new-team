import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

router.beforeEach(async (to, from, next) => {
    const loginPage = 'app.sign-in'
    const Home = 'app.home'
    const verify = 'app.verify'
    const cPassword = 'app.createPassword'
    const { authRequired } = to.meta

    if (to.name !== undefined) {
        if (authRequired) {
            const isUserAuthenticated = await isAuthenticated()
            if (!isUserAuthenticated) next({ name: loginPage })
            let nameArr = to?.name.split('.')
            let name = nameArr[nameArr.length - 1]
            const pathName = name.replace(/-/g, ' ')
           next()
        } else {
            next()
        }
    } else {
        next({ name: Home })
    }
})

export default router
