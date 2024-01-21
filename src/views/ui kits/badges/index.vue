<template>
    <div class="block p-4 bg-white border border-gray-200 font-bold rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <p class="mb-6">Badge 1</p>
        <h1 class="text-indigo-900 text-3xl">Example heading <span class="text-white w-8 py-1 px-3 rounded-md bg-sky-400">New</span></h1>
        <br />
        <h2 class="text-indigo-800 text-2xl">Example heaing <span class="text-white w-8 py-1 px-3 rounded-md bg-sky-400">New</span></h2>
        <br />
        <h3 class="text-violet-900 text-xl">Example heaing <span class="text-white w-8 py-1 px-3 rounded-md bg-sky-400">New</span></h3>
        <br />
        <h4 class="text-violet-900 text-lg">Example heaing <span class="text-white w-8 py-1 px-3 rounded-md bg-sky-400">New</span></h4>
        <br />
        <h5 class="text-violet-900 text-sm">Example heaing <span class="text-white w-4 py-1 px-3 rounded-md bg-sky-400">New</span></h5>
    </div>
    <br />
    <div class="flex gap-2">
        <div class="block w-1/2 p-6 bg-white border border-gray-200 font-bold rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <p class="mb-6 text-xs">Badge 2</p>
            <button class="text-white hover:bg-sky-500 p-2 transition bg-purple-950 py- px-4 rounded">Notification <span class="text-sm ml-2 text-gray-50 bg-gray-300 border border-neutral-300 w-8 px-2 rounded">4</span></button>
        </div>

        <div class="block w-1/2 p-6 bg-white border border-gray-200 font-bold rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <p class="mb-6 text-xs">Badge 3</p>
            <button class="text-white hover:bg-sky-500 transition bg-purple-950 py-2 px-2 rounded">Profile <span class="text-sm ml-2 text-gray-50 bg-gray-300 border border-neutral-300 w-8 px-2 rounded">9</span></button>
        </div>
    </div>
    <br />

    <div class="flex gap-2 ">
        <div class="block w-1/2 text-xs px-5 bg-white border border-gray-200 font-bold rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <p class="mb-6 text-xs">Pill badges</p>

            <button type="button" class="text-white bg-blue-700 px-2 focus:ring-4 focus:ring-blue-300 font-medium rounded text-xs me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Default</button>
            <button
                type="button"
                class="text-xs px-2 me-2 mb-2 font-medium text-gray-900 focus:outline-none bg-sky-300 rounded border border-gray-200 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
                Alternative
            </button>
            <button type="button" class="text-white bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded text-xs px-2 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Dark</button>
            <button
                type="button"
                class="text-gray-900 bg-white border border-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-200 font-medium rounded text-xs px-2 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
                Light
            </button>
            <button type="button" class="focus:outline-none text-white bg-green-700focus:ring-4 focus:ring-green-300 font-medium rounded bg-yellow-200 text-xs px-2 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Green</button>
            <button type="button" class="focus:outline-none text-white bg-red-700 focus:ring-4 focus:ring-red-300 font-medium rounded text-xs px-2 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Red</button>
            <button type="button" class="focus:outline-none text-white bg-indigo-700 focus:ring-4 focus:ring-red-300 font-medium rounded text-xs px-2 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">indigo</button>
        </div>

        <div class="block w-1/2 text-xs px-5 py-1 bg-white border border-gray-200 font-bold rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <p class="mb-6 text-xs">Links</p>

            <button type="button" class="text-white bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-2xl text-xs px-2 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">primary</button>
            <button type="button" class="focus:outline-none text-white bg-warning focus:ring-4 focus:ring-green-300 font-medium rounded-2xl text-xs px-2 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Green</button>
            <button type="button" class="text-white bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-2xl text-xs px-2 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Dark</button>
            <button
                type="button"
                class="text-gray-900 bg-white border border-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-200 font-medium rounded-2xl text-xs px-2 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
                Light
            </button>
            <button type="button" class="focus:outline-none text-white bg-success focus:ring-4 focus:ring-green-300 font-medium rounded-2xl text-xs px-2 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Green</button>
            <button type="button" class="focus:outline-none text-white bg-red-700 focus:ring-4 focus:ring-red-300 font-medium rounded-2xl text-xs px-2 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Red</button>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style></style>
