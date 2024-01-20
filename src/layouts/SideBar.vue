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
                <!-- ============================================dashboard=========================================== -->
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
                       
                    </button>

                    <transition @enter="enter" @after-enter="afterEnter" @leave="leave" name="expand">
                        <div v-if="list === 'dashboard'" id="dropdown" class="z-10 w-full">
                            <ul class="py-2 text-sm text-darkone dark:text-dark-darkone">
                                <!-- ========================sales===================== -->
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

                                <!-- ======================================default============================== -->

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

                    <!-- ================================================reports================================== -->
                </li>

                <!-- ===============================================invoice==================== -->
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

                <!-- ======================================board=============================== -->
                <li @click="active">
                    <router-link :to="{ name: 'app.Board' }" @click="openList('Board')" class="router-links transition flex items-center p-2 rounded-lg">
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
                            <span class="text-[15px] md:hidden lg:block font-normal text-darkone dark:text-dark-darkone ml-3" :class="{ 'dark:text-dark-primary text-primary ': list == 'Board', 'md:!block': isSidebar }">Board </span>
                        </div>
                    </router-link>
                </li>

                <!-- ================================= FORMS ======================================================-->
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
                        <div v-if="list === 'forms'" id="dropdown" class="z-10 w-full">
                            <ul class="py-2 text-sm text-darkone dark:text-dark-darkone">
                                <!-- ======== Basic Elements =========== -->
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

                                <!-- =================== GROUPS =================== -->

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

                                <!--Max length -->

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
                            </ul>
                        </div>
                    </transition>
                </li>

                <!--================================ ui kits ==============================-->
                <li>
                    <button @click="openList('ui-kits')" type="button" class="w-full flex items-center justify-between p-2 text-darkone rounded-lg dark:text-dark-darkone">
                        <div class="flex items-center gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bar-chart-horizontal">
                                <path d="M3 3v18h18" />
                                <path d="M7 16h8" />
                                <path d="M7 11h12" />
                                <path d="M7 6h3" />
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

                <!-- =====================================  reports =====================================================-->

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

                <!-- ==========================================  INVOICE ===================================================== -->

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

                <!-- ======================================board=============================== -->
                <li @click="active">
                    <router-link :to="{ name: 'app.Board' }" @click="openList('Board')" class="router-links transition flex items-center p-2 rounded-lg">
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
                            <span class="text-[15px] md:hidden lg:block font-normal text-darkone dark:text-dark-darkone ml-3" :class="{ 'dark:text-dark-primary text-primary ': list == 'Board', 'md:!block': isSidebar }">Board </span>
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
