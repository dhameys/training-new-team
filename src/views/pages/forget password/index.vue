<template>
    <div >
        <h2 class="text-2xl font-bold font-mono mb-5">Forget Password</h2>
    </div>
    <div class="flex justify-center mt-10 p-6 bg-white border border-gray-200 rounded-2xl w-auto h-auto dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <div class="w-[500px]">
            <h2 class="bg-indigo-900 items-center p-5 text-left text-2xl font-bold font-mono text-white">Forget Password</h2>
            <form class="h-60 border border-gray-200 flex justify-center shadow-lg">
                <div class="px-10 w-full mt-10 items-center">
                    <div class="mb-5">
                        <input
                            type="email"
                            id="email"
                            class="shadow-sm bg-white border focus:outline-none border-gray-100 p-4 outline-0 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                            placeholder="enter your email"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        class="dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]] inline-block w-full rounded bg-blue-500 px-6 pb-3 pt-4 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                        data-te-ripple-init
                        data-te-ripple-color="light"
                    >
                        Send
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style></style>
