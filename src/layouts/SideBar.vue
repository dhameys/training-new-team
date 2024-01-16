<template>
    <aside
        id="logo-sidebar"
        :class="{ ' md:!w-[250px]': isSidebar }"
        class="print:hidden border border-bordercolor dark:border-dark-bordercolor fixed top-0 left-0 z-[80] h-screen pt-20 lg:pt-24 duration-500 w-[250px] md:w-[80px] bg-bgsidebar dark:bg-dark-bgsidebar -translate-x-full md:translate-x-0 lg:!translate-x-0 transition-all lg:!duration-500"
        aria-label="Sidebar"
        @mouseenter="onsidebar"
        @mouseleave="isSidebar = false"
    >
        <div class="h-full px-3 pb-4 overflow-y-auto">
            <ul class="space-y-2 font-medium">
                <!-- <li @click="active">
                    <router-link :to="{ name: 'app.dashboard' }" @click="openList('dashboard')" class="router-links transition flex items-center p-2 rounded-lg">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="w-[18.4px] h-[18.4px] text-primary dark:text-dark-darkone"
                            :class="{ 'dark:text-dark-primary text-primary': list === 'dashboard' }"
                        >
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                            <polyline points="9 22 9 12 15 12 15 22"></polyline>
                        </svg>
                        <span class="text-[15px] md:hidden lg:block font-normal text-darkone dark:text-dark-darkone ml-3" :class="{ 'text-primary dark:text-dark-primary ': list == 'dashboard', 'md:!block': isSidebar }">Dashboard</span>
                    </router-link>
                </li> -->
                <li>
                    <button @click="openList('dashboard')" type="button" class="w-full flex items-center justify-between p-2 text-darkone rounded-lg dark:text-dark-darkone">
                        <div class="flex items-center gap-3">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="w-[18.4px] h-[18.4px] text-primary dark:text-dark-darkone"
                                :class="{ 'dark:text-dark-primary text-primary': list === 'dashboard' }"
                            >
                                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                <polyline points="9 22 9 12 15 12 15 22"></polyline>
                            </svg>

                            <span class="text-[15px] md:hidden lg:block font-normal text-darkone dark:text-dark-darkone" :class="{ 'dark:text-dark-primary text-primary ': list === 'dashboard', 'md:!block': isSidebar }">Dashboard</span>
                        </div>
                        <div>
                            <span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="w-[14px] h-[14px] text-darksecondaryark:text-dark-darkone transform transition-transform duration-300 ease-in-out"
                                    :class="{ 'dark:text-dark-primary text-primary  rotate-90': list === 'dashboard' }"
                                >
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                </svg>
                            </span>
                        </div>
                    </button>
                    <!-- Dropdown menu -->
                    <transition @enter="enter" @after-enter="afterEnter" @leave="leave" name="expand">
                        <div v-if="list === 'dashboard'" id="dropdown" class="z-10 w-full">
                            <ul class="py-2 text-sm text-darkone dark:text-dark-darkone">
                                <li id="li2">
                                    <router-link :to="{ name: 'app.dashboard' }" href="#" @click="activeLink('sales')" :class="{ 'text-primary ': links == 'sales' }" class="block px-4 py-2 rounded-lg mx-2">
                                        <div class="flex items-center gap-3 cursor-pointer">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="20"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                class="stroke-1.5 w-[14px] h-[14px] text-[13px] text-lightDark dark:text-comment"
                                            >
                                                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                                            </svg>
                                            <span class="md:hidden lg:block capitalize text-xs hover:text-primary dark:hover:text-dark-primary text-lightDark dark:text-comment" :class="{ 'text-primary dark:text-dark-primary': links == 'sales', 'md:!block': isSidebar }">Sales</span>
                                        </div>
                                    </router-link>
                                </li>
                            </ul>
                        </div>
                    </transition>
                </li>

                <li @click="active">
                    <router-link :to="{ name: 'app.dashboard' }" @click="openList('reports')" class="router-links transition flex items-center p-2 rounded-lg">
                        <div class="flex">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="lucide lucide-filter w-[18.4px] h-[18.4px] text-primary dark:text-dark-darkone"
                                :class="{ 'dark:text-dark-primary text-primary ': list == 'reports' }"
                            >
                                <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
                            </svg>
                            <span class="text-[15px] md:hidden lg:block font-normal text-darkone dark:text-dark-darkone ml-3" :class="{ 'dark:text-dark-primary text-primary ': list == 'reports', 'md:!block': isSidebar }">Reports </span>
                        </div>
                    </router-link>
                </li>
            </ul>
        </div>
    </aside>
</template>

<script>
export default {
    name: 'Sidebar',

    data() {
        return {
            links: 'dashboard',
            pages: '',
            hover: '',
            // activeAccount: '',
            list: '',
            isSidebar: false
        }
    },
    methods: {
        onsidebar() {
            this.isSidebar = true
        },
        openList(val) {
            this.list = val
        },

        ishover(val) {
            this.hover = val
        },

        activeLink(val) {
            this.links = val
        },

        hover() {
            this.hover = true
        },

        enter(el) {
            el.style.height = 'auto'
            const height = getComputedStyle(el).height
            el.style.height = 0

            getComputedStyle(el)

            setTimeout(() => {
                el.style.height = height
            })
        },
        afterEnter(el) {
            el.style.height = 'auto'
        },
        leave(el) {
            el.style.height = getComputedStyle(el).height
            getComputedStyle(el)
            setTimeout(() => {
                el.style.height = 0
            })
        }
    }
}
</script>

<style scoped></style>
