<template>
    <div class="bg-white w-full">
        <div class="bg-[#64C5B1] h-32 pt-5 pl-5 text-xl text-white font-mono">
            <h2>product</h2>
            <p class="text-sm font-thin grid grid-cols-2 absolute">
                salessa
                <span
                    ><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg
                ></span>
            </p>
            <p class="text-sm font-thin grid grid-cols-2 absolute ml-20">
                Dashboard
                <span class="grid grid-cols-2"
                    ><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg>sales</span
                >
            </p>
            <div class="w-auto h-10 grid justify-end pr-5 mb-10">
                <button class="bg-white w-28 h-10 text-xs hover:bg-blue-500 hover:text-white rounded-md text-black">Create report</button>
            </div>
        </div>
      <!-- Statistics: Simple with Action -->
      <div class="grid grid-cols-1 gap-4 md:grid-cols-3 lg:gap-8">
        <!-- Card -->
        <div
          class="flex flex-col overflow-hidden rounded-lg bg-white shadow-sm dark:bg-gray-800 dark:text-gray-100"
        >
          <!-- Body -->
          <div class="flex grow items-center justify-between p-5">
            <dl class="space-y-1">
              <dt class="text-2xl font-bold">146</dt>
              <dd
                class="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400"
              >
                Sales
              </dd>
            </dl>
            <div
              class="inline-flex items-center space-x-1 rounded-full bg-emerald-200 px-2 py-1 text-sm font-semibold leading-4 text-emerald-800"
            >
              <svg
                class="hi-solid hi-arrow-circle-up inline-block size-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
              <span>7.9%</span>
            </div>
          </div>
          <!-- END Body -->
    
          <!-- Action Link -->
          <a
            href="#"
            class="block bg-gray-50 p-3 text-center text-sm font-medium text-blue-600 hover:bg-gray-100 hover:bg-opacity-75 hover:text-blue-700 active:bg-gray-50 dark:bg-gray-900/50 dark:text-blue-400 dark:hover:bg-gray-900/75 dark:hover:text-blue-300 dark:active:bg-gray-900/50"
          >
            View All Sales
          </a>
          <!-- END Action Link -->
        </div>
        <!-- END Card -->
    
        <!-- Card -->
        <div
          class="flex flex-col overflow-hidden rounded-lg bg-white shadow-sm dark:bg-gray-800 dark:text-gray-100"
        >
          <!-- Body -->
          <div class="flex grow items-center justify-between p-5">
            <dl class="space-y-1">
              <dt class="text-2xl font-bold">$5,128</dt>
              <dd
                class="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400"
              >
                Earnings
              </dd>
            </dl>
            <div
              class="inline-flex items-center space-x-1 rounded-full bg-rose-200 px-2 py-1 text-sm font-semibold leading-4 text-rose-800"
            >
              <svg
                class="hi-solid hi-arrow-circle-down inline-block size-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z"
                  clip-rule="evenodd"
                />
              </svg>
              <span>6.9%</span>
            </div>
          </div>
          <!-- END Body -->
    
          <!-- Action Link -->
          <a
            href="#"
            class="block bg-gray-50 p-3 text-center text-sm font-medium text-blue-600 hover:bg-gray-100 hover:bg-opacity-75 hover:text-blue-700 active:bg-gray-50 dark:bg-gray-900/50 dark:text-blue-400 dark:hover:bg-gray-900/75 dark:hover:text-blue-300 dark:active:bg-gray-900/50"
          >
            View all Earnings
          </a>
          <!-- END Action Link -->
        </div>
        <!-- END Card -->
    
        <!-- Card -->
        <div
          class="flex flex-col overflow-hidden rounded-lg bg-white shadow-sm dark:bg-gray-800 dark:text-gray-100"
        >
          <!-- Body -->
          <div class="flex grow items-center justify-between p-5">
            <dl class="space-y-1">
              <dt class="text-2xl font-bold">$2,670</dt>
              <dd
                class="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400"
              >
                Wallet
              </dd>
            </dl>
            <div
              class="inline-flex items-center space-x-1 rounded-full bg-emerald-200 px-2 py-1 text-sm font-semibold leading-4 text-emerald-800"
            >
              <svg
                class="hi-solid hi-arrow-circle-up inline-block size-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
              <span>5.6%</span>
            </div>
          </div>
          <!-- END Body -->
    
          <!-- Action Link -->
          <a
            href="#"
            class="block bg-gray-50 p-3 text-center text-sm font-medium text-blue-600 hover:bg-gray-100 hover:bg-opacity-75 hover:text-blue-700 active:bg-gray-50 dark:bg-gray-900/50 dark:text-blue-400 dark:hover:bg-gray-900/75 dark:hover:text-blue-300 dark:active:bg-gray-900/50"
          >
            Check your Balance
          </a>
          <!-- END Action Link -->
        </div>
        <!-- END Card -->
      </div>
      <!-- END Statistics: Simple with Action -->
    
    
      
  <div tabindex="0" class="focus:outline-none">
    <!-- Remove py-8 -->
    <div class="mx-auto container py-8">
        <div class="flex flex-wrap items-center lg:justify-between justify-center">
            <!-- Card 1 -->
            <div tabindex="0" class="focus:outline-none mx-2 w-72 xl:mb-0 mb-8">
                <div>
                    <img alt="person capturing an image" src="https://cdn.tuk.dev/assets/templates/classified/Bitmap (1).png" tabindex="0" class="focus:outline-none w-full h-44" />
                </div>
                <div class="bg-white dark:bg-gray-800">
                    <div class="flex items-center justify-between px-4 pt-4">
                        <div>
                            <img class="dark:bg-white focus:outline-none" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/4-by-2-col-grid-svg1.svg" alt="bookmark" />
                        </div>
                        <div class="bg-yellow-200 py-1.5 px-6 rounded-full">
                            <p tabindex="0" class="focus:outline-none text-xs text-yellow-700">Featured</p>
                        </div>
                    </div>
                    <div class="p-4">
                        <div class="flex items-center">
                            <h2 tabindex="0" class="focus:outline-none text-lg dark:text-white font-semibold">iphone XS</h2>
                            <p tabindex="0" class="focus:outline-none text-xs text-gray-600 dark:text-gray-200 pl-5">4 days ago</p>
                        </div>
                        <p tabindex="0" class="focus:outline-none text-xs text-gray-600 dark:text-gray-200 mt-2">The Apple iPhone XS is available in 3 colors with 64GB memory. Shoot amazing videos</p>
                        <div class="flex mt-4">
                            <div>
                                <p tabindex="0" class="focus:outline-none text-xs text-gray-600 dark:text-gray-200 px-2 bg-gray-200 dark:bg-gray-700 py-1">12 months warranty</p>
                            </div>
                            <div class="pl-2">
                                <p tabindex="0" class="focus:outline-none text-xs text-gray-600 dark:text-gray-200 px-2 bg-gray-200 dark:bg-gray-700 py-1">Complete box</p>
                            </div>
                        </div>
                        <div class="flex items-center justify-between py-4">
                            <h2 tabindex="0" class="focus:outline-none text-indigo-700 text-xs font-semibold">Bay Area, San Francisco</h2>
                            <h3 tabindex="0" class="focus:outline-none text-indigo-700 text-xl font-semibold">$350</h3>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Card 1 Ends -->
            <!-- Card 2 -->
            <div tabindex="0" class="focus:outline-none mx-2 w-72 xl:mb-0 mb-8">
                <div>
                    <img alt="person capturing an image" src="https://cdn.tuk.dev/assets/templates/classified/Bitmap (1).png" tabindex="0" class="focus:outline-none w-full h-44" />
                </div>
                <div class="bg-white dark:bg-gray-800">
                    <div class="flex items-center justify-between px-4 pt-4">
                        <div>
                            <img class="dark:bg-white focus:outline-none" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/4-by-2-col-grid-svg1.svg" alt="bookmark" />
                        </div>
                        <div class="bg-yellow-200 py-1.5 px-6 rounded-full">
                            <p tabindex="0" class="focus:outline-none text-xs text-yellow-700">Featured</p>
                        </div>
                    </div>
                    <div class="p-4">
                        <div class="flex items-center">
                            <h2 tabindex="0" class="focus:outline-none text-lg dark:text-white font-semibold">iphone XS</h2>
                            <p tabindex="0" class="focus:outline-none text-xs text-gray-600 dark:text-gray-200 pl-5">4 days ago</p>
                        </div>
                        <p tabindex="0" class="focus:outline-none text-xs text-gray-600 dark:text-gray-200 mt-2">The Apple iPhone XS is available in 3 colors with 64GB memory. Shoot amazing videos</p>
                        <div class="flex mt-4">
                            <div>
                                <p tabindex="0" class="focus:outline-none text-xs text-gray-600 dark:text-gray-200 px-2 bg-gray-200 dark:bg-gray-700 py-1">12 months warranty</p>
                            </div>
                            <div class="pl-2">
                                <p tabindex="0" class="focus:outline-none text-xs text-gray-600 dark:text-gray-200 px-2 bg-gray-200 dark:bg-gray-700 py-1">Complete box</p>
                            </div>
                        </div>
                        <div class="flex items-center justify-between py-4">
                            <h2 tabindex="0" class="focus:outline-none text-indigo-700 text-xs font-semibold">Bay Area, San Francisco</h2>
                            <h3 tabindex="0" class="focus:outline-none text-indigo-700 text-xl font-semibold">$350</h3>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Card 2 Ends -->
            <!-- Card 3  -->
            <div tabindex="0" class="focus:outline-none mx-2 w-72 xl:mb-0 mb-8">
                <div>
                    <img alt="person capturing an image" src="https://cdn.tuk.dev/assets/templates/classified/Bitmap (1).png" tabindex="0" class="focus:outline-none w-full h-44" />
                </div>
                <div class="bg-white dark:bg-gray-800">
                    <div class="flex items-center justify-between px-4 pt-4">
                        <div>
                            <img class="dark:bg-white focus:outline-none" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/4-by-2-col-grid-svg1.svg" alt="bookmark" />
                        </div>
                        <div class="bg-yellow-200 py-1.5 px-6 rounded-full">
                            <p tabindex="0" class="focus:outline-none text-xs text-yellow-700">Featured</p>
                        </div>
                    </div>
                    <div class="p-4">
                        <div class="flex items-center">
                            <h2 tabindex="0" class="focus:outline-none text-lg dark:text-white font-semibold">iphone XS</h2>
                            <p tabindex="0" class="focus:outline-none text-xs text-gray-600 dark:text-gray-200 pl-5">4 days ago</p>
                        </div>
                        <p tabindex="0" class="focus:outline-none text-xs text-gray-600 dark:text-gray-200 mt-2">The Apple iPhone XS is available in 3 colors with 64GB memory. Shoot amazing videos</p>
                        <div class="flex mt-4">
                            <div>
                                <p tabindex="0" class="focus:outline-none text-xs text-gray-600 dark:text-gray-200 px-2 bg-gray-200 dark:bg-gray-700 py-1">12 months warranty</p>
                            </div>
                            <div class="pl-2">
                                <p tabindex="0" class="focus:outline-none text-xs text-gray-600 dark:text-gray-200 px-2 bg-gray-200 dark:bg-gray-700 py-1">Complete box</p>
                            </div>
                        </div>
                        <div class="flex items-center justify-between py-4">
                            <h2 tabindex="0" class="focus:outline-none text-indigo-700 text-xs font-semibold">Bay Area, San Francisco</h2>
                            <h3 tabindex="0" class="focus:outline-none text-indigo-700 text-xl font-semibold">$350</h3>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Card 3 Ends -->
            <!-- Card 4  -->
            <div tabindex="0" class="focus:outline-none mx-2 w-72 xl:mb-0 mb-8">
                <div>
                    <img alt="person capturing an image" src="https://cdn.tuk.dev/assets/templates/classified/Bitmap (1).png" tabindex="0" class="focus:outline-none w-full h-44" />
                </div>
                <div class="bg-white dark:bg-gray-800">
                    <div class="flex items-center justify-between px-4 pt-4">
                        <div>
                            <img class="dark:bg-white focus:outline-none" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/4-by-2-col-grid-svg1.svg" alt="bookmark" />
                        </div>
                        <div class="bg-yellow-200 py-1.5 px-6 rounded-full">
                            <p tabindex="0" class="focus:outline-none text-xs text-yellow-700">Featured</p>
                        </div>
                    </div>
                    <div class="p-4">
                        <div class="flex items-center">
                            <h2 tabindex="0" class="focus:outline-none text-lg dark:text-white font-semibold">iphone XS</h2>
                            <p tabindex="0" class="focus:outline-none text-xs text-gray-600 dark:text-gray-200 pl-5">4 days ago</p>
                        </div>
                        <p tabindex="0" class="focus:outline-none text-xs text-gray-600 dark:text-gray-200 mt-2">The Apple iPhone XS is available in 3 colors with 64GB memory. Shoot amazing videos</p>
                        <div class="flex mt-4">
                            <div>
                                <p tabindex="0" class="focus:outline-none text-xs text-gray-600 dark:text-gray-200 px-2 bg-gray-200 dark:bg-gray-700 py-1">12 months warranty</p>
                            </div>
                            <div class="pl-2">
                                <p tabindex="0" class="focus:outline-none text-xs text-gray-600 dark:text-gray-200 px-2 bg-gray-200 dark:bg-gray-700 py-1">Complete box</p>
                            </div>
                        </div>
                        <div class="flex items-center justify-between py-4">
                            <h2 tabindex="0" class="focus:outline-none text-indigo-700 text-xs font-semibold">Bay Area, San Francisco</h2>
                            <h3 tabindex="0" class="focus:outline-none text-indigo-700 text-xl font-semibold">$350</h3>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Card 4 Ends -->
        </div>
        <div class="flex flex-wrap items-center lg:justify-between justify-center pb-10 mt-16">
            <!-- Card 1 -->
            <div tabindex="0" class="focus:outline-none mx-2 w-72 xl:mb-0 mb-8">
                <div>
                    <img alt="girl texting" src="https://cdn.tuk.dev/assets/templates/classified/Bitmap.png" class="focus:outline-none w-full h-44" />
                </div>
                <div class="bg-white dark:bg-gray-800">
                    <div class="flex items-center justify-between px-4 pt-4">
                        <div>
                            <img class="dark:bg-white focus:outline-none" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/4-by-2-col-grid-svg1.svg" alt="bookmark" />
                        </div>
                        <div class="bg-yellow-200 py-1.5 px-6 rounded-full">
                            <p tabindex="0" class="focus:outline-none text-xs text-yellow-700">Featured</p>
                        </div>
                    </div>
                    <div class="p-4">
                        <div class="flex items-center">
                            <h2 tabindex="0" class="focus:outline-none text-lg dark:text-white font-semibold">iphone XS</h2>
                            <p tabindex="0" class="focus:outline-none text-xs text-gray-600 dark:text-gray-200 pl-5">4 days ago</p>
                        </div>
                        <p tabindex="0" class="focus:outline-none text-xs text-gray-600 dark:text-gray-200 mt-2">The Apple iPhone XS is available in 3 colors with 64GB memory. Shoot amazing videos</p>
                        <div class="flex mt-4">
                            <div>
                                <p tabindex="0" class="focus:outline-none text-xs text-gray-600 dark:text-gray-200 px-2 bg-gray-200 dark:bg-gray-700 py-1">12 months warranty</p>
                            </div>
                            <div class="pl-2">
                                <p tabindex="0" class="focus:outline-none text-xs text-gray-600 dark:text-gray-200 px-2 bg-gray-200 dark:bg-gray-700 py-1">Complete box</p>
                            </div>
                        </div>
                        <div class="flex items-center justify-between py-4">
                            <h2 tabindex="0" class="focus:outline-none text-indigo-700 text-xs font-semibold">Bay Area, San Francisco</h2>
                            <h3 tabindex="0" class="focus:outline-none text-indigo-700 text-xl font-semibold">$350</h3>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Card 1 Ends -->
            <!-- Card 2 -->
            <div tabindex="0" class="focus:outline-none mx-2 w-72 xl:mb-0 mb-8">
                <div>
                    <img alt="girl texting" src="https://cdn.tuk.dev/assets/templates/classified/Bitmap.png" class="focus:outline-none w-full h-44" />
                </div>
                <div class="bg-white dark:bg-gray-800">
                    <div class="flex items-center justify-between px-4 pt-4">
                        <div>
                            <img class="dark:bg-white focus:outline-none" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/4-by-2-col-grid-svg1.svg" alt="bookmark" />
                        </div>
                        <div class="bg-yellow-200 py-1.5 px-6 rounded-full">
                            <p tabindex="0" class="focus:outline-none text-xs text-yellow-700">Featured</p>
                        </div>
                    </div>
                    <div class="p-4">
                        <div class="flex items-center">
                            <h2 tabindex="0" class="focus:outline-none text-lg dark:text-white font-semibold">iphone XS</h2>
                            <p tabindex="0" class="focus:outline-none text-xs text-gray-600 dark:text-gray-200 pl-5">4 days ago</p>
                        </div>
                        <p tabindex="0" class="focus:outline-none text-xs text-gray-600 dark:text-gray-200 mt-2">The Apple iPhone XS is available in 3 colors with 64GB memory. Shoot amazing videos</p>
                        <div class="flex mt-4">
                            <div>
                                <p tabindex="0" class="focus:outline-none text-xs text-gray-600 dark:text-gray-200 px-2 bg-gray-200 dark:bg-gray-700 py-1">12 months warranty</p>
                            </div>
                            <div class="pl-2">
                                <p tabindex="0" class="focus:outline-none text-xs text-gray-600 dark:text-gray-200 px-2 bg-gray-200 dark:bg-gray-700 py-1">Complete box</p>
                            </div>
                        </div>
                        <div class="flex items-center justify-between py-4">
                            <h2 tabindex="0" class="focus:outline-none text-indigo-700 text-xs font-semibold">Bay Area, San Francisco</h2>
                            <h3 tabindex="0" class="focus:outline-none text-indigo-700 text-xl font-semibold">$350</h3>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Card 2 Ends -->
            <!-- Card 3  -->
            <div tabindex="0" class="focus:outline-none mx-2 w-72 xl:mb-0 mb-8">
                <div>
                    <img alt="girl texting" src="https://cdn.tuk.dev/assets/templates/classified/Bitmap.png" class="focus:outline-none w-full h-44" />
                </div>
                <div class="bg-white dark:bg-gray-800">
                    <div class="flex items-center justify-between px-4 pt-4">
                        <div>
                            <img class="dark:bg-white focus:outline-none" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/4-by-2-col-grid-svg1.svg" alt="bookmark" />
                        </div>
                        <div class="bg-yellow-200 py-1.5 px-6 rounded-full">
                            <p tabindex="0" class="focus:outline-none text-xs text-yellow-700">Featured</p>
                        </div>
                    </div>
                    <div class="p-4">
                        <div class="flex items-center">
                            <h2 tabindex="0" class="focus:outline-none text-lg dark:text-white font-semibold">iphone XS</h2>
                            <p tabindex="0" class="focus:outline-none text-xs text-gray-600 dark:text-gray-200 pl-5">4 days ago</p>
                        </div>
                        <p tabindex="0" class="focus:outline-none text-xs text-gray-600 dark:text-gray-200 mt-2">The Apple iPhone XS is available in 3 colors with 64GB memory. Shoot amazing videos</p>
                        <div class="flex mt-4">
                            <div>
                                <p tabindex="0" class="focus:outline-none text-xs text-gray-600 dark:text-gray-200 px-2 bg-gray-200 dark:bg-gray-700 py-1">12 months warranty</p>
                            </div>
                            <div class="pl-2">
                                <p tabindex="0" class="focus:outline-none text-xs text-gray-600 dark:text-gray-200 px-2 bg-gray-200 dark:bg-gray-700 py-1">Complete box</p>
                            </div>
                        </div>
                        <div class="flex items-center justify-between py-4">
                            <h2 tabindex="0" class="focus:outline-none text-indigo-700 text-xs font-semibold">Bay Area, San Francisco</h2>
                            <h3 tabindex="0" class="focus:outline-none text-indigo-700 text-xl font-semibold">$350</h3>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Card 3 Ends -->
            <!-- Card 4  -->
            <div tabindex="0" class="focus:outline-none mx-2 w-72 xl:mb-0 mb-8">
                <div>
                    <img alt="girl texting" src="https://cdn.tuk.dev/assets/templates/classified/Bitmap.png" class="focus:outline-none w-full h-44" />
                </div>
                <div class="bg-white dark:bg-gray-800">
                    <div class="flex items-center justify-between px-4 pt-4">
                        <div>
                            <img class="dark:bg-white focus:outline-none" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/4-by-2-col-grid-svg1.svg" alt="bookmark" />
                        </div>
                        <div class="bg-yellow-200 py-1.5 px-6 rounded-full">
                            <p tabindex="0" class="focus:outline-none text-xs text-yellow-700">Featured</p>
                        </div>
                    </div>
                    <div class="p-4">
                        <div class="flex items-center">
                            <h2 tabindex="0" class="focus:outline-none text-lg dark:text-white font-semibold">iphone XS</h2>
                            <p tabindex="0" class="focus:outline-none text-xs text-gray-600 dark:text-gray-200 pl-5">4 days ago</p>
                        </div>
                        <p tabindex="0" class="focus:outline-none text-xs text-gray-600 dark:text-gray-200 mt-2">The Apple iPhone XS is available in 3 colors with 64GB memory. Shoot amazing videos</p>
                        <div class="flex mt-4">
                            <div>
                                <p tabindex="0" class="focus:outline-none text-xs text-gray-600 dark:text-gray-200 px-2 bg-gray-200 dark:bg-gray-700 py-1">12 months warranty</p>
                            </div>
                            <div class="pl-2">
                                <p tabindex="0" class="focus:outline-none text-xs text-gray-600 dark:text-gray-200 px-2 bg-gray-200 dark:bg-gray-700 py-1">Complete box</p>
                            </div>
                        </div>
                        <div class="flex items-center justify-between py-4">
                            <h2 tabindex="0" class="focus:outline-none text-indigo-700 text-xs font-semibold">Bay Area, San Francisco</h2>
                            <h3 tabindex="0" class="focus:outline-none text-indigo-700 text-xl font-semibold">$350</h3>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Card 4 Ends -->
        </div>
    </div>
</div>
</div>

</template>

<script>
export default {

}
</script>

<style>

</style>