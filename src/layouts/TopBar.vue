<template>
    <nav class="print:!hidden fixed top-0 z-[100] w-full bg-bgnav border dark:bg-dark-bgnav border-b lg:py-[12px] border-bordercolor md:block dark:border-gray-700 no_print">
        <div class="">
            <div class="lg:flex lg:items-center lg:justify-between block lg:space-y-0 relative">
                <div class="flex items-center justify-between">
                    <div class="animate-left-side text-lg font-[600] flex items-center gap-3 px-4 max-lg:py-2.5">
                        <img src="@/assets/images/salesa.png" alt="" class="w-12 h-auto cursor-pointer border box-border p-[3px] shadow-[0_4px_9px_-4px_#14a44d] rounded-[10px]" />
                        <!-- <img v-else  src="../assets/images/moon.svg" alt="" class="w-10 h-10" />   -->
                        <!-- <span ></span> -->
                        <!-- <img v-else src="@/assets/images/logo.png" alt="" class="w-10 h-10" /> -->
                        <label class="text-darkone dark:text-dark-darkone text-2xl max-[350px]:hidden capitalize">Salessa</label>
                    </div>

                    <transition appear name="right-side">
                        <div class="flex items-center">
                            <button
                                @click="openNotifications"
                                id="btn-topbarIcons"
                                type="button"
                                class="text-primary hover:!text-primary animate-right-side inline-flex items-center text-sm rounded-lg lg:hidden hover:bg-gray-10 focus:outline-none focus:ring-0 dark:text-dark-darkone dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            >
                                <span class="sr-only">Open sidebar</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                                </svg>
                            </button>
                            <button
                                @click="openSidebar"
                                id="openSidebar"
                                type="button"
                                class="text-primary md:hidden hover:!text-primary animate-right-side lg:ml-4 lg:animate-left-side inline-flex items-center pr-2 text-sm rounded-lg focus:outline-none focus:ring-0 dark:text-dark-darkone dark:focus:ring-gray-600"
                            >
                                <span class="sr-only">Open sidebar</span>
                                <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        clip-rule="evenodd"
                                        fill-rule="evenodd"
                                        d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                                    ></path>
                                </svg>
                            </button>
                        </div>
                    </transition>
                </div>
                <!-- Nafications--------------------->
                <div
                    id="topbar-icons"
                    :class="{ 'block h-[50px] lg:h-auto  transition-all lg:transition-none overflow-visible duration-300': open_notifications }"
                    class="max-lg:absolute h-0 lg:h-auto transition-all lg:transition-none duration-500 box-border overflow-hidden lg:overflow-visible lg:dark:shadow-none dark:shadow-xl top-full lg:w-auto flex px-5 bg-bgnav lg:bg-transparent dark:bg-dark-bgnav border-t lg:border-t-0 border-bordercolor dark:border-dark-bordercolor w-full items-center justify-between py-0 pt-0 no-print shadow lg:shadow-none"
                >
                    <div class="flex items-center w-full justify-center">
                        <div class="lg:animate-right-side flex items-center gap-3 md:gap-5 p-0 max-lg:mt-1 opacity-0 lg:opacity-100 transition lg:transition-none duration-[1.8s]" :class="{ 'opacity-100': open_notifications }">
                            <div class="flex items-center lg:relative rounded-lg" id="input-search">
                                <div :class="{ block: searching, hidden: !searching }" class="absolute lg:relative top-full lg:top-0 left-0 px-4 lg:px-0 w-full">
                                    <div class="max-lg:p-2 max-lg:relative max-lg:bg-bgnav max-lg:dark:bg-dark-bgnav max-lg:rounded-b-lg max-lg:border max-lg:border-bordercolor max-lg:dark:border-dark-bordercolor">
                                        <input
                                            type="text"
                                            placeholder="Search"
                                            class="w-full transition-all duration-500 py-1 pl-3 rounded-md focus:outline-none bg-bginput dark:bg-dark-bginput border-bordercolor lg:w-[200px] lg:focus:w-[400px] dark:border-dark-bordercolor focus:ring-0 focus:border-bordercolor dark:focus:border-dark-bordercolor text-darkone text-[14px] dark:text-dark-darkone block placeholder-secondary placeholder:text-sm dark:placeholder-dark-secondary dark:focus:ring-0"
                                        />
                                        <button class="absolute top-2 right-2 lg:hidden bg-primary inline-flex items-center justify-center w-[34px] h-[34px] text-base font-bold text-center rounded-r-lg text-dark-darkone">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <button @click="searching = !searching" :class="{ ' lg:hidden ': searching }" class="text-primary lg:right-3 lg:mt-[0px] dark:text-dark-secondary inline-flex items-center justify-center text-sm font-normal text-center rounded-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mt-0.5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                    </svg>
                                </button>
                                <button :class="{ 'lg:block': searching }" class="absolute hidden lig text-secondary lg:right-3 lg:mt-[0px] dark:text-comment items-center justify-center text-sm font-normal text-center rounded-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                    </svg>
                                </button>
                            </div>
                            <div @click="toggleDarkMode()" class="inline-flex items-center justify-center text-primary hover:text-primary text-sm font-normal text-center rounded-lg dark:text-dark-secondary cursor-pointer">
                                <svg v-if="darkMode" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun w-5 h-5">
                                    <circle cx="12" cy="12" r="5"></circle>
                                    <line x1="12" y1="1" x2="12" y2="3"></line>
                                    <line x1="12" y1="21" x2="12" y2="23"></line>
                                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                                    <line x1="1" y1="12" x2="3" y2="12"></line>
                                    <line x1="21" y1="12" x2="23" y2="12"></line>
                                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                                </svg>
                                <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-moon w-5 h-5">
                                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                                </svg>
                            </div>
                            <div class="lg:relative mt-2">
                                <button v-on:click="Notification" id="btn-notification" class="relative text-primary hover:text-primary dark:hover:text-dark-secondary inline-flex items-center justify-center text-sm font-normal text-center rounded-lg dark:text-dark-secondary">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bell w-5 h-5">
                                        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                                        <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                                    </svg>
                                    <span class="absolute -top-0.5 right-0">
                                        <span class="relative flex h-2 w-2">
                                            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
                                            <span class="relative inline-flex rounded-full h-2 w-2 bg-success"></span>
                                        </span>
                                    </span>
                                </button>
                                <!--Dropdown-->
                                <div id="notification" class="hidden shadow-[0_3px_10px_rgb(0,0,0,0.2)] !z-[200]  absolute top-full lg:mt-1 bg-bgnav rounded-lg lg:w-64 dark:bg-dark-bgnav border border-bordercolor dark:border-dark-bordercolor max-lg:left-10 lg:right-0 md:w-[91%] w-[85%]">
                                    <div>
                                        <div class="flex flex-col justify-start pt-2 px-4">
                                            <h5 class="text-darkone dark:text-dark-darkone text-lg font-[500]">Notification</h5>
                                        </div>
                                    </div>
                                    <ul class="pt-2 text-sm text-bordercolor dark:text-dark-bordercolor">
                                        <li>
                                            <div class="transition cursor-pointer flex items-center p-3 border-t border-bordercolor dark:border-dark-bordercolor hover:!text-primary hover:bg-lightprimary dark:hover:bg-dark-lightprimary">
                                                <span class="bg-primary p-2 rounded-full shadow-[0_2px_8px_rgba(8,_112,_184,_0.8)]">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-white font-bold">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                                    </svg>
                                                </span>
                                                <span class="flex flex-col items-center leading-0">
                                                    <span class="text-sm font-[500] text-darkone dark:text-dark-darkone ml-3">Dashboard</span>
                                                    <span class="text-xs text-primary dark:text-dark-secondary ml-3">Dashboard</span>
                                                </span>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="transition cursor-pointer flex items-center p-3 border-t border-bordercolor dark:border-dark-bordercolor hover:!text-primary hover:bg-lightprimary dark:hover:bg-dark-lightprimary">
                                                <span class="bg-secondary p-2 rounded-full shadow-[0_2px_8px_rgba(156,_163,_170,_0.8)]">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-white font-bold">
                                                        <path
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                                                        />
                                                    </svg>
                                                </span>
                                                <span class="flex flex-col items-center leading-0">
                                                    <span class="text-sm font-[500] text-darkone dark:text-dark-darkone ml-3">Dashboard</span>
                                                    <span class="text-xs text-primary dark:text-dark-secondary ml-3">Dashboard</span>
                                                </span>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="transition cursor-pointer flex items-center p-3 border-t border-bordercolor dark:border-dark-bordercolor hover:!text-primary hover:bg-lightprimary dark:hover:bg-dark-lightprimary">
                                                <span class="bg-success p-2 rounded-full shadow-[0_2px_8px_rgba(87,_177,_87,_0.8)]">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-white font-bold">
                                                        <path
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                                                        />
                                                    </svg>
                                                </span>
                                                <span class="flex flex-col items-center leading-0">
                                                    <span class="text-sm font-[500] text-darkone dark:text-dark-darkone ml-3">Dashboard</span>
                                                    <span class="text-xs text-primary dark:text-dark-secondary ml-3">Dashboard</span>
                                                </span>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="transition cursor-pointer flex items-center p-3 border-t border-bordercolor dark:border-dark-bordercolor hover:!text-primary hover:bg-lightprimary dark:hover:bg-dark-lightprimary">
                                                <span class="bg-warning p-2 rounded-full shadow-[0_2px_8px_rgba(235,_152,_34,_0.8)]">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-white font-bold">
                                                        <path
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                                                        />
                                                    </svg>
                                                </span>
                                                <span class="flex flex-col items-center leading-0">
                                                    <span class="text-sm font-[500] text-darkone dark:text-dark-darkone ml-3">Dashboard</span>
                                                    <span class="text-xs text-primary dark:text-dark-secondary ml-3">Dashboard</span>
                                                </span>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="transition cursor-pointer flex items-center justify-center p-3 border border-bordercolor dark:border-dark-bordercolor hover:!text-primary hover:bg-lightprimary dark:hover:bg-dark-lightprimary">
                                                <span class="text-sm font-[500] text-secondary ml-3">View all Notification</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="lg:relative  z-[200]">
                                <button @click="users" type="button" id="btn-users" class="flex text-sm rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" aria-expanded="false" data-dropdown-toggle="dropdown-user">
                                    <span class="sr-only">Open user menu</span>
                                    <div class="">
                                        <img class="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo" />
                                    </div>
                                </button>
                                <!-- Dropdown -->
                                <div id="users" class="hidden shadow-[0_3px_10px_rgb(0,0,0,0.2)] absolute z-[200] top-full lg:mt-2 bg-bgnav rounded-lg lg:w-56 dark:bg-dark-bgnav border border-bordercolor dark:border-dark-bordercolor max-lg:left-10 lg:right-0 md:w-[91%] w-[85%]">
                                    <div>
                                        <div class="flex items-center flex-col justify-center py-2">
                                            <h5 class="text-darkone dark:text-dark-darkone">Percy Kewshun</h5>
                                            <small class="text-xs text-secondary dark:text-dark-secondary">Senior Admin</small>
                                        </div>
                                    </div>
                                    <ul class="pt-2 text-sm text-bordercolor dark:text-dark-bordercolor">
                                        <li>
                                            <div @mouseenter="mouseOver('dashboard')" @mouseleave="upHere = false" class="transition cursor-pointer flex items-center p-3 border-t border-bordercolor dark:border-dark-bordercolor hover:bg-lightprimary dark:hover:bg-dark-lightprimary">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-primary dark:text-dark-primary">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                                </svg>

                                                <span class="text-sm font-[500] text-darkone dark:text-dark-darkone ml-3" :class="{ 'text-primary dark:text-dark-darkone': upHere === 'dashboard' }">Dashboard</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div @mouseenter="mouseOver('inbox')" @mouseleave="upHere = false" class="transition cursor-pointer flex items-center p-3 border-t border-bordercolor dark:border-dark-bordercolor hover:bg-lightprimary dark:hover:bg-dark-lightprimary">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-primary dark:text-dark-primary">
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                                                    />
                                                </svg>
                                                <span class="text-sm font-[500] text-darkone dark:text-dark-darkone ml-3" :class="{ 'text-primary dark:text-dark-darkone': upHere === 'inbox' }">Inbox</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div @mouseenter="mouseOver('lock')" @mouseleave="upHere = false" class="transition cursor-pointer flex items-center p-3 border-t border-bordercolor dark:border-dark-bordercolor hover:bg-lightprimary dark:hover:bg-dark-lightprimary">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-primary dark:text-dark-primary">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                                                </svg>

                                                <span class="text-sm font-[500] text-darkone dark:text-dark-darkone ml-3" :class="{ 'text-primary dark:text-dark-darkone': upHere === 'lock' }">Lockscreen</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div  @mouseenter="mouseOver('sign')" @mouseleave="upHere = false" class="transition cursor-pointer flex items-center p-3 border-t border-bordercolor dark:border-dark-bordercolor hover:bg-lightprimary dark:hover:bg-dark-lightprimary">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-primary dark:text-dark-primary">
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008H12v-.008z"
                                                    />
                                                </svg>

                                                <span class="text-sm font-[500] text-darkone dark:text-dark-darkone ml-3" :class="{ 'text-primary dark:text-dark-darkone': upHere === 'sign' }">Sign Out</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            user: false,
            searching: false,
            notification: false,
            darkMode: false,
            upHere: '',

            open_notifications: false
        }
    },

    methods: {
        openNotifications() {
            this.open_notifications = !this.open_notifications
        },
        openSidebar() {
            this.$emit('myEvent', 'hello')
        },

        cPageUrl(url, newPart) {
            if (url.endsWith('/' + newPart)) {
                const parts = url.split('/' + newPart)
                const result = parts.slice(0, -1).join('')
                return result
            } else return url
        },
        toggleDarkMode() {
            const isDark = document.querySelector('html').classList.contains('dark') ?? false
            if (isDark) {
                document.querySelector('html').classList.remove('dark')
                localStorage.setItem('darkMode', JSON.stringify(false))
                this.darkMode = false
            } else {
                document.querySelector('html').classList.add('dark')
                localStorage.setItem('darkMode', JSON.stringify(true))
                this.darkMode = true
            }
        },
        Notification() {
            // alert("notification")
            const x = document.getElementById('notification')
            if (x.classList.contains('hidden')) {
                x.classList.remove('hidden')
                x.classList.add('block')
            } else {
                x.classList.add('hidden')
                x.classList.remove('block')
            }
        },
        users() {
            // alert("notification")
            const x = document.getElementById('users')
            if (x.classList.contains('hidden')) {
                x.classList.remove('hidden')
                x.classList.add('block')
            } else {
                x.classList.add('hidden')
                x.classList.remove('block')
            }
        },
        mouseOver(val) {
            this.upHere = val
        }
    },
    mounted() {
        const isDarkTheme = JSON.parse(localStorage.getItem('darkMode') ?? false)
        this.darkMode = isDarkTheme
        if (isDarkTheme) document.querySelector('html').classList.add('dark')

        document.addEventListener('click', (event) => {
            const btn_notification = document.getElementById('btn-notification')
            const btn_users = document.getElementById('btn-users')
            const inputSearch = document.getElementById('input-search')
            const topbar_icons = document.getElementById('topbar-icons')
            const btn_topbarIcons = document.getElementById('btn-topbarIcons')

            if (!btn_notification.contains(event.target)) {
                const x = document.getElementById('notification')
                if (x.classList.contains('block')) {
                    x.classList.remove('block')
                    x.classList.add('hidden')
                }
            }
            if (!btn_users.contains(event.target)) {
                const x = document.getElementById('users')
                if (x.classList.contains('block')) {
                    x.classList.remove('block')
                    x.classList.add('hidden')
                }
            }
            if (!inputSearch.contains(event.target)) {
                this.searching = false
                // alert(this.searching)
            }
            if (!btn_topbarIcons.contains(event.target) && !topbar_icons.contains(event.target)) {
                this.open_notifications = false
                // alert(this.open_notifications)
            }
        })
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
</script>

<style scoped>
showInput {
    display: block;
}

.expand-enter-active,
.expand-leave-active {
    transition: height 0.5s ease-in-out;
    overflow: hidden;
}
</style>
