<template>
    <section class="w-full relative p-4 bg-gray-100 border border-gray-200 shadow sm:p-6 md:p-8 dark:border-gray-700">
        <div class="flex gap-3 mb-2">
            <div class="container py-8 px-4 bg-white w-1/2 h-auto shadow-xl">
                <form action="">
                    <h1 class="text-nowrap font-normal text-gray-900 mb-4" id="slide-over-title">Default Usage</h1>
                    <label class="flex flex-col mb-4">
                        <span class="mb-2 inline-block font-normal cursor-pointer">The badge will show up by default when the remaining chars are 25 or less:</span>
                        <div class="flex">
                            <input class="p-2 rounded-r font-medium leading-none w-full" type="text" placeholder="Enter text" />
                        </div>
                    </label>
                </form>
            </div>
            <div class="container py-8 px-4 bg-white w-1/2 h-auto shadow-xl">
                <form action="">
                    <h1 class="text-nowrap font-normal text-gray-900 mb-4" id="slide-over-title">Threshold Value</h1>
                    <label class="flex flex-col mb-4">
                        <span class="mb-2 inline-block font-normal cursor-pointer">Do you want the badge to show up when there are 20 chars or less? Use the threshold option:</span>
                        <div class="flex">
                            <input class="p-2 rounded-r font-medium leading-none w-full" type="text" placeholder="Enter text" />
                        </div>
                    </label>
                </form>
            </div>
        </div>
        <div class="flex gap-3 mb-2">
            <div class="container py-8 px-4 bg-white w-1/2 h-auto shadow-xl">
                <form action="">
                    <h1 class="text-nowrap font-normal text-gray-900 mb-4" id="slide-over-title">All the Options</h1>
                    <label class="flex flex-col mb-4">
                        <span class="mb-2 inline-block font-normal cursor-pointer">This is a complete example where all the options configured for the bootstrap-maxlength counter are setted.</span>
                        <div class="flex">
                            <input class="p-2 rounded-r font-medium leading-none w-full" type="text" placeholder="Enter text" />
                        </div>
                    </label>
                </form>
            </div>
            <div class="container py-8 px-4 bg-white w-1/2 h-auto shadow-xl">
                <form action="">
                    <h1 class="text-nowrap font-normal text-gray-900 mb-4" id="slide-over-title">Positions</h1>
                    <label class="flex flex-col mb-4">
                        <span class="mb-2 inline-block font-normal cursor-pointer">All you need to do is specify the placement option, with one of those strings. If none is specified, the positioning will be defauted to 'bottom'.</span>
                        <div class="flex">
                            <input class="p-2 rounded-r font-medium leading-none w-full" type="text" placeholder="Enter text" />
                        </div>
                    </label>
                </form>
            </div>
        </div>
        <div class="flex gap-4 mb-2 mt-5">
            <div class="container py-8 px-4 bg-white w-full h-auto shadow-xl">
                <form action="">
                    <h1 class="text-nowrap font-normal text-gray-900 mb-4" id="slide-over-title">Positions</h1>
                    <label class="flex flex-col mb-4">
                        <span class="mb-2 inline-block font-normal cursor-pointer">Bootstrap maxlength supports textarea as well as inputs.</span>
                        <div class="flex">
                            <textarea class="p-2 rounded-r font-medium leading-none w-full" type="text" placeholder="This text area has a limit of 225 chars" />
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

<style lang="scss" scoped></style>
