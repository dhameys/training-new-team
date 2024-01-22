<template>
    <section class="w-full p-4 bg-gray-100 border border-gray-200 shadow sm:p-6 md:p-8 dark:border-gray-700">
        <div class="flex gap-3 mb-2">
            <div class="container py-3 px-4 bg-white w-1/2 h-auto relative shadow-xl">
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

            <!-- ==================================== Horizontal form ==================================== -->
            <div class="container py-4 px-4 bg-white w-1/2 h-auto shadow-xl">
                <h1 class="text-nowrap font-normal text-gray-900 mb-4" id="slide-over-title">Horizontal form</h1>
                <p class="font-normal text-gray-900 mb-2">
                    Create horizontal forms with the grid by adding the .row class to form groups and using the .col-*-* classes to specify the width of your labels and controls. Be sure to add .col-form-label to your labels as well so they’re vertically centered with their associated form controls.
                </p>
                <div class="p-3">
                    <div class="mt-2">
                        <div class="flex flex-col md:flex-row border-gray-200">
                            <div class="w-64 font-bold h-6 mx-2 mt-3 text-gray-800">Email</div>
                            <div class="flex-1 flex flex-col md:flex-row">
                                <div class="w-full flex-1 mx-2">
                                    <div class="my-2 p-1 bg-white flex border border-gray-200 rounded">
                                        <input placeholder="Email" class="p-1 px-2 appearance-none outline-none w-full text-gray-800" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col md:flex-row border-gray-200">
                            <div class="w-64 font-bold h-6 mx-2 mt-3 text-gray-800">Password</div>
                            <div class="flex-1 flex flex-col md:flex-row">
                                <div class="w-full flex-1 mx-2">
                                    <div class="my-2 p-1 bg-white flex border border-gray-200 rounded">
                                        <input placeholder="Password" class="p-1 px-2 appearance-none outline-none w-full text-gray-800" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col md:flex-row border-gray-200">
                            <div class="w-64 font-bold h-6 mx-2 mt-3 text-gray-800">Radios</div>
                            <div class="flex-1 flex flex-col md:flex-row">
                                <div class="w-full flex-1 mx-2">
                                    <div class="grid gap-1 mt-2">
                                        <div>
                                            <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label for="default-radio-1" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">First radio</label>
                                        </div>
                                        <div>
                                            <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label for="default-radio-1" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Second radio</label>
                                        </div>
                                        <div>
                                            <input
                                                disabled
                                                id="disabled-radio-1"
                                                type="radio"
                                                value=""
                                                name="disabled-radio"
                                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                            />
                                            <label for="disabled-radio-1" class="ms-2 text-sm font-medium text-gray-400 dark:text-gray-500">Disabled radio</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col md:flex-row border-gray-200">
                            <div class="w-64 font-bold h-6 mx-2 mt-3 text-gray-800">Checkbox</div>
                            <div class="flex-1 flex flex-col md:flex-row">
                                <div class="w-full flex-1 mx-2">
                                    <div class="grid gap-1 mt-2">
                                        <div>
                                            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label for="default-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Example checkbox</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col md:flex-row border-gray-200 mt-2">
                            <button class="block bg-blue-500 hover:bg-blue-700 text-white font-bold divy-2 px-4 py-2 rounded focus:outline-none focus:shadow-outline" type="Sign in">Sign in</button>
                            <div class="flex-1 flex flex-col md:flex-row">
                                <div class="w-full flex-1 mx-2">
                                    <div class="grid gap-1 mt-2"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- ================================ Inline form ========================== -->

        <div class="flex gap-3 mb-2">
            <div class="container py-3 px-4 bg-white w-full h-auto relative shadow-xl">
                
                <form class="w-full h-auto" action="">
                    <h1 class="text-nowrap font-normal text-gray-900 mb-4" id="slide-over-title">Inline Form</h1>
                    <p class="font-normal text-wrap text-gray-900 mb-4">Use the grid and utilities class to display a series of labels, form controls, and buttons on a single horizontal row.  Form controls within inline forms vary slightly from their default states.<br> Inline Form</p>
                    <div class="flex flex-col md:flex-row border-gray-200">
                        <div class="w-64 font-bold h-6 mx-2 mt-3 text-gray-800">email@example.com</div>
                        <div class="flex-1 flex flex-col md:flex-row">
                            <div class="w-full flex mx-2 items-center">
                                <div class="my-2 p-1 bg-white flex border border-gray-200 rounded">
                                    <input placeholder="Password" class="p-1 px-2 appearance-none outline-none w-full text-gray-800" />
                                </div>
                                <button class="btn h-[40px] text-nowrap btn-sm bg-blue-500 hover:bg-blue-700 text-white font-bol px-2 rounded focus:outline-none focus:shadow-outline ml-2 py-2" type="Sign in">Confirm Identity</button>
                            </div>
                        </div>
                    </div>
                </form>
                <form class="w-full h-auto" action="">
                   <label for="">Auto-sizing Form</label>
                    <div class="flex flex-col md:flex-row border-gray-200">
                        <div class="my-2 p-1 bg-white flex border border-gray-200 rounded">
                                    <input placeholder="Password" class="p-1 px-2 appearance-none outline-none w-full text-gray-800" />
                                </div>
                        <div class="flex-1 flex flex-col md:flex-row">
                            <div class="w-full flex mx-2 items-center">
                                <div class="my-2  flex">
                                    <div class="flex gap-2">
                            <div class="flex  ml-2">
                                <button class="w-[3rem] bg-gray-200 text-gray-400 rounded-l transition hover:bg-blue-dark focus:bg-blue-dark">@</button>
                                <input class=" rounded-r leading-none w-[12rem]" type="text" placeholder="Username" />
                            </div> 
                            <div class="ml-2 flex items-center">
                                            <input id="" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label for="" class="ms-2 text-[12px] font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                                        </div>
                                        
                                
                                
                                <button class="btn h-[35px] text-nowrap btn-sm bg-blue-500 hover:bg-blue-700 text-white font-bol px-2 rounded focus:outline-none focus:shadow-outline ml-2 py-2" type="Sign in">Submit</button>
                            </div>
                            </div>
                        </div>
                    </div>
                    </div></form>
            </div>
        </div>



                   <!-- ============================= Form row ==================================== -->


                   <div class="flex gap-3 mb-2">
                    <div class="container pb-16 px-4 bg-white w-full h-auto relative shadow-xl">
            
                <form class="w-full  h-auto" action="">
                    <h1 class="text-nowrap font-normal text-gray-900 mb-4" id="slide-over-title">Form row</h1>
                    <div class="grid grid-cols-2 gap-2">
                        <label class="flex flex-wrap mb-2 w-ful items-center">
                            <span class="mb-2 inline-block text-nowrap font-normal cursor-pointer">Email</span>
                            
                                <input class="p-2 rounded-r font-medium leading-none w-full" type="text" placeholder="Enter Email" />
                        
                            
                        </label>
                        <label class="w-ful flex flex-wrap items-center gap-2 mb-2">
                            <span class="mb-2 inline-block font-normal cursor-pointer">Password</span>
                           
                                <input class="p-2 rounded-r font-medium leading-none w-full" type="text" placeholder="Enter Password" />
                        
                        
                        </label>
                    </div>
                    <label class="w-ful flex flex-wrap items-center gap-2 mt-2">
                            <span class="mb-0 inline-block font-normal cursor-pointer">Address</span>
                           
                                <input class="p-1 rounded-r font-medium leading-none w-full" type="text" placeholder="Hodan, mogadishu" />
                        
                        
                        </label> 
                    <label class="w-ful flex flex-wrap items-center gap-2 mt-2">
                            <span class="mb-0 inline-block font-normal cursor-pointer">Address 2</span>
                           
                                <input class="p-1 rounded-r font-medium leading-none w-full" type="text" placeholder="Taleh street" />
                        
                        
                        </label>

                        <div class="grid grid-cols-12 gap-4 mt-5 items-center">
                            <div class="col-span-12 md:col-span-6">
                        <label class="flex flex-wrap  w-ful items-center gap-2 mb-2">
                            <span class="mb-0 inline-block text-nowrap font-normal cursor-pointer">City</span>
                            
                                <input class="p-1 rounded-r font-medium leading-none w-full" type="text" />
                        
                            
                        </label>
                    </div>
                    <div class="col-span-12 md:col-span-4">
                        <label class="w-ful flex flex-wrap items-center gap-2 mb-2">
                            <span class="mb-0 inline-block font-normal cursor-pointer">State</span>
                           
                            <select
                                id="Files"
                                class=" p-1 rounded-r font-medium leading-none w-full"
                            >
                                <option >Choose...</option>
                                <option >......</option>
                                
                            </select>
                            
                        
                        </label>
                    </div>
                    <div class="col-span-12 md:col-span-2">
                        <label class="w-ful flex flex-wrap items-center gap-2 mb-2">
                            <span class="mb-0 inline-block font-normal cursor-pointer">Zip</span>
                           
                                <input class="p-1 rounded-r font-medium leading-none w-full" type="text" />
                        
                        
                        </label>
                    </div>
                    </div>

                </form>
                <div class="mt-2">
                                            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label for="default-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Check me out</label>
                                        </div>
                <button class="block bg-blue-500 hover:bg-blue-700 text-white font-bold divy-2 px-1 py-1 rounded focus:outline-none focus:shadow-outline mt-2" type="Sign in">Sign in</button>
            </div>
            
        </div>




    </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
