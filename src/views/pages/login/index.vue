<template>
    <h2 class="text-lg font-bold font-sans mb-5">login</h2>
    <div class="flex justify-center mt-10 p-6 bg-white border border-gray-200 rounded-lg w-full h-auto dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <!-- TW Elements is free under AGPL, with commercial license required for specific uses. See more details: https://tw-elements.com/license/ and contact us for queries at tailwind@mdbootstrap.com -->
        <div class="w-[600px]">
            <h2 class="bg-indigo-900 items-center p-5 text-center font-bold font-mono text-white">Login</h2>
            <form class="h-96 border border-gray-300 flex justify-center shadow-lg">
                <div class="px-10 w-full mt-10 items-center">
                    <div class="mb-5">
                        <input
                            type="email"
                            id="email"
                            class="shadow-sm bg-white border border-gray-200 outline-0 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                            placeholder="enter your email"
                            required
                        />
                    </div>
                    <div class="mb-5">
                        <input
                            type="password"
                            id="password"
                            class="shadow-sm bg-white border border-gray-200 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                            placeholder="password"
                            required
                        />
                    </div>
                    <button type="submit" class="text-white w-full p-10 bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login in</button>
                    <p class="mb-3 text-gray-500 dark:text-gray-400 text-center mt-5">need an acount? sign up</p>
                    <p class="mb-3 text-gray-500 dark:text-gray-400 text-center">forget password</p>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style></style>
