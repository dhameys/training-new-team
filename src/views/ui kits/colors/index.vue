<template>
    <div>
        <label>
            <p class="text-sm font-bold">color</p>
        </label>

        <div class="bg-white min-w-full grid grid-cols-1 justify-center md:grid-cols-4 p-0">
            <label
                ><div type="button" class="text-white bg-blue-700 focus:ring-4 rounded lg focus:ring-blue-300 font-medium text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none w-full md:w-36 h-20"></div>
                <h1 class="ml-6 text-xl">Primary</h1></label
            >

            <label
                ><div
                    type="button"
                    class="py-2.5 px-5 me-2 mb-2 text-sm font-medium rounded lg text-gray-900 focus:outline-none bg-sky-500 border border-gray-20 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 w-full md:w-36 h-20"
                ></div>
                <h1 class="text-xl">Secondry</h1></label
            >

            <label
                ><div type="button" class="text-white bg-success rounded lg focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 w-full md:w-36 h-20"></div>
                <h1 class="ml-6 text-xl">Seccess</h1></label
            >

            <label>
                <div
                    type="button"
                    class="text-gray-900 bg-danger border border-gray-300 rounded lg focus:outline-none focus:ring-4 focus:ring-gray-200 font-medium text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 w-full md:w-36 h-20"
                ></div>
                <h1 class="ml-6 text-xl">Danger</h1></label
            >

            <label
                ><div type="button" class="focus:outline-none rounded lg text-white bg-warning focus:ring-4 focus:ring-green-300 font-medium text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 w-full md:w-36 h-20"></div>
                <h1 class="ml-6 text-xl">Warning</h1></label
            >
            <label
                ><div type="button" class="focus:outline-none rounded lg text-white bg-btn-primary focus:ring-4 focus:ring-red-300 font-medium text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 w-full md:w-36 h-20"></div>
                <h1 class="ml-6 text-xl">Info</h1></label
            >

            <label
                ><div type="button" class="focus:outline-none rounded lg text-white bg-lightprimary focus:ring-4 focus:ring-yellow-300 font-medium text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900 w-full md:w-36 h-20"></div>
                <h1 class="ml-6 text-xl">Light</h1></label
            >
            <label
                ><div type="button" class="focus:outline-none rounded lg text-white bg-darkone focus:ring-4 focus:ring-purple-300 font-medium text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 w-full md:w-36 h-20"></div>
                <h1 class="ml-6 text-xl">Dark</h1></label
            >
        </div>
    </div>

    <br />

    <!-- ======onother two==== -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2">
        <div class="bg-white border p-12 border-gray-200 rounded-sm shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h6 class="text-2xl">Text color</h6>

            <p class="mb-3 text-left rtl:text-right text-gray-500 dark:text-gray-400">Contextual text classes also work well on anchors with the provided hover and focus states. Note that the text-white and text-muted class has no additional link styling beyond underline.</p>

            <div class="flex items-center p-4 mb-4 text-sm bg-blue-700 text-white rounded-sm dark:bg-gray-800 dark:text-blue-400" role="alert">
                <span class="sr-only">Info</span>
                <div><span class="font-medium">primary</span></div>
            </div>
            <div class="flex items-center p-4 mb-4 text-sm bg-sky-500 text-white rounded-sm dark:bg-gray-800 dark:text-red-400" role="alert">
                <span class="sr-only">Info</span>
                <div><span class="font-medium">secondry</span></div>
            </div>
            <div class="flex items-center p-4 mb-4 text-sm text-white bg-success rounded-sm dark:bg-gray-800 dark:text-green-400" role="alert">
                <span class="sr-only">Info</span>
                <div><span class="font-medium">Success </span></div>
            </div>
            <div class="flex items-center p-4 mb-4 text-sm text-white rounded-sm bg-danger dark:bg-gray-800 dark:text-yellow-300" role="alert">
                <span class="sr-only">Info</span>
                <div><span class="font-medium">danger </span></div>
            </div>
            <div class="flex items-center p-4 text-sm text-white bg-warning mb-4 rounded-sm dark:bg-gray-800 dark:text-gray-300" role="alert">
                <span class="sr-only">Info</span>
                <div><span class="font-medium">warning</span></div>
            </div>
            <div class="flex items-center p-4 text-sm text-white bg-btn-primary rounded-sm dark:bg-gray-800 dark:text-gray-300" role="alert">
                <span class="sr-only">Info</span>
                <div><span class="font-medium">warning</span></div>
            </div>
        </div>

      

        <div class="bg-white border p-12 font-thin border-gray-200 rounded-sm shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h6 class="text-2xl">Text color</h6>

            <p class="mb-3 text-left rtl:text-right text-gray-500 dark:text-gray-400">Contextual text classes also work well on anchors with the provided hover and focus states. Note that the text-white and text-muted class has no additional link styling beyond underline.</p>

            <div class="flex items-center w-28 rounded-lg hover:text-slate-700 text-center p-4 mb-4 text-sm bg-blue-700 text-white dark:bg-gray-800 dark:text-blue-400" role="alert">
                <span class="sr-only">Info</span>
                <div><span class="font-medium">primary link</span></div>
            </div>
            <div class="flex items-center p-4 mb-4 text-sm bg-sky-500 w-32 rounded-lg hover:text-slate-700 text-white dark:bg-gray-800 dark:text-red-400" role="alert">
                <span class="sr-only">Info</span>
                <div><span class="font-medium">secondry link</span></div>
            </div>
            <div class="flex items-center p-4 mb-4 text-sm text-white bg-success w-full md:w-36 rounded-lg hover:text-slate-700 dark:bg-gray-800 dark:text-green-400" role="alert">
                <span class="sr-only">Info</span>
                <div><span class="font-medium">Success link</span></div>
            </div>
            <div class="flex items-center p-4 mb-4 text-sm text-white w-40 rounded-lg hover:text-slate-700 bg-danger dark:bg-gray-800 dark:text-yellow-300" role="alert">
                <span class="sr-only">Info</span>
                <div><span class="font-medium">danger link</span></div>
            </div>
            <div class="flex items-center p-4 text-sm text-white bg-warning mb-4 w-full md:w-36 rounded-lg hover:text-slate-700 dark:bg-gray-800 dark:text-gray-300" role="alert">
                <span class="sr-only">Info</span>
                <div><span class="font-medium">warning link</span></div>
            </div>
            <div class="flex items-center p-3 text-sm text-white bg-btn-primary w-32 rounded-lg hover:text-slate-700 dark:bg-gray-800 dark:text-gray-300" role="alert">
                <span class="sr-only">Info</span>
                <div><span class="font-medium">btn sceondry</span></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style></style>
