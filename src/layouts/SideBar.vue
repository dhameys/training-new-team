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
                <!-- ========================= dashboard =======================-->
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
                            Dashboard
                        </div>
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
                    </button>

                    <transition @enter="enter" @after-enter="afterEnter" @leave="leave" name="expand">
                        <div v-if="list === 'dashboard'" id="dropdown" class="z-10 w-full">
                            <ul class="py-2 text-sm text-darkone dark:text-dark-darkone">
                                <!--sales-->
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

                                <!-- default-->

                                <li id="li2">
                                    <router-link :to="{ name: 'app.default' }" href="#" @click="activeLink('default')" :class="{ 'text-primary ': links == 'default' }" class="block px-4 py-2 rounded-lg mx-2">
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
                                            <span class="md:hidden lg:block capitalize text-xs hover:text-primary dark:hover:text-dark-primary text-lightDark dark:text-comment" :class="{ 'text-primary dark:text-dark-primary': links == 'default', 'md:!block': isSidebar }">default</span>
                                        </div>
                                    </router-link>
                                </li>

                                <!-- Dark MENU -->

                                <li id="li2">
                                    <router-link :to="{ name: 'app.dark-menu' }" href="#" @click="activeLink('dark-menu')" :class="{ 'text-primary ': links == 'dark-menu' }" class="block px-4 py-2 rounded-lg mx-2">
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
                                            <span class="md:hidden lg:block capitalize text-xs hover:text-primary dark:hover:text-dark-primary text-lightDark dark:text-comment" :class="{ 'text-primary dark:text-dark-primary': links == 'dark menu', 'md:!block': isSidebar }">dark menu</span>
                                        </div>
                                    </router-link>
                                </li>
                            </ul>
                        </div>
                    </transition>
                </li>

                <!-- ======================== app ==============================-->
                <li>
                    <button @click="openList('app')" type="button" class="w-full flex items-center justify-between p-2 text-darkone rounded-lg dark:text-dark-darkone">
                        <div class="flex items-center gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-layout-grid">
                                <rect width="7" height="7" x="3" y="3" rx="1" />
                                <rect width="7" height="7" x="14" y="3" rx="1" />
                                <rect width="7" height="7" x="14" y="14" rx="1" />
                                <rect width="7" height="7" x="3" y="14" rx="1" />
                            </svg>
                            <span class="text-[15px] md:hidden lg:block font-normal text-darkone dark:text-dark-darkone" :class="{ 'dark:text-dark-primary text-primary ': list === 'app', 'md:!block': isSidebar }">Apps</span>
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
                                    :class="{ 'dark:text-dark-primary text-primary  rotate-90': list === 'app' }"
                                >
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                </svg>
                            </span>
                        </div>
                    </button>
                    <!-- Dropdown menu -->
                    <transition @enter="enter" @after-enter="afterEnter" @leave="leave" name="expand">
                        <div v-if="list === 'app'" id="dropdown" class="z-10 w-full">
                            <ul class="py-2 text-sm text-darkone dark:text-dark-darkone">
                                <!-- Editor -->
                                <li id="li2">
                                    <router-link :to="{ name: 'app.app.editor' }" href="#" @click="activeLink('editor')" :class="{ 'text-primary ': links == 'editor' }" class="block px-4 py-2 rounded-lg mx-2">
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
                                            <span class="md:hidden lg:block capitalize text-xs hover:text-primary dark:hover:text-dark-primary text-lightDark dark:text-comment" :class="{ 'text-primary dark:text-dark-primary': links == 'editor', 'md:!block': isSidebar }">Editor</span>
                                        </div>
                                    </router-link>
                                </li>

                                <!-- Mail Box-->

                                <li id="li2">
                                    <router-link :to="{ name: 'app.app.mail box' }" href="#" @click="activeLink('mail')" :class="{ 'text-primary ': links == 'mail' }" class="block px-4 py-2 rounded-lg mx-2">
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
                                            <span class="md:hidden lg:block capitalize text-xs hover:text-primary dark:hover:text-dark-primary text-lightDark dark:text-comment" :class="{ 'text-primary dark:text-dark-primary': links == 'mail', 'md:!block': isSidebar }">Mail Box</span>
                                        </div>
                                    </router-link>
                                </li>

                                <!--  chat -->

                                <li id="li2">
                                    <router-link :to="{ name: 'app.app.chat' }" href="#" @click="activeLink('chat')" :class="{ 'text-primary ': links == 'chat' }" class="block px-4 py-2 rounded-lg mx-2">
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
                                            <span class="md:hidden lg:block capitalize text-xs hover:text-primary dark:hover:text-dark-primary text-lightDark dark:text-comment" :class="{ 'text-primary dark:text-dark-primary': links == 'chat', 'md:!block': isSidebar }">Chat</span>
                                        </div>
                                    </router-link>
                                </li>
                                <!-- FAQ -->

                                <li id="li2">
                                    <router-link :to="{ name: 'app.app.faq' }" href="#" @click="activeLink('faq')" :class="{ 'text-primary ': links == 'faq' }" class="block px-4 py-2 rounded-lg mx-2">
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
                                            <span class="md:hidden lg:block capitalize text-xs hover:text-primary dark:hover:text-dark-primary text-lightDark dark:text-comment" :class="{ 'text-primary dark:text-dark-primary': links == 'faq', 'md:!block': isSidebar }">FAQ</span>
                                        </div>
                                    </router-link>
                                </li>
                            </ul>
                        </div>
                    </transition>
                </li>

                <!--=========================ui kits =========================-->
                <li>
                    <button @click="openList('ui-kits')" type="button" class="w-full flex items-center justify-between p-2 text-darkone rounded-lg dark:text-dark-darkone">
                        <div class="flex items-center gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cloud-rain-wind">
                                <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
                                <path d="m9.2 22 3-7" />
                                <path d="m9 13-3 7" />
                                <path d="m17 13-3 7" />
                            </svg>

                            <span class="text-[15px] md:hidden lg:block font-normal text-darkone dark:text-dark-darkone" :class="{ 'dark:text-dark-primary text-primary ': list === 'ui-kits', 'md:!block': isSidebar }">ui kits</span>
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
                                    :class="{ 'dark:text-dark-primary text-primary  rotate-90': list === 'ui-kits' }"
                                >
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                </svg>
                            </span>
                        </div>
                    </button>
                    <!-- Dropdown menu -->
                    <transition @enter="enter" @after-enter="afterEnter" @leave="leave" name="expand">
                        <div v-if="list === 'ui-kits'" id="dropdown" class="z-10 w-full">
                            <ul class="py-2 text-sm text-darkone dark:text-dark-darkone">
                                <!-- colors -->
                                <li id="li2">
                                    <router-link :to="{ name: 'app.ui-kits.colors' }" href="#" @click="activeLink('colors')" :class="{ 'text-primary ': links == 'colors' }" class="block px-4 py-2 rounded-lg mx-2">
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
                                            <span class="md:hidden lg:block capitalize text-xs hover:text-primary dark:hover:text-dark-primary text-lightDark dark:text-comment" :class="{ 'text-primary dark:text-dark-primary': links == 'colors', 'md:!block': isSidebar }">colors</span>
                                        </div>
                                    </router-link>
                                </li>

                                <!--alerts -->

                                <li id="li2">
                                    <router-link :to="{ name: 'app.ui-kits.alerts' }" href="#" @click="activeLink('alerts')" :class="{ 'text-primary ': links == 'alerts' }" class="block px-4 py-2 rounded-lg mx-2">
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
                                            <span class="md:hidden lg:block capitalize text-xs hover:text-primary dark:hover:text-dark-primary text-lightDark dark:text-comment" :class="{ 'text-primary dark:text-dark-primary': links == 'alerts', 'md:!block': isSidebar }">alerts</span>
                                        </div>
                                    </router-link>
                                </li>

                                <!--BUTTONS -->

                                <li id="li2">
                                    <router-link :to="{ name: 'app.ui-kits.buttons' }" href="#" @click="activeLink('buttons')" :class="{ 'text-primary ': links == 'buttons' }" class="block px-4 py-2 rounded-lg mx-2">
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
                                            <span class="md:hidden lg:block capitalize text-xs hover:text-primary dark:hover:text-dark-primary text-lightDark dark:text-comment" :class="{ 'text-primary dark:text-dark-primary': links == 'buttons', 'md:!block': isSidebar }">Buttons</span>
                                        </div>
                                    </router-link>
                                </li>

                                <!-- MODAL -->

                                <li id="li2">
                                    <router-link :to="{ name: 'app.ui-kits.modal' }" href="#" @click="activeLink('modal')" :class="{ 'text-primary ': links == 'modal' }" class="block px-4 py-2 rounded-lg mx-2">
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
                                            <span class="md:hidden lg:block capitalize text-xs hover:text-primary dark:hover:text-dark-primary text-lightDark dark:text-comment" :class="{ 'text-primary dark:text-dark-primary': links == 'modal', 'md:!block': isSidebar }">modal</span>
                                        </div>
                                    </router-link>
                                </li>

                                <!-- droopdowns -->

                                <li id="li2">
                                    <router-link :to="{ name: 'app.ui-kits.droopdowns' }" href="#" @click="activeLink('droopdowns')" :class="{ 'text-primary ': links == 'droopdowns' }" class="block px-4 py-2 rounded-lg mx-2">
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
                                            <span class="md:hidden lg:block capitalize text-xs hover:text-primary dark:hover:text-dark-primary text-lightDark dark:text-comment" :class="{ 'text-primary dark:text-dark-primary': links == 'droopdowns', 'md:!block': isSidebar }">DroopDowns</span>
                                        </div>
                                    </router-link>
                                </li>

                                <!--Badges -->

                                <li id="li2">
                                    <router-link :to="{ name: 'app.ui-kits.badges' }" href="#" @click="activeLink('badges')" :class="{ 'text-primary ': links == 'badges' }" class="block px-4 py-2 rounded-lg mx-2">
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
                                            <span class="md:hidden lg:block capitalize text-xs hover:text-primary dark:hover:text-dark-primary text-lightDark dark:text-comment" :class="{ 'text-primary dark:text-dark-primary': links == 'modal', 'md:!block': isSidebar }">Badges</span>
                                        </div>
                                    </router-link>
                                </li>

                                <!--loading indicators-->

                                <li id="li2">
                                    <router-link :to="{ name: 'app.ui-kits.loading' }" href="#" @click="activeLink('loading ')" :class="{ 'text-primary ': links == 'loading indicators' }" class="block px-4 py-2 rounded-lg mx-2">
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
                                            <span class="md:hidden lg:block capitalize text-xs hover:text-primary dark:hover:text-dark-primary text-lightDark dark:text-comment" :class="{ 'text-primary dark:text-dark-primary': links == 'loading ', 'md:!block': isSidebar }">loading indicators</span>
                                        </div>
                                    </router-link>
                                </li>

                                <!-- state color-->

                                <li id="li2">
                                    <router-link :to="{ name: 'app.ui-kits.state' }" href="#" @click="activeLink('state')" :class="{ 'text-primary ': links == 'state color' }" class="block px-4 py-2 rounded-lg mx-2">
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
                                            <span class="md:hidden lg:block capitalize text-xs hover:text-primary dark:hover:text-dark-primary text-lightDark dark:text-comment" :class="{ 'text-primary dark:text-dark-primary': links == 'state', 'md:!block': isSidebar }">state color</span>
                                        </div>
                                    </router-link>
                                </li>

                                <!--typography -->

                                <li id="li2">
                                    <router-link :to="{ name: 'app.ui-kits.typography' }" href="#" @click="activeLink('typography')" :class="{ 'text-primary ': links == 'typography' }" class="block px-4 py-2 rounded-lg mx-2">
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
                                            <span class="md:hidden lg:block capitalize text-xs hover:text-primary dark:hover:text-dark-primary text-lightDark dark:text-comment" :class="{ 'text-primary dark:text-dark-primary': links == 'typography', 'md:!block': isSidebar }">typography</span>
                                        </div>
                                    </router-link>
                                </li>

                                <!--Date bicker-->

                                <li id="li2">
                                    <router-link :to="{ name: 'app.ui-kits.date' }" href="#" @click="activeLink('date')" :class="{ 'text-primary ': links == 'Date bicker' }" class="block px-4 py-2 rounded-lg mx-2">
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
                                            <span class="md:hidden lg:block capitalize text-xs hover:text-primary dark:hover:text-dark-primary text-lightDark dark:text-comment" :class="{ 'text-primary dark:text-dark-primary': links == 'Date bicker', 'md:!block': isSidebar }">Date bicker</span>
                                        </div>
                                    </router-link>
                                </li>
                            </ul>
                        </div>
                    </transition>
                </li>

                <!-- =========================== FORMS ========================-->
                <li>
                    <button @click="openList('forms')" type="button" class="w-full flex items-center justify-between p-2 text-darkone rounded-lg dark:text-dark-darkone">
                        <div class="flex items-center gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-disc-album">
                                <rect width="18" height="18" x="3" y="3" rx="2" />
                                <circle cx="12" cy="12" r="5" />
                                <path d="M12 12h.01" />
                            </svg>

                            <span class="text-[15px] md:hidden lg:block font-normal text-darkone dark:text-dark-darkone" :class="{ 'dark:text-dark-primary text-primary ': list === 'forms', 'md:!block': isSidebar }">Forms</span>
                        </div>
                        <span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="w-[14px] h-[14px] text-darksecondaryark:text-dark-darkone transform transition-transform duration-300 ease-in-out"
                                :class="{ 'dark:text-dark-primary text-primary  rotate-90': list === 'forms' }"
                            >
                                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </span>
                    </button>

                    <!-- Dropdown menu -->
                    <transition @enter="enter" @after-enter="afterEnter" @leave="leave" name="expand">
                        <div v-if="list === 'forms'" id="dropdown" class="z-10 w-full">
                            <ul class="py-2 text-sm text-darkone dark:text-dark-darkone">
                                <!--  Basic Elements -->
                                <li id="li2">
                                    <router-link :to="{ name: 'app.basic-elements' }" href="#" @click="activeLink('basic-elements')" :class="{ 'text-primary ': links == 'basic-elements' }" class="block px-4 py-2 rounded-lg mx-2">
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
                                            <span class="md:hidden lg:block capitalize text-xs hover:text-primary dark:hover:text-dark-primary text-lightDark dark:text-comment" :class="{ 'text-primary dark:text-dark-primary': links == 'basic-elements', 'md:!block': isSidebar }">Basic Elements</span>
                                        </div>
                                    </router-link>
                                </li>

                                <!-- GROUPS-->

                                <li id="li2">
                                    <router-link :to="{ name: 'app.groups' }" href="#" @click="activeLink('groups')" :class="{ 'text-primary ': links == 'groups' }" class="block px-4 py-2 rounded-lg mx-2">
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
                                            <span class="md:hidden lg:block capitalize text-xs hover:text-primary dark:hover:text-dark-primary text-lightDark dark:text-comment" :class="{ 'text-primary dark:text-dark-primary': links == 'groups', 'md:!block': isSidebar }">Groups</span>
                                        </div>
                                    </router-link>
                                </li>

                                <!--Max length-->

                                <li id="li2">
                                    <router-link :to="{ name: 'app.max-length' }" href="#" @click="activeLink('max-length')" :class="{ 'text-primary ': links == 'max-length' }" class="block px-4 py-2 rounded-lg mx-2">
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
                                            <span class="md:hidden lg:block capitalize text-xs hover:text-primary dark:hover:text-dark-primary text-lightDark dark:text-comment" :class="{ 'text-primary dark:text-dark-primary': links == 'max-length', 'md:!block': isSidebar }">Max Length</span>
                                        </div>
                                    </router-link>
                                </li>

                                <!--Layouts-->

                                <li id="li2">
                                    <router-link :to="{ name: 'app.layouts' }" href="#" @click="activeLink('layouts')" :class="{ 'text-primary ': links == 'layouts' }" class="block px-4 py-2 rounded-lg mx-2">
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
                                            <span class="md:hidden lg:block capitalize text-xs hover:text-primary dark:hover:text-dark-primary text-lightDark dark:text-comment" :class="{ 'text-primary dark:text-dark-primary': links == 'layouts', 'md:!block': isSidebar }">layouts</span>
                                        </div>
                                    </router-link>
                                </li>
                            </ul>
                        </div>
                    </transition>
                </li>

                <!-- ========================== Board ==========================-->
                <li @click="active">
                    <router-link :to="{ name: 'app.Board' }" @click="openList('Board')" class="router-links transition flex items-center p-2 rounded-lg">
                        <div class="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-alert-triangle">
                                <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
                                <path d="M12 9v4" />
                                <path d="M12 17h.01" />
                            </svg>
                            <span class="text-[15px] md:hidden lg:block font-normal text-darkone dark:text-dark-darkone ml-3" :class="{ 'dark:text-dark-primary text-primary ': list == 'Board', 'md:!block': isSidebar }">Board </span>
                        </div>
                    </router-link>
                </li>

                <!-- ======================== invoice ===========================-->
                <li @click="active">
                    <router-link :to="{ name: 'app.invoice' }" @click="openList('invoices')" class="router-links transition flex items-center p-2 rounded-lg">
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
                                class="lucide lucide-file-line-chart lucide lucide-filter w-[18.4px] h-[18.4px] text-primary dark:text-dark-darkone"
                                :class="{ 'dark:text-dark-primary text-primary ': list == 'reports' }"
                            >
                                <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                                <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                                <path d="m16 13-3.5 3.5-2-2L8 17" />
                            </svg>
                            <span class="text-[15px] md:hidden lg:block font-normal text-darkone dark:text-dark-darkone ml-3" :class="{ 'dark:text-dark-primary text-primary ': list == 'invoices', 'md:!block': isSidebar }">Invoices </span>
                        </div>
                    </router-link>
                </li>

                <!-- =======================  calander ===========================-->
                <li @click="active">
                    <router-link :to="{ name: 'app.calander' }" @click="openList('calander')" class="router-links transition flex items-center p-2 rounded-lg">
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
                                class="lucide lucide-file-line-chart lucide lucide-filter w-[18.4px] h-[18.4px] text-primary dark:text-dark-darkone"
                                :class="{ 'dark:text-dark-primary text-primary ': list == 'reports' }"
                            >
                                <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                                <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                                <path d="m16 13-3.5 3.5-2-2L8 17" />
                            </svg>
                            <span class="text-[15px] md:hidden lg:block font-normal text-darkone dark:text-dark-darkone ml-3" :class="{ 'dark:text-dark-primary text-primary ': list == 'calander', 'md:!block': isSidebar }">calander </span>
                        </div>
                    </router-link>
                </li>

                <!-- ==========================products====================== -->
                <li>
                    <button @click="openList('product')" type="button" class="w-full flex items-center justify-between p-2 text-darkone rounded-lg dark:text-dark-darkone">
                        <div class="flex items-center gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-cart">
                                <circle cx="8" cy="21" r="1" />
                                <circle cx="19" cy="21" r="1" />
                                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                            </svg>

                            <span class="text-[15px] md:hidden lg:block font-normal text-darkone dark:text-dark-darkone" :class="{ 'dark:text-dark-primary text-primary ': list === 'product', 'md:!block': isSidebar }">Products</span>
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
                                    :class="{ 'dark:text-dark-primary text-primary  rotate-90': list === 'product' }"
                                >
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                </svg>
                            </span>
                        </div>
                    </button>
                    <!-- Dropdown menu -->
                    <transition @enter="enter" @after-enter="afterEnter" @leave="leave" name="expand">
                        <div v-if="list === 'product'" id="dropdown" class="z-10 w-full">
                            <ul class="py-2 text-sm text-darkone dark:text-dark-darkone">
                                <!--Product-->
                                <li id="li2">
                                    <router-link :to="{ name: 'app.product.products' }" href="#" @click="activeLink('products')" :class="{ 'text-primary ': links == 'products' }" class="block px-4 py-2 rounded-lg mx-2">
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
                                            <span class="md:hidden lg:block capitalize text-xs hover:text-primary dark:hover:text-dark-primary text-lightDark dark:text-comment" :class="{ 'text-primary dark:text-dark-primary': links == 'products', 'md:!block': isSidebar }">Products</span>
                                        </div>
                                    </router-link>
                                </li>

                                <!-- Product Details-->

                                <li id="li2">
                                    <router-link :to="{ name: 'app.product.Details' }" href="#" @click="activeLink('Details')" :class="{ 'text-primary ': links == 'Details' }" class="block px-4 py-2 rounded-lg mx-2">
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
                                            <span class="md:hidden lg:block capitalize text-xs hover:text-primary dark:hover:text-dark-primary text-lightDark dark:text-comment" :class="{ 'text-primary dark:text-dark-primary': links == 'Details', 'md:!block': isSidebar }">Product Details</span>
                                        </div>
                                    </router-link>
                                </li>

                                <!--cart-->

                                <li id="li2">
                                    <router-link :to="{ name: 'app.product.Cart' }" href="#" @click="activeLink('cart')" :class="{ 'text-primary ': links == 'cart' }" class="block px-4 py-2 rounded-lg mx-2">
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
                                            <span class="md:hidden lg:block capitalize text-xs hover:text-primary dark:hover:text-dark-primary text-lightDark dark:text-comment" :class="{ 'text-primary dark:text-dark-primary': links == 'cart', 'md:!block': isSidebar }">Carts</span>
                                        </div>
                                    </router-link>
                                </li>
                                <!--Checkout-->

                                <li id="li2">
                                    <router-link :to="{ name: 'app.product.checkout' }" href="#" @click="activeLink('checkout')" :class="{ 'text-primary ': links == 'checkout' }" class="block px-4 py-2 rounded-lg mx-2">
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
                                            <span class="md:hidden lg:block capitalize text-xs hover:text-primary dark:hover:text-dark-primary text-lightDark dark:text-comment" :class="{ 'text-primary dark:text-dark-primary': links == 'checkout', 'md:!block': isSidebar }">Checkout</span>
                                        </div>
                                    </router-link>
                                </li>
                            </ul>
                        </div>
                    </transition>
                </li>

                <!-- ============================ Icons =====================-->
                <li>
                    <button @click="openList('icons')" type="button" class="w-full flex items-center justify-between p-2 text-darkone rounded-lg dark:text-dark-darkone">
                        <div class="flex items-center gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-credit-card">
                                <rect width="20" height="14" x="2" y="5" rx="2" />
                                <line x1="2" x2="22" y1="10" y2="10" />
                            </svg>

                            <span class="text-[15px] md:hidden lg:block font-normal text-darkone dark:text-dark-darkone" :class="{ 'dark:text-dark-primary text-primary ': list === 'icnos', 'md:!block': isSidebar }">icons</span>
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
                                    :class="{ 'dark:text-dark-primary text-primary  rotate-90': list === 'icons' }"
                                >
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                </svg>
                            </span>
                        </div>
                    </button>
                    <!-- Dropdown menu -->
                    <transition @enter="enter" @after-enter="afterEnter" @leave="leave" name="expand">
                        <div v-if="list === 'icons'" id="dropdown" class="z-10 w-full">
                            <ul class="py-2 text-sm text-darkone dark:text-dark-darkone">
                                <!--  fontawesome icons -->
                                <li id="li2">
                                    <router-link :to="{ name: 'app.fontawesomeicons' }" href="#" @click="activeLink('fontawesomeicon')" :class="{ 'text-primary ': links == 'fontawesomeicon' }" class="block px-4 py-2 rounded-lg mx-2">
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
                                            <span class="md:hidden lg:block capitalize text-xs hover:text-primary dark:hover:text-dark-primary text-lightDark dark:text-comment" :class="{ 'text-primary dark:text-dark-primary': links == 'fontawesomeicon', 'md:!block': isSidebar }"
                                                >fontawesome icons</span
                                            >
                                        </div>
                                    </router-link>
                                </li>
                                <!--  themefy icons -->

                                <li id="li2">
                                    <router-link :to="{ name: 'app.themefyicons' }" href="#" @click="activeLink('themefyicon')" :class="{ 'text-primary ': links == 'themefyicon' }" class="block px-4 py-2 rounded-lg mx-2">
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
                                            <span class="md:hidden lg:block capitalize text-xs hover:text-primary dark:hover:text-dark-primary text-lightDark dark:text-comment" :class="{ 'text-primary dark:text-dark-primary': links == 'themefyicon', 'md:!block': isSidebar }">themfy icons</span>
                                        </div>
                                    </router-link>
                                </li>
                            </ul>
                        </div>
                    </transition>
                </li>

                <!-- ==========================Animations======================== -->
                <li>
                    <button @click="openList('Animations')" type="button" class="w-full flex items-center justify-between p-2 text-darkone rounded-lg dark:text-dark-darkone">
                        <div class="flex items-center gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right-left">
                                <path d="m16 3 4 4-4 4" />
                                <path d="M20 7H4" />
                                <path d="m8 21-4-4 4-4" />
                                <path d="M4 17h16" />
                            </svg>

                            <span class="text-[15px] md:hidden lg:block font-normal text-darkone dark:text-dark-darkone" :class="{ 'dark:text-dark-primary text-primary ': list === 'Animations', 'md:!block': isSidebar }">Animations</span>
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
                                    :class="{ 'dark:text-dark-primary text-primary  rotate-90': list === 'Animations' }"
                                >
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                </svg>
                            </span>
                        </div>
                    </button>
                    <!-- Dropdown menu -->
                    <transition @enter="enter" @after-enter="afterEnter" @leave="leave" name="expand">
                        <div v-if="list === 'Animations'" id="dropdown" class="z-10 w-full">
                            <ul class="py-2 text-sm text-darkone dark:text-dark-darkone">
                                <!--Product-->
                                <li id="li2">
                                    <router-link :to="{ name: 'app.Animate' }" href="#" @click="activeLink('Animate')" :class="{ 'text-primary ': links == 'Animate' }" class="block px-4 py-2 rounded-lg mx-2">
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
                                            <span class="md:hidden lg:block capitalize text-xs hover:text-primary dark:hover:text-dark-primary text-lightDark dark:text-comment" :class="{ 'text-primary dark:text-dark-primary': links == 'Animate', 'md:!block': isSidebar }">Animate</span>
                                        </div>
                                    </router-link>
                                </li>

                                <!--Scroll Reveal-->

                                <li id="li2">
                                    <router-link :to="{ name: 'app.ScrollReveal' }" href="#" @click="activeLink('ScrollReveal')" :class="{ 'text-primary ': links == 'ScrollReveal' }" class="block px-4 py-2 rounded-lg mx-2">
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
                                            <span class="md:hidden lg:block capitalize text-xs hover:text-primary dark:hover:text-dark-primary text-lightDark dark:text-comment" :class="{ 'text-primary dark:text-dark-primary': links == 'ScrollReveal', 'md:!block': isSidebar }">ScrollReveal</span>
                                        </div>
                                    </router-link>
                                </li>
                                <!--Tilt Animation-->

                                <li id="li2">
                                    <router-link :to="{ name: 'app.TiltAnimation' }" href="#" @click="activeLink('TiltAnimation')" :class="{ 'text-primary ': links == 'TiltAnimation' }" class="block px-4 py-2 rounded-lg mx-2">
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
                                            <span class="md:hidden lg:block capitalize text-xs hover:text-primary dark:hover:text-dark-primary text-lightDark dark:text-comment" :class="{ 'text-primary dark:text-dark-primary': links == 'TiltAnimation', 'md:!block': isSidebar }">Tilt Animation</span>
                                        </div>
                                    </router-link>
                                </li>
                            </ul>
                        </div>
                    </transition>
                </li>
                
                  <!--=========================Components =========================-->
                  <li>
                    <button @click="openList('Components')" type="button" class="w-full flex items-center justify-between p-2 text-darkone rounded-lg dark:text-dark-darkone">
                        <div class="flex items-center gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-component"><path d="M5.5 8.5 9 12l-3.5 3.5L2 12l3.5-3.5Z"/><path d="m12 2 3.5 3.5L12 9 8.5 5.5 12 2Z"/><path d="M18.5 8.5 22 12l-3.5 3.5L15 12l3.5-3.5Z"/><path d="m12 15 3.5 3.5L12 22l-3.5-3.5L12 15Z"/></svg>

                            <span class="text-[15px] md:hidden lg:block font-normal text-darkone dark:text-dark-darkone" :class="{ 'dark:text-dark-primary text-primary ': list === 'Components', 'md:!block': isSidebar }">Components</span>
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
                                    :class="{ 'dark:text-dark-primary text-primary  rotate-90': list === 'Components' }"
                                >
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                </svg>
                            </span>
                        </div>
                    </button>
                    <!-- Dropdown menu -->
                    <transition @enter="enter" @after-enter="afterEnter" @leave="leave" name="expand">
                        <div v-if="list === 'Components'" id="dropdown" class="z-10 w-full">
                            <ul class="py-2 text-sm text-darkone dark:text-dark-darkone">
                                <!-- Accordions -->
                                <li id="li2">
                                    <router-link :to="{ name: 'app.components.Accordions' }" href="#" @click="activeLink('Accordions')" :class="{ 'text-primary ': links == 'Accordions' }" class="block px-4 py-2 rounded-lg mx-2">
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
                                            <span class="md:hidden lg:block capitalize text-xs hover:text-primary dark:hover:text-dark-primary text-lightDark dark:text-comment" :class="{ 'text-primary dark:text-dark-primary': links == 'Accordions', 'md:!block': isSidebar }">Accordions</span>
                                        </div>
                                    </router-link>
                                </li>

                                <!--Scrollable-->

                                <li id="li2">
                                    <router-link :to="{ name: 'app.components.Scrollable' }" href="#" @click="activeLink('Scrollable')" :class="{ 'text-primary ': links == 'Scrollable' }" class="block px-4 py-2 rounded-lg mx-2">
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
                                            <span class="md:hidden lg:block capitalize text-xs hover:text-primary dark:hover:text-dark-primary text-lightDark dark:text-comment" :class="{ 'text-primary dark:text-dark-primary': links == 'Scrollable', 'md:!block': isSidebar }">Scrollable</span>
                                        </div>
                                    </router-link>
                                </li>

                                <!--Notifications-->

                                <li id="li2">
                                    <router-link :to="{ name: 'app.components.Notifications' }" href="#" @click="activeLink('Notifications')" :class="{ 'text-primary ': links == 'Notifications' }" class="block px-4 py-2 rounded-lg mx-2">
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
                                            <span class="md:hidden lg:block capitalize text-xs hover:text-primary dark:hover:text-dark-primary text-lightDark dark:text-comment" :class="{ 'text-primary dark:text-dark-primary': links == 'Notifications', 'md:!block': isSidebar }">Notifications</span>
                                        </div>
                                    </router-link>
                                </li>

                                <!-- Carousel -->

                                <li id="li2">
                                    <router-link :to="{ name: 'app.components.Carousel' }" href="#" @click="activeLink('Carousel')" :class="{ 'text-primary ': links == 'Carousel' }" class="block px-4 py-2 rounded-lg mx-2">
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
                                            <span class="md:hidden lg:block capitalize text-xs hover:text-primary dark:hover:text-dark-primary text-lightDark dark:text-comment" :class="{ 'text-primary dark:text-dark-primary': links == 'Carousel', 'md:!block': isSidebar }">Carousel</span>
                                        </div>
                                    </router-link>
                                </li>

                                <!-- Pagination -->

                                <li id="li2">
                                    <router-link :to="{ name: 'app.components.Pagination' }" href="#" @click="activeLink('Pagination')" :class="{ 'text-primary ': links == 'Pagination' }" class="block px-4 py-2 rounded-lg mx-2">
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
                                            <span class="md:hidden lg:block capitalize text-xs hover:text-primary dark:hover:text-dark-primary text-lightDark dark:text-comment" :class="{ 'text-primary dark:text-dark-primary': links == 'Pagination', 'md:!block': isSidebar }">Pagination</span>
                                        </div>
                                    </router-link>
                                </li>

                            </ul>
                        </div>
                    </transition>
                </li>

                <!-- ================================= Tables ==============-->
                <li>
                    <button @click="openList('table')" type="button" class="w-full flex items-center justify-between p-2 text-darkone rounded-lg dark:text-dark-darkone">
                        <div class="flex items-center gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-table">
                                <path d="M12 3v18" />
                                <rect width="18" height="18" x="3" y="3" rx="2" />
                                <path d="M3 9h18" />
                                <path d="M3 15h18" />
                            </svg>

                            <span class="text-[15px] md:hidden lg:block font-normal text-darkone dark:text-dark-darkone" :class="{ 'dark:text-dark-primary text-primary ': list === 'table', 'md:!block': isSidebar }">Table</span>
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
                                    :class="{ 'dark:text-dark-primary text-primary  rotate-90': list === 'table' }"
                                >
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                </svg>
                            </span>
                        </div>
                    </button>
                    <!-- Dropdown menu -->
                    <transition @enter="enter" @after-enter="afterEnter" @leave="leave" name="expand">
                        <div v-if="list === 'table'" id="dropdown" class="z-10 w-full">
                            <lu class="py-2 text-sm text-darkone dark:text-dark-darkone">
                                <!-- DataTable -->
                                <li id="li2">
                                    <router-link :to="{ name: 'app.table.DataTable' }" href="#" @click="activeLink('DataTable')" :class="{ 'text-primary ': links == 'DataTable' }" class="block px-4 py-2 rounded-lg mx-2">
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
                                            <span class="md:hidden lg:block capitalize text-xs hover:text-primary dark:hover:text-dark-primary text-lightDark dark:text-comment" :class="{ 'text-primary dark:text-dark-primary': links == 'DataTable', 'md:!block': isSidebar }">Data Table</span>
                                        </div>
                                    </router-link>
                                </li>

                                <!-- =================== bootstrap=================== -->

                                <li id="li2">
                                    <router-link :to="{ name: 'app.table.bootstrap' }" href="#" @click="activeLink('bootstrap')" :class="{ 'text-primary ': links == 'bootstrap' }" class="block px-4 py-2 rounded-lg mx-2">
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
                                            <span class="md:hidden lg:block capitalize text-xs hover:text-primary dark:hover:text-dark-primary text-lightDark dark:text-comment" :class="{ 'text-primary dark:text-dark-primary': links == 'bootstrap', 'md:!block': isSidebar }">bootstrap</span>
                                        </div>
                                    </router-link>
                                </li>
                            </lu>
                        </div>
                    </transition>
                </li>

                <!-- ============================ cards ====================-->
                <li>
                    <button @click="openList('card')" type="button" class="w-full flex items-center justify-between p-2 text-darkone rounded-lg dark:text-dark-darkone">
                        <div class="flex items-center gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-credit-card">
                                <rect width="20" height="14" x="2" y="5" rx="2" />
                                <line x1="2" x2="22" y1="10" y2="10" />
                            </svg>

                            <span class="text-[15px] md:hidden lg:block font-normal text-darkone dark:text-dark-darkone" :class="{ 'dark:text-dark-primary text-primary ': list === 'card', 'md:!block': isSidebar }">cards</span>
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
                                    :class="{ 'dark:text-dark-primary text-primary  rotate-90': list === 'card' }"
                                >
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                </svg>
                            </span>
                        </div>
                    </button>
                    <!-- Dropdown menu -->
                    <transition @enter="enter" @after-enter="afterEnter" @leave="leave" name="expand">
                        <div v-if="list === 'card'" id="dropdown" class="z-10 w-full">
                            <ul class="py-2 text-sm text-darkone dark:text-dark-darkone">
                                <!-- ======== Basic Card =========== -->
                                <li id="li2">
                                    <router-link :to="{ name: 'app.card.BasicCard' }" href="#" @click="activeLink('basicCard')" :class="{ 'text-primary ': links == 'basicCard' }" class="block px-4 py-2 rounded-lg mx-2">
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
                                            <span class="md:hidden lg:block capitalize text-xs hover:text-primary dark:hover:text-dark-primary text-lightDark dark:text-comment" :class="{ 'text-primary dark:text-dark-primary': links == 'basicCard', 'md:!block': isSidebar }">Basic Card</span>
                                        </div>
                                    </router-link>
                                </li>

                                <!-- =================== Themes Card =================== -->

                                <li id="li2">
                                    <router-link :to="{ name: 'app.card.ThemesCard' }" href="#" @click="activeLink('themesCard')" :class="{ 'text-primary ': links == 'themesCard' }" class="block px-4 py-2 rounded-lg mx-2">
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
                                            <span class="md:hidden lg:block capitalize text-xs hover:text-primary dark:hover:text-dark-primary text-lightDark dark:text-comment" :class="{ 'text-primary dark:text-dark-primary': links == 'themesCard', 'md:!block': isSidebar }">Themes Card</span>
                                        </div>
                                    </router-link>
                                </li>

                                <!-- =================================================  Draggable Card  ========================================================= -->

                                <li id="li2">
                                    <router-link :to="{ name: 'app.card.DraggableCard' }" href="#" @click="activeLink('draggable_Card')" :class="{ 'text-primary ': links == 'draggable_Card' }" class="block px-4 py-2 rounded-lg mx-2">
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
                                            <span class="md:hidden lg:block capitalize text-xs hover:text-primary dark:hover:text-dark-primary text-lightDark dark:text-comment" :class="{ 'text-primary dark:text-dark-primary': links == 'draggable_Card', 'md:!block': isSidebar }">Draggable Card</span>
                                        </div>
                                    </router-link>
                                </li>
                            </ul>
                        </div>
                    </transition>
                </li>

                <!-- ======================pages====================== -->
                <li>
                    <button @click="openList('pages')" type="button" class="w-full flex items-center justify-between p-2 text-darkone rounded-lg dark:text-dark-darkone">
                        <div class="flex items-center gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-layers-3">
                                <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
                                <path d="m6.08 9.5-3.5 1.6a1 1 0 0 0 0 1.81l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9a1 1 0 0 0 0-1.83l-3.5-1.59" />
                                <path d="m6.08 14.5-3.5 1.6a1 1 0 0 0 0 1.81l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9a1 1 0 0 0 0-1.83l-3.5-1.59" />
                            </svg>

                            <span class="text-[15px] md:hidden lg:block font-normal text-darkone dark:text-dark-darkone" :class="{ 'dark:text-dark-primary text-primary ': list === 'pages', 'md:!block': isSidebar }">pages</span>
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
                                    :class="{ 'dark:text-dark-primary text-primary  rotate-90': list === 'pages' }"
                                >
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                </svg>
                            </span>
                        </div>
                    </button>
                    <!-- Dropdown menu -->
                    <transition @enter="enter" @after-enter="afterEnter" @leave="leave" name="expand">
                        <div v-if="list === 'pages'" id="dropdown" class="z-10 w-full">
                            <ul class="py-2 text-sm text-darkone dark:text-dark-darkone">
                                <!-- login -->
                                <li id="li2">
                                    <router-link :to="{ name: 'app.pages.login' }" href="#" @click="activeLink('login')" :class="{ 'text-primary ': links == 'login' }" class="block px-4 py-2 rounded-lg mx-2">
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
                                            <span class="md:hidden lg:block capitalize text-xs hover:text-primary dark:hover:text-dark-primary text-lightDark dark:text-comment" :class="{ 'text-primary dark:text-dark-primary': links == 'login', 'md:!block': isSidebar }">login</span>
                                        </div>
                                    </router-link>
                                </li>

                                <!--register -->

                                <li id="li2">
                                    <router-link :to="{ name: 'app.pages.register' }" href="#" @click="activeLink('registrer')" :class="{ 'text-primary ': links == 'register' }" class="block px-4 py-2 rounded-lg mx-2">
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
                                            <span class="md:hidden lg:block capitalize text-xs hover:text-primary dark:hover:text-dark-primary text-lightDark dark:text-comment" :class="{ 'text-primary dark:text-dark-primary': links == 'registrer', 'md:!block': isSidebar }">register</span>
                                        </div>
                                    </router-link>
                                </li>

                                <!--error 404 -->

                                <li id="li2">
                                    <router-link :to="{ name: 'app.pages.error 404' }" href="#" @click="activeLink('error 404')" :class="{ 'text-primary ': links == 'error 404' }" class="block px-4 py-2 rounded-lg mx-2">
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
                                            <span class="md:hidden lg:block capitalize text-xs hover:text-primary dark:hover:text-dark-primary text-lightDark dark:text-comment" :class="{ 'text-primary dark:text-dark-primary': links == 'error 404', 'md:!block': isSidebar }">error 404</span>
                                        </div>
                                    </router-link>
                                </li>

                                <!-- MODAL -->

                                <li id="li2">
                                    <router-link :to="{ name: 'app.pages.error 500' }" href="#" @click="activeLink('error 500')" :class="{ 'text-primary ': links == 'error 500' }" class="block px-4 py-2 rounded-lg mx-2">
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
                                            <span class="md:hidden lg:block capitalize text-xs hover:text-primary dark:hover:text-dark-primary text-lightDark dark:text-comment" :class="{ 'text-primary dark:text-dark-primary': links == 'error 500', 'md:!block': isSidebar }">error 500</span>
                                        </div>
                                    </router-link>
                                </li>

                                <!-- foeget password -->

                                <li id="li2">
                                    <router-link :to="{ name: 'app.pages.forget password' }" href="#" @click="activeLink('forget password')" :class="{ 'text-primary ': links == 'forget password' }" class="block px-4 py-2 rounded-lg mx-2">
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
                                            <span class="md:hidden lg:block capitalize text-xs hover:text-primary dark:hover:text-dark-primary text-lightDark dark:text-comment" :class="{ 'text-primary dark:text-dark-primary': links == 'forget password', 'md:!block': isSidebar }"
                                                >forget password</span
                                            >
                                        </div>
                                    </router-link>
                                </li>

                                <!-- gellery -->

                                <li id="li2">
                                    <router-link :to="{ name: 'app.pages.gallery' }" href="#" @click="activeLink('gallery')" :class="{ 'text-primary ': links == 'gallery' }" class="block px-4 py-2 rounded-lg mx-2">
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
                                            <span class="md:hidden lg:block capitalize text-xs hover:text-primary dark:hover:text-dark-primary text-lightDark dark:text-comment" :class="{ 'text-primary dark:text-dark-primary': links == 'gallery', 'md:!block': isSidebar }">gallery</span>
                                        </div>
                                    </router-link>
                                </li>
                            </ul>
                        </div>
                    </transition>
                </li>

                <!-- ==========================widgets================= -->
                <li>
                    <button @click="openList('widgets')" type="button" class="w-full flex items-center justify-between p-2 text-darkone rounded-lg dark:text-dark-darkone">
                        <div class="flex items-center gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ruler">
                                <path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z" />
                                <path d="m14.5 12.5 2-2" />
                                <path d="m11.5 9.5 2-2" />
                                <path d="m8.5 6.5 2-2" />
                                <path d="m17.5 15.5 2-2" />
                            </svg>

                            <span class="text-[15px] md:hidden lg:block font-normal text-darkone dark:text-dark-darkone" :class="{ 'dark:text-dark-primary text-primary ': list === 'widgets', 'md:!block': isSidebar }">widgets</span>
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
                                    :class="{ 'dark:text-dark-primary text-primary  rotate-90': list === 'widgets' }"
                                >
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                </svg>
                            </span>
                        </div>
                    </button>
                    <transition @enter="enter" @after-enter="afterEnter" @leave="leave" name="expand">
                        <div v-if="list === 'widgets'" id="dropdown" class="z-10 w-full">
                            <ul class="py-2 text-sm text-darkone dark:text-dark-darkone">
                                <!-- login -->
                                <li id="li2">
                                    <router-link :to="{ name: 'app.widgets.chart-boxes' }" href="#" @click="activeLink('chart boxes')" :class="{ 'text-primary ': links == 'chart boxes' }" class="block px-4 py-2 rounded-lg mx-2">
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
                                            <span class="md:hidden lg:block capitalize text-xs hover:text-primary dark:hover:text-dark-primary text-lightDark dark:text-comment" :class="{ 'text-primary dark:text-dark-primary': links == 'chart boxes', 'md:!block': isSidebar }">chart boxes</span>
                                        </div>
                                    </router-link>
                                </li>

                                <!--profile -->

                                <li id="li2">
                                    <router-link :to="{ name: 'app.widgets.profile' }" href="#" @click="activeLink('profile')" :class="{ 'text-primary ': links == 'profile' }" class="block px-4 py-2 rounded-lg mx-2">
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
                                            <span class="md:hidden lg:block capitalize text-xs hover:text-primary dark:hover:text-dark-primary text-lightDark dark:text-comment" :class="{ 'text-primary dark:text-dark-primary': links == 'profile', 'md:!block': isSidebar }">profile</span>
                                        </div>
                                    </router-link>
                                </li>
                            </ul>
                        </div>
                    </transition>
                </li>

                <!-- ========================reports==================== -->
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
            hover: '',
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
