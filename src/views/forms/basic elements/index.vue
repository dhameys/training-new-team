<template>
    <section class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 h-auto w-full">
        <form class="w-full p-3">
            <div class="w-full basis-1/2 bg-white h-40 border-box shadow rounded-2xl flex flex-col justify-between  p-2">
                <div class="w-full mx-2 my-1">
                    <h1 class="ml-1">Text</h1>
                </div>
                <div class="mx-2 my-2">
                    <label for="website-admin" class="block mb-1 text-sm font-medium text-gray-900 dark:text-black">Usage <span class="text-red-600">type="text"</span></label>
                    <div class="flex">
                        <!-- <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-g-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                            </svg>
                        </span> -->
                        <input
                            type="text"
                            id="website-admin"
                            class="rounded  bg-white border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block  min-w-20 w-full text-sm p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Text Input"
                        />
                    </div>
                </div>
            </div>
        </form>
        <form class="w-full  p-3">
            <div class="w-full basis-1/2 bg-white h-40 border-box shadow rounded-2xl flex flex-col justify-between  p-2">
                <div class="w-full mx-2 my-1">
                    <h1 class="ml-1">Email</h1>
                </div>
                <div class="mx-2 my-2">
                    <label for="website-admin" class="block mb-1 text-sm font-medium text-gray-900 dark:text-black">Usage <span class="text-red-600">type="email"</span></label>
                    <div class="flex">
                        <!-- <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-g-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                            </svg>
                        </span> -->
                        <input
                            type="text"
                            id="website-admin"
                            class="rounded  bg-white border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block  min-w-20 w-full text-sm p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="name @example.com"
                        />
                    </div>
                </div>
            </div>
        </form>
        <form class="w-full  p-3">
            <div class="w-full basis-1/2 bg-white h-40 border-box shadow rounded-2xl flex flex-col justify-between  p-2">
                <div class="w-full mx-2 my-1">
                    <h1 class="ml-1">Password</h1>
                </div>
                <div class="mx-2 my-2">
                    <label for="website-admin" class="block mb-1 text-sm font-medium text-gray-900 dark:text-black">Usage <span class="text-red-600">type="password"</span></label>
                    <div class="flex">
                        <!-- <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-g-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                            </svg>
                        </span> -->
                        <input
                            type="text"
                            id="website-admin"
                            class="rounded  bg-white border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block  min-w-20 w-full text-sm p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Password"
                        />
                    </div>
                </div>
            </div>
        </form>
        <form class="w-full  p-3">
            <div class="w-full basis-1/2 bg-white h-40 border-box shadow rounded-2xl flex flex-col justify-between  p-2">
                <div class="w-full mx-2 my-1">
                    <h1 class="ml-1">Number</h1>
                </div>
                <div class="mx-2 my-2">
                    <label for="website-admin" class="block mb-1 text-sm font-medium text-gray-900 dark:text-black">Usage <span class="text-red-600">type="number"</span></label>
                    <div class="flex">
                        <!-- <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-g-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                            </svg>
                        </span> -->
                        <input
                            type="text"
                            id="website-admin"
                            class="rounded  bg-white border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block  min-w-20 w-full text-sm p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Number"
                        />
                    </div>
                </div>
            </div>
        </form>
        <form class="w-full  p-3">
            <div class="w-full basis-1/2 bg-white h-40 border-box shadow rounded-2xl flex flex-col justify-between  p-2">
                <div class="w-full mx-2 my-1">
                    <h1 class="ml-1">Search</h1>
                </div>
                <div class="mx-2 my-2">
                    <label for="website-admin" class="block mb-1 text-sm font-medium text-gray-900 dark:text-black">Usage <span class="text-red-600">type="search"</span></label>
                    <div class="flex">
                        <!-- <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-g-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                            </svg>
                        </span> -->
                        <input
                            type="text"
                            id="website-admin"
                            class="rounded  bg-white border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block  min-w-20 w-full text-sm p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Search"
                        />
                    </div>
                </div>
            </div>
        </form>
        <form class="w-full  p-3">
            <div class="w-full basis-1/2 bg-white h-40 border-box shadow rounded-2xl flex flex-col justify-between  p-2">
                <div class="w-full mx-2 my-1">
                    <h1 class="ml-1">Url</h1>
                </div>
                <div class="mx-2 my-2">
                    <label for="website-admin" class="block mb-1 text-sm font-medium text-gray-900 dark:text-black">Usage <span class="text-red-600">type="url"</span></label>
                    <div class="flex">
                        <!-- <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-g-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                            </svg>
                        </span> -->
                        <input
                            type="text"
                            id="website-admin"
                            class="rounded  bg-white border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block  min-w-20 w-full text-sm p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="https://getDhameystech.com"
                        />
                    </div>
                </div>
            </div>
        </form>
        <form class="w-full  p-3">
            <div class="w-full basis-1/2 bg-white h-40 border-box shadow rounded-2xl flex flex-col justify-between  p-2">
                <div class="w-full mx-2 my-1">
                    <h1 class="ml-1">Tel</h1>
                </div>
                <div class="mx-2 my-2">
                    <label for="website-admin" class="block mb-1 text-sm font-medium text-gray-900 dark:text-black">Usage <span class="text-red-600">type="tel"</span></label>
                    <div class="flex">
                        <!-- <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-g-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                            </svg>
                        </span> -->
                        <input
                            type="text"
                            id="website-admin"
                            class="rounded  bg-white border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block  min-w-20 w-full text-sm p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="+2526  16 623895"
                        />
                    </div>
                </div>
            </div>
        </form>
        <form class="w-full  p-3">
            <div class="w-full basis-1/2 bg-white h-40 border-box shadow rounded-2xl flex flex-col justify-between  p-2">
                <div class="w-full mx-2 my-1">
                    <h1 class="ml-1">File</h1>
                </div>
                <div class="mx-2 my-2">
                    <label for="website-admin" class="block mb-1 text-sm font-medium text-gray-900 dark:text-black">Usage <span class="text-red-600">type="file"</span></label>
                    <div class="flex">
                        <!-- <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-g-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                            </svg>
                        </span> -->
                    <button class="bg-gray-300 rounded border p-1">Choose File</button> <span class="ml-1">No File Chosen</span>
                    </div>
                </div>
            </div>
        </form>
        <form class="w-full  p-3">
            <div class="w-full basis-1/2 bg-white h-40 border-box shadow rounded-2xl flex flex-col justify-between  p-2">
                <div class="w-full mx-2 my-1">
                    <h1 class="ml-1">Text</h1>
                </div>
                <div class="mx-2 my-2">
                    <label for="website-admin" class="block mb-1 text-sm font-medium text-gray-900 dark:text-black">Usage <span class="text-red-600">type="text"</span></label>
                    <div class="flex">
                        <!-- <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-g-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                            </svg>
                        </span> -->
                        <input
                            type="text"
                            id="website-admin"
                            class="rounded  bg-white border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block  min-w-20 w-full text-sm p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Text Input"
                        />
                    </div>
                </div>
            </div>
        </form>
        <form class="w-full  p-3">
            <div class="w-full basis-1/2 bg-white h-40 border-box shadow rounded-2xl flex flex-col justify-between  p-2">
                <div class="w-full mx-2 my-1">
                    <h1 class="ml-1">Text</h1>
                </div>
                <div class="mx-2 my-2">
                    <label for="website-admin" class="block mb-1 text-sm font-medium text-gray-900 dark:text-black">Usage <span class="text-red-600">type="text"</span></label>
                    <div class="flex">
                        <!-- <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-g-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                            </svg>
                        </span> -->
                        <input
                            type="text"
                            id="website-admin"
                            class="rounded  bg-white border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block  min-w-20 w-full text-sm p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Text Input"
                        />
                    </div>
                </div>
            </div>
        </form>
        <form class="w-full  p-3">
            <div class="w-full basis-1/2 bg-white h-40 border-box shadow rounded-2xl flex flex-col justify-between  p-2">
                <div class="w-full mx-2 my-1">
                    <h1 class="ml-1">Text</h1>
                </div>
                <div class="mx-2 my-2">
                    <label for="website-admin" class="block mb-1 text-sm font-medium text-gray-900 dark:text-black">Usage <span class="text-red-600">type="text"</span></label>
                    <div class="flex">
                        <!-- <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-g-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                            </svg>
                        </span> -->
                        <input
                            type="text"
                            id="website-admin"
                            class="rounded  bg-white border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block  min-w-20 w-full text-sm p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Text Input"
                        />
                    </div>
                </div>
            </div>
        </form>
        <form class="w-full  p-3">
            <div class="w-full basis-1/2 bg-white h-40 border-box shadow rounded-2xl flex flex-col justify-between  p-2">
                <div class="w-full mx-2 my-1">
                    <h1 class="ml-1">Text</h1>
                </div>
                <div class="mx-2 my-2">
                    <label for="website-admin" class="block mb-1 text-sm font-medium text-gray-900 dark:text-black">Usage <span class="text-red-600">type="text"</span></label>
                    <div class="flex">
                        <!-- <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-g-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                            </svg>
                        </span> -->
                        <input
                            type="text"
                            id="website-admin"
                            class="rounded  bg-white border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block  min-w-20 w-full text-sm p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Text Input"
                        />
                    </div>
                </div>
            </div>
        </form>
    </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
