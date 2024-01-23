<template>
    <div class="md:max-lg:flex">
        <!-- ... -->

        <h2 class="text-2xl font-bold font-mono mb-5">Register</h2>
        <div class="flex justify-center mt-10 p-6 bg-white border border-gray-200 rounded-2xl w-full h-auto dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <div class="w-[600px]">
                <h2 class="bg-indigo-900 items-center p-5 text-center font-bold font-mono text-white">Register</h2>
                <form class="h-96 border border-gray-300 flex justify-center shadow-lg">
                    <div class="px-10 w-full mt-10 items-center">
                        <div class="mb-5">
                            <input
                                type="email"
                                id="email"
                                class="shadow-sm bg-white border border-gray-200 outline-0 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                placeholder="Full Name"
                                required
                            />
                        </div>
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
                        <!-- TW Elements is free under AGPL, with commercial license required for specific uses. See more details: https://tw-elements.com/license/ and contact us for queries at tailwind@mdbootstrap.com -->
                        <div class="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                            <input
                                class="relative float-left -ml-[1.4rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] cursor-none appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] indeterminate:border-primary indeterminate:bg-primary indeterminate:after:absolute indeterminate:after:ml-[0.2rem] indeterminate:after:mt-[6px] indeterminate:after:w-[0.5rem] indeterminate:after:border-[0.05rem] indeterminate:after:border-solid indeterminate:after:border-white hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent indeterminate:focus:after:w-[0.5rem] indeterminate:focus:after:rounded-none indeterminate:focus:after:border-[0.125rem] indeterminate:focus:after:border-b-0 indeterminate:focus:after:border-l-0 indeterminate:focus:after:border-r-0 dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:indeterminate:border-primary dark:indeterminate:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                                type="checkbox"
                                value=""
                                id="flexCheckIndeterminate"
                            />
                            <label class="inline-block pl-[0.15rem] mb-3 text-gray-500 dark:text-gray-400 text-center hover:cursor-pointer" for="flexCheckIndeterminate">keep up to date </label>
                        </div>
                        <button type="submit" class="text-white w-full p-10 bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">sign up</button>
                        <p class="mb-3 text-gray-500 dark:text-gray-400 text-center mt-5">need an acount? sign up</p>
                        <p class="mb-3 text-gray-500 dark:text-gray-400 text-center">forget password</p>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style></style>
