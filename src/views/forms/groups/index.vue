<template>
    <section class="w-full grid grid-rows p-4 bg-gray-100 border border-gray-200 shadow sm:p-6 md:p-8 dark:border-gray-700">
        <div class="grid gap-2 md:grid-cols-1 lg:grid-cols-2">
            <!-- ================================================== Input Groups ====================================== -->
            <div class="container py-8 px-4 bg-white w-full h-auto shadow-xl">
                <form action="">
                    <h1 class="text-nowrap font-medium text-gray-900 mb-5" id="slide-over-title">Input Groups</h1>
                    <label class="flex flex-col mb-6">
                        <span class="mb-2 inline-block cursor-pointer">Place one add-on or button on either side of an input. You may also place one on both sides of an input. Remember to place labels outside the input group.</span>
                        <div class="flex">
                            <button class="bg-gray-200 text-dark-primary rounded-l px-4 transition hover:bg-blue-dark focus:bg-blue-dark">@</button>
                            <input class="p-4 rounded-r leading-none w-full" type="text" placeholder="Username" />
                        </div>
                    </label>
                    <label class="flex flex-col mb-6">
                        <div class="flex"><input class="p-4 rounded-l leading-none w-full" type="text" placeholder="Recipient's username" /> <button class="bg-gray-200 text-dark-primary rounded-r px-4 transition hover:bg-blue-dark focus:bg-blue-dark">@example.com</button></div>
                    </label>
                    <label class="flex flex-col mb-6">
                        <h1 class="mb-3">Your vanity URL</h1>
                        <div class="flex"><button class="bg-gray-200 text-dark-bgcolor rounded-r px-4 transition hover:bg-blue-dark focus:bg-blue-dark">https://example.com/users/</button><input class="p-4 rounded-l leading-none w-full" type="text" /></div>
                    </label>
                    <label class="flex flex-col mb-6">
                        <div class="flex">
                            <button class="bg-gray-200 text-dark-primary rounded-r px-4 transition hover:bg-blue-dark focus:bg-blue-dark">$</button><input class="p-4 rounded-l leading-none w-full" type="text" />
                            <button class="bg-gray-200 text-dark-primary rounded-r px-6 transition hover:bg-blue-dark focus:bg-blue-dark">.00</button>
                        </div>
                    </label>
                    <label class="flex flex-col mb-6">
                        <div class="flex"><button class="bg-gray-200 text-dark-primary rounded-r px-4 transition hover:bg-blue-dark focus:bg-blue-dark">$0.00</button><input class="p-4 rounded-l leading-none w-full" type="text" /></div>
                    </label>
                    <label class="flex flex-col mb-6">
                        <div class="flex"><input class="p-4 rounded-l leading-none w-full" type="text" /><button class="bg-gray-200 text-dark-primary rounded-r px-4 transition hover:bg-blue-dark focus:bg-blue-dark">$0.00</button></div>
                    </label>

                    <label class="flex flex-col mb-6">
                        <div class="flex"><button class="w-1/4 bg-gray-200 text-dark-bgnav rounded-r py-5 px-6 transition hover:bg-blue-dark focus:bg-blue-dark">With textarea</button><input class="p-4 rounded-l leading-none w-full" type="text" /></div>
                    </label>
                    <label class="flex flex-col mb-6">
                        <div class="flex">
                            <button class="w-1/2 bg-gray-200 text-dark-bgnav text-nowrap rounded-r px-2 transition hover:bg-blue-dark focus:bg-blue-dark">First and last name</button><input class="px-2 rounded-l leading-none w-full" type="text" /><input
                                class="px-2 rounded-l leading-none w-full"
                                type="text"
                            />
                        </div>
                    </label>
                    <label class="flex flex-col mb-6">
                        <div class="flex">
                            <button class="bg-gray-200 text-dark-bgnav rounded-r px-4 transition hover:bg-blue-dark focus:bg-blue-dark">
                                <input
                                    id="bordered-checkbox-1"
                                    type="checkbox"
                                    value=""
                                    name="bordered-checkbox"
                                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                /></button
                            ><input class="px-4 rounded-l leading-none w-full" type="text" />
                        </div>
                    </label>
                    <label class="flex flex-col mb-6">
                        <div class="flex">
                            <button class="bg-gray-200 text-dark-bgnav rounded-r px-3 transition hover:bg-blue-dark focus:bg-blue-dark">
                                <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></button
                            ><input class="px-3 rounded-l leading-none w-full" type="text" />
                        </div>
                    </label>
                </form>
            </div>

            <!-- ============================================= Buttons with dropdowns ======================================================= -->
            <div class="container py-8 px-4 bg-white w-full h-auto shadow-xl">
                <form action="" class=" ">
                    <h1 class="text-nowrap font-medium text-gray-900 mb-5" id="slide-over-title">Buttons with dropdowns</h1>
                    <label class="flex flex-col mt-6 text-start gap-1">
                        <span class="mb-2 inline-block cursor-pointer">List of buttons with dropdowns.</span>
                        <div class="flex">
                            <button class="bg-gray-200 hover:bg-gray-800 hover:text-white trans text-dark-bgnav rounded-l px-2 trans hover:bg-blue-dark focus:bg-blue-dark" type="button">button</button>
                            <input class="px-2 rounded-r leading-none w-full" type="text" />
                        </div>
                    </label>
                    <label class="flex flex-col mt-6 text-start gap-1">
                        <div class="flex">
                            <input class="px-2 rounded-r leading-none w-full" type="text" placeholder="Recipient's username " /><button class="bg-gray-200 text-dark-bgnav hover:bg-gray-800 hover:text-white trans rounded-l px-2 transition hover:bg-blue-dark focus:bg-blue-dark" type="button">
                                button
                            </button>
                        </div>
                    </label>

                    <label class="flex flex-col mt-6 text-start gap-1">
                        <div class="flex">
                            <button class="bg-gray-200 text-dark-bgnav hover:bg-gray-800 hover:text-white trans rounded-l px-2" type="button">button</button>
                            <button class="bg-gray-200 text-dark-bgnav hover:bg-gray-800 hover:text-white trans px-2" type="button">button</button>
                            <input class="px-2 rounded-r leading-none w-full" type="text" />
                        </div>
                    </label>
                    <label class="flex flex-col mt-6 text-start gap-1">
                        <div class="flex">
                            <input class="px-2 rounded-l leading-none w-full" type="text" placeholder="Recipient's username" /><button class="bg-gray-200 text-dark-bgnav hover:bg-gray-800 hover:text-white trans px-2" type="button">button</button>
                            <button class="bg-gray-200 text-dark-bgnav hover:bg-gray-800 hover:text-white trans rounded-r px-2" type="button">button</button>
                        </div>
                    </label>

                    <label class="flex flex-col mt-6 text-start gap-1">
                        <div class="flex">
                            <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="bg-gray-200 hover:bg-gray-800 hover:text-white trans text-dark-bgnav flex text-center rounded-l px-2 trans hover:bg-blue-dark focus:bg-blue-dark" type="button">
                                Dropdown
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6" /></svg>
                            </button>

                            <input class="px-2 rounded-r leading-none w-full" type="text" />
                        </div>
                    </label>
                    <label class="flex flex-col mt-6 text-start gap-1">
                        <div class="flex">
                            <input class="px-2 rounded-r leading-none w-full" type="text" /><button
                                id="dropdownDefaultButton"
                                data-dropdown-toggle="dropdown"
                                class="bg-gray-200 hover:bg-gray-800 hover:text-white trans text-dark-bgnav flex text-center rounded-l px-2 trans hover:bg-blue-dark focus:bg-blue-dark"
                                type="button"
                            >
                                Dropdown
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6" /></svg>
                            </button>
                        </div>
                    </label>

                    <label class="flex flex-col mt-6 text-start gap-1">
                        <div class="flex">
                            <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="bg-gray-200 hover:bg-gray-800 hover:text-white trans text-dark-bgnav flex text-center rounded-l px-2 trans hover:bg-blue-dark focus:bg-blue-dark" type="button">
                                Action
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6" /></svg>
                            </button>

                            <input class="px-2 rounded-r leading-none w-full" type="text" />
                        </div>
                    </label>

                    <label class="flex flex-col mt-6 text-start gap-1">
                        <div class="flex">
                            <input class="px-2 rounded-r leading-none w-full" type="text" /><button
                                id="dropdownDefaultButton"
                                data-dropdown-toggle="dropdown"
                                class="bg-gray-200 hover:bg-gray-800 hover:text-white trans text-dark-bgnav flex text-center rounded-l px-2 trans hover:bg-blue-dark focus:bg-blue-dark"
                                type="button"
                            >
                                <span>Action</span>
                                <span class="border-l border-gray-800">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6" /></svg
                                ></span>
                            </button>
                        </div>
                    </label>
                </form>
            </div>
        </div>

        <!-- ========================================================  Custom select ================================================================= -->
        <div class="grid gap-2 md:grid-cols-1 lg:grid-cols-2">
            <div class="container py-8 px-4 bg-white w-full h-auto shadow-xl">
                <form action="" class=" ">
                    <h1 class="text-nowrap font-medium text-gray-900 mb-5" id="slide-over-title">Custom select</h1>
                    <label class="flex flex-col mt-6 text-start gap-1">
                        <span class="mb-2 inline-block cursor-pointer">List of Custom select.</span>
                        <div class="flex">
                            <button class="bg-gray-200 hover:bg-gray-800 hover:text-white trans text-dark-bgnav rounded-l px-2 trans hover:bg-blue-dark focus:bg-blue-dark" type="button">Options</button>

                            <select
                                id="countries"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-r focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            >
                                <option selected>Choose...</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                    </label>
                    <label class="flex flex-col mt-6 text-start gap-1">
                        <div class="flex">
                            <select
                                id="countries"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            >
                                <option selected>Choose...</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                            <button class="bg-gray-200 hover:bg-gray-800 hover:text-white trans text-dark-bgnav rounded-r px-2 trans hover:bg-blue-dark focus:bg-blue-dark" type="button">Options</button>
                        </div>
                    </label>
                    <label class="flex flex-col mt-6 text-start gap-1">
                        <div class="flex">
                            <button class="bg-gray-200 hover:bg-gray-800 hover:text-white trans text-dark-bgnav rounded-l px-2 trans hover:bg-blue-dark focus:bg-blue-dark" type="button">Options</button
                            ><select
                                id="countries"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-r focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            >
                                <option selected>Choose...</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                    </label>
                    <label class="flex flex-col mt-6 text-start gap-1">
                        <div class="flex">
                            <select
                                id="countries"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            >
                                <option selected>Choose...</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                            <button class="bg-gray-200 hover:bg-gray-800 hover:text-white trans text-dark-bgnav rounded-r px-2 trans hover:bg-blue-dark focus:bg-blue-dark" type="button">Options</button>
                        </div>
                    </label>
                </form>
            </div>

            <!-- =========================================== Custom file input ============================================= -->
            <div class="container py-8 px-4 bg-white w-full h-auto shadow-xl">
                <form action="" class=" ">
                    <h1 class="text-nowrap font-medium text-gray-900 mb-5" id="slide-over-title">Custom file input</h1>
                    <label class="flex flex-col mt-6 text-start gap-1">
                        <span class="mb-2 inline-block cursor-pointer">List of Custom file input.</span>
                        <div class="flex">
                            <button class="bg-gray-200 rounded-l px-2 trans" type="button">Upload</button>
                            <button class="bg-gray-200 hover:bg-gray-800 hover:text-white trans text-nowrap text-dark-bgnav px-2 trans hover:bg-blue-dark" type="button">Choose File</button>

                            <select
                                id="Files"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-r focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            >
                                <option selected>No Choose File</option>
                            </select>
                        </div>
                    </label>
                    <label class="flex flex-col mt-6 text-start gap-1">
                        <div class="flex">
                            <button class="bg-gray-200 hover:bg-gray-800 hover:text-white rounded-l trans text-nowrap text-dark-bgnav px-2 trans hover:bg-blue-dark" type="button">Choose File</button>
                            <select
                                id="Files"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            >
                                <option selected>No Choose File</option>
                            </select>
                            <button class="bg-gray-200 rounded-r px-2 trans" type="button">Upload</button>
                        </div>
                    </label>
                    <label class="flex flex-col mt-6 text-start gap-1">
                        <div class="flex">
                            <button class="bg-white hover:bg-gray-200 border border-gray-950 rounded-l px-2 trans" type="button">Button</button> <button class="bg-gray-200 text-nowrap text-dark-bgnav px-2" type="button">Choose File</button
                            ><select
                                id="Files"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-r focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            >
                                <option selected>No Choose File</option>
                            </select>
                        </div>
                    </label>
                    <label class="flex flex-col mt-6 text-start gap-1">
                        <div class="flex">
                         <button class="bg-gray-200 hover:bg-gray-300 rounded-l text-nowrap text-dark-bgnav px-2" type="button">Choose File</button
                            >  <select
                                id="Files"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            >
                            <option selected>No Choose File</option>
                            </select>
                            <button class="bg-white hover:bg-gray-200 border border-gray-950 rounded-r px-2 trans" type="button">Button</button>
                        </div>
                    </label>
                </form>
            </div>
        </div>
    </section>
</template>

<script>
export default {}
</script>

<style>
.trans {
    transition: all 1s;
}
</style>
