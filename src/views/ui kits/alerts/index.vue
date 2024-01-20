<template>
    <div class="block p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h1 class="mb-4 text-2xl font-medium leading-none tracking-tight text-gray-900 dark:text-white">alerts with bacgrounds</h1>

        <p class="mb-3 text-gray-500 text-sm dark:text-gray-400">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software</p>

        <div class="p-4 mb-4 text-sm text-white rounded-lg bg-blue-700 dark:bg-gray-800 dark:text-blue-400" role="alert"><span class="font-medium"></span>A simple primary alert—check it out!</div>
        <div class="p-4 mb-4 text-sm text-white rounded-lg bg-sky-500 dark:bg-gray-800 dark:text-red-400" role="alert"><span class="font-medium"></span> A simple secondary alert—check it out!.</div>
        <div class="p-4 mb-4 text-sm text-white rounded-lg bg-success dark:bg-gray-800 dark:text-green-400" role="alert"><span class="font-medium"></span> A simple seccess alert—check it out!.</div>
        <div class="p-4 mb-4 text-sm text-white rounded-lg bg-danger dark:bg-gray-800 dark:text-yellow-300" role="alert"><span class="font-medium"></span> A simple danger alert—check it out!.</div>
        <div class="p-4 mb-4 text-sm text-white rounded-lg bg-warning dark:bg-gray-800 dark:text-gray-300" role="alert"><span class="font-medium"></span> A simple warning alert—check it out!.</div>
        <div class="p-4 text-sm text-white rounded-lg bg-btn-primary dark:bg-gray-800 dark:text-gray-300" role="alert"><span class="font-medium"></span> A simple btn-secondary alert—check it out!.</div>
    </div>

    <br />

    <div class="block p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h1 class="mb-4 text-2xl font-medium leading-none tracking-tight text-gray-900 dark:text-white">alerts with bacgrounds</h1>

        <p class="mb-3 text-gray-500 text-sm dark:text-gray-400">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software</p>

        <div class="flex items-center p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" role="alert">
            <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            <span class="sr-only">Info</span>
            <div><span class="font-medium">Info alert!</span> Change a few things up and try submitting again.</div>
        </div>
        <div class="flex items-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
            <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            <span class="sr-only">Info</span>
            <div><span class="font-medium">Danger alert!</span> Change a few things up and try submitting again.</div>
        </div>
        <div class="flex items-center p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
            <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            <span class="sr-only">Info</span>
            <div><span class="font-medium">Success alert!</span> Change a few things up and try submitting again.</div>
        </div>
        <div class="flex items-center p-4 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300" role="alert">
            <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            <span class="sr-only">Info</span>
            <div><span class="font-medium">Warning alert!</span> Change a few things up and try submitting again.</div>
        </div>
        <div class="flex items-center p-4 text-sm text-gray-800 rounded-lg bg-gray-50 dark:bg-gray-800 dark:text-gray-300" role="alert">
            <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            <span class="sr-only">Info</span>
            <div><span class="font-medium">Dark alert!</span> Change a few things up and try submitting again.</div>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
