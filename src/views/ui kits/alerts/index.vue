<template>
    <div class="block p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h1 class="mb-4 text-2xl font-medium leading-none tracking-tight text-gray-900 dark:text-white">alerts with bacgrounds</h1>

        <p class="mb-3 text-gray-500 text-sm dark:text-gray-400">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software</p>

        <div class="p-4 mb-4 text-sm text-white bg-blue-700 dark:bg-gray-800 dark:text-blue-400" role="alert"><span class="font-medium"></span>A simple primary alert—check it out!</div>
        <div class="p-4 mb-4 text-sm text-white bg-sky-500 dark:bg-gray-800 dark:text-red-400" role="alert"><span class="font-medium"></span> A simple secondary alert—check it out!.</div>
        <div class="p-4 mb-4 text-sm text-white bg-success dark:bg-gray-800 dark:text-green-400" role="alert"><span class="font-medium"></span> A simple seccess alert—check it out!.</div>
        <div class="p-4 mb-4 text-sm text-white bg-danger dark:bg-gray-800 dark:text-yellow-300" role="alert"><span class="font-medium"></span> A simple danger alert—check it out!.</div>
        <div class="p-4 mb-4 text-sm text-white bg-warning dark:bg-gray-800 dark:text-gray-300" role="alert"><span class="font-medium"></span> A simple warning alert—check it out!.</div>
        <div class="p-4 text-sm text-white rounded-lg bg-btn-primary dark:bg-gray-800 dark:text-gray-300" role="alert"><span class="font-medium"></span> A simple btn-secondary alert—check it out!.</div>
    </div>

    <br />

    <div class="block p-6 text-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 bg-white dark:border-gray-700 dark:hover:bg-gray-700">
        <h1 class="mb-4 text-2xl font-medium leading-none tracking-tight text-gray-900 dark:text-white">alerts with bacgrounds</h1>

        <p class="mb-3 text-gray-500 text-sm dark:text-gray-400">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software</p>

        <div class="flex items-center text-white p-4 mb-4 text-sm bg-blue-700 rounded-lg dark:bg-gray-800 dark:text-blue-400" role="alert">
            <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            <span class="sr-only">Info</span>
            <div><span class="font-medium">Info alert!</span> Change a few things up and try submitting again.</div>
        </div>
        <div class="flex items-center p-4 mb-4 text-sm text-white bg-sky-400 rounded-lg dark:bg-gray-800 dark:text-red-400" role="alert">
            <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            <span class="sr-only">Info</span>
            <div><span class="font-medium">Danger alert!</span> Change a few things up and try submitting again.</div>
        </div>
        <div class="flex items-center p-4 mb-4 text-sm text-white bg-success rounded-lg dark:bg-gray-800 dark:text-green-400" role="alert">
            <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            <span class="sr-only">Info</span>
            <div><span class="font-medium">Success alert!</span> Change a few things up and try submitting again.</div>
        </div>
        <div class="flex items-center p-4 mb-4 text-white bg-danger text-sm rounded-lg dark:bg-gray-800 dark:text-yellow-300" role="alert">
            <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            <span class="sr-only">Info</span>
            <div><span class="font-medium">Warning alert!</span> Change a few things up and try submitting again.</div>
        </div>
        <div class="flex items-center p-4 text-sm text-white bg-warning rounded-lg dark:bg-gray-800 dark:text-gray-300" role="alert">
            <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            <span class="sr-only">Info</span>
            <div><span class="font-medium">Dark alert!</span> Change a few things up and try submitting again.</div>
        </div>
    </div>

    <br />

    <div class="block p-6 text-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 bg-white dark:border-gray-700 dark:hover:bg-gray-700">
        <div id="alert-1" class="flex items-center p-4 bg-blue-700 mb-4 text-white rounded-lg dark:bg-gray-800 dark:text-blue-400" role="alert">
            <span class="sr-only">Info</span>
            <div class="ms-3 text-sm font-medium">A simple info alert with an <a href="#" class="font-semibold underline hover:no-underline">example link</a>. Give it a click if you like.</div>
            <button
                type="button"
                class="ms-auto hover:bg-blue-200 -mx-1.5 -my-1.5 bg-red-50 text-blue-500 rounded-lg focus:ring-2 focus:ring-blue-400 p-1.5 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-blue-400 dark:hover:bg-gray-700"
                data-dismiss-target="#alert-1"
                aria-label="Close"
            >
                <span class="sr-only">Close</span>
                <svg class="w-3 h-3 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
            </button>
        </div>
        <div id="alert-2" class="flex items-center p-4 mb-4 text-white bg-sky-400 rounded-lg dark:bg-gray-800 dark:text-red-400" role="alert">
            <span class="sr-only">Info</span>
            <div class="ms-3 text-sm font-medium">A simple info alert with an <a href="#" class="font-semibold underline hover:no-underline">example link</a>. Give it a click if you like.</div>
            <button
                type="button"
                class="ms-auto -mx-1.5 -my-1.5 bg-red-50 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-red-400 dark:hover:bg-gray-700"
                data-dismiss-target="#alert-2"
                aria-label="Close"
            >
                <span class="sr-only">Close</span>
                <svg class="w-3 h-3 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
            </button>
        </div>
        <div id="alert-3" class="flex items-center p-4 mb-4 text-white bg-success rounded-lg dark:bg-gray-800 dark:text-green-400" role="alert">
            <span class="sr-only">Info</span>
            <div class="ms-3 text-sm font-medium">A simple info alert with an <a href="#" class="font-semibold underline hover:no-underline">example link</a>. Give it a click if you like.</div>
            <button
                type="button"
                class="ms-auto -mx-1.5 -my-1.5 bg-green-50 text-green-500 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-green-400 dark:hover:bg-gray-700"
                data-dismiss-target="#alert-3"
                aria-label="Close"
            >
                <span class="sr-only">Close</span>
                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
            </button>
        </div>
        <div id="alert-4" class="flex items-center p-4 mb-4 text-white bg-danger rounded-lg dark:bg-gray-800 dark:text-yellow-300" role="alert">
            <span class="sr-only">Info</span>
            <div class="ms-3 text-sm font-medium">A simple info alert with an <a href="#" class="font-semibold underline hover:no-underline">example link</a>. Give it a click if you like.</div>
            <button
                type="button"
                class="ms-auto -mx-1.5 -my-1.5 bg-yellow-50 text-yellow-500 rounded-lg focus:ring-2 focus:ring-yellow-400 p-1.5 hover:bg-yellow-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-yellow-300 dark:hover:bg-gray-700"
                data-dismiss-target="#alert-4"
                aria-label="Close"
            >
                <span class="sr-only">Close</span>
                <svg class="w-3 h-3 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
            </button>
        </div>
        <div id="alert-5" class="flex items-center p-4 rounded-lg text-white bg-warning dark:bg-gray-800" role="alert">
            <span class="sr-only">Info</span>
            <div class="ms-3 text-sm font-medium text-gray-800 dark:text-gray-300">A simple dark alert with an <a href="#" class="font-semibold underline hover:no-underline">example link</a>. Give it a click if you like.</div>
            <button
                type="button"
                class="ms-auto -mx-1.5 -my-1.5 bg-gray-50 text-gray-500 rounded-lg focus:ring-2 focus:ring-gray-400 p-1.5 hover:bg-gray-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
                data-dismiss-target="#alert-5"
                aria-label="Close"
            >
                <span class="sr-only">Dismiss</span>
                <svg class="w-3 h-3 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
            </button>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
