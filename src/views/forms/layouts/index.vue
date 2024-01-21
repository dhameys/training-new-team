<template>
    <section class="w-full p-4 bg-gray-100 border border-gray-200 shadow sm:p-6 md:p-8 dark:border-gray-700">
        <div class="flex gap-3 mb-2">
            <div class="container py-3 px-4 bg-white w-1/2 h-full relative shadow-xl">
                <!-- ======================= Basic Form ============================ -->
                <form class="w-full h-auto" action="">
                    <h1 class="text-nowrap font-normal text-gray-900 mb-4" id="slide-over-title">Basic Form</h1>
                    <p class="font-normal text-gray-900 mb-4">Here’s a quick example to demonstrate Bootstrap’s form styles. Keep reading for documentation on required classes, form layout, and more.</p>
                    <label class="flex flex-col mb-2">
                        <span class="mb-2 inline-block font-normal cursor-pointer">Email address</span>
                        <div class="flex flex-wrap">
                            <input class="p-2 rounded-r font-medium leading-none w-full" type="text" placeholder="Enter Email" />
                            <p class="font-thin">We'll never share your email with anyone else.</p>
                        </div>
                    </label>
                    <label class="h-full flex flex-col mb-2">
                        <span class="mb-2 inline-block font-normal cursor-pointer">Password</span>
                        <div class="flex flex-wrap gap-2">
                            <input class="p-2 rounded-r font-medium leading-none w-full" type="text" placeholder="Enter Password" />
                        </div>
                        <div class="mt-5">
                            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 mr-1 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <span class="font-normal">Check me out</span>
                        </div>
                        <div class="mt-5"><button class="block bg-blue-500 hover:bg-blue-700 text-white font-bold divy-2 px-4 py-2 rounded focus:outline-none focus:shadow-outline" type="Submit">Submit</button></div>
                    </label>
                </form>
            </div>


            <div class="container py-8 px-4 bg-white w-1/2 h-auto shadow-xl">
                <div class="p-5">
    <div class="mt-2">
        <div class="flex flex-col md:flex-row border-b border-gray-200 pb-4 mb-4">
            <div class="w-64 font-bold h-6 mx-2 mt-3 text-gray-800">Full Name</div>
            <div class="flex-1 flex flex-col md:flex-row">
                <div class="w-full flex-1 mx-2">
                    <div class="my-2 p-1 bg-white flex border border-gray-200 rounded">
                        <input placeholder="First Name" class="p-1 px-2 appearance-none outline-none w-full text-gray-800 "> </div>
                </div>
                <div class="w-full flex-1 mx-2">
                    <div class="my-2 p-1 bg-white flex border border-gray-200 rounded">
                        <input placeholder="Last Name.." class="p-1 px-2 appearance-none outline-none w-full text-gray-800 "> </div>
                </div>
            </div>
        </div>
        <div class="flex flex-col md:flex-row pb-4 mb-4">
            <div class="w-64 font-bold h-6 mx-2 mt-3 text-gray-800">Address
                <div class="text-xs font-normal leading-none text-gray-500">Your billing address</div>
            </div>
            <div class="flex-1">
                <div class="flex flex-col md:flex-row">
                    <select class="mx-2 flex-1 h-10 mt-2 form-select w-full">
                        <option value="US">US</option>
                        <option value="Italy">Italy</option>
                        <option value="Spain">Spain</option>
                        <option value="China">China</option>
                    </select>
                    <div class="w-full flex-1 mx-2">
                        <div class="my-2 p-1 bg-white flex border border-gray-200 rounded">
                            <input placeholder="State" class="p-1 px-2 appearance-none outline-none w-full text-gray-800 "> </div>
                    </div>
                    <div class="w-full flex-1 mx-2">
                        <div class="my-2 p-1 bg-white flex border border-gray-200 rounded">
                            <input placeholder="Zip Code" class="p-1 px-2 appearance-none outline-none w-full text-gray-800 "> </div>
                    </div>
                </div>
                <div class="m-2">
                    <div class="w-full flex-1">
                        <div class="my-2 p-1 bg-white flex border border-gray-200 rounded">
                        <input placeholder="Address" class="p-1 px-2 appearance-none outline-none w-full text-gray-800 "> </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex flex-col md:flex-row">
            <div class="w-64 mx-2 font-bold h-6 mt-3 text-gray-800"></div>
            <div class="flex-1 flex flex-col md:flex-row">
                <button class="text-sm  mx-2 w-32  focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
        hover:bg-teal-700 hover:text-teal-100 
        bg-teal-100 
        text-teal-700 
        border duration-200 ease-in-out 
        border-teal-600 transition">Submit</button>
            </div>
        </div>
    </div>
</div>
            </div>
        </div>
    </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
