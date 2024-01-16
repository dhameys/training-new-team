<template>
    <footer class="bg-white border-light dark:bg-moredark hidden lg:block fixed bottom-0 w-full z-51 ">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4 py-4">
            <div class="font-normal text-gray-400 text-center flex items-center justify-center w-full  text-[12px]">
                <!-- <span> Copyright © {{ currentYear }} <router-link :to="{ name: 'app.home' }" class="text-primary">&nbsp;Taran</router-link>. </span>
                    <span class="text-gray-400">
                        Designed with
                        <span class="fa fa-heart text-danger text-red-500"></span>
                        by
                        <a href="https://dhamey s.com/" target="blank" class="text-primary"> Dhameystech </a> All rights reserved.</span
                    > -->
                <div class="flex ">
                    <a href="/" class="text-primary font-semibold"> Taran App - </a>
                    <span class="text-gray-400 pl-1">
                        is fully owned and operated by <span class="text-primary">YIKSI LTD </span> incorporated on <span class="text-primary">22th,01,2022</span> at Taleh Street, Mogadishu. <br />
                        registration number <span class="text-primary">M0YEV16.</span> Licensed by <span class="text-primary">CBS</span> under number <span class="text-primary">MER2023-005.</span> <br />
                        <span class="text-primary">Copyright © {{ currentYear }} </span> Yiksi. All rights reserved. Powered By <a href="https://dhameys.com" target="_blank" class="text-primary uppercase"> Dhameys Technology</a>.
                    </span>
                </div>
            </div>
        </div>
    </footer>
    <footer class="font-normal mt-[70px] lg:hidden text-gray-400 text-center flex items-center justify-center text-[12px]">
        <!-- <footer class="flex justify-between w-full items-center" style="display: flex !important; position: absolute !important; bottom: 0 !important"> -->
        <div class="font-normal text-gray-400 text-center flex items-center justify-center w-full text-[12px]">
            <!-- <span class="flex max-sm:flex-col">
                <span> Copyright © {{ currentYear }} <router-link :to="{ name: 'app.home' }" class="text-primary">&nbsp;Taran</router-link>. </span>
                <span class="text-gray-400">
                    Designed with
                    <span class="fa fa-heart text-danger text-red-500"></span>
                    by
                    <a href="https://dhameys.com/" target="blank" class="text-primary"> Dhameystech </a> All rights reserved.</span
                >
            </span> -->
            <div class="px-4 leading-[18px]">
                <a href="/" class="text-primary font-semibold">Taran App - </a>
                <span class="text-gray-400 pl-1">
                    is fully owned and operated by <span class="text-primary">YIKSI LTD </span> incorporated on <span class="text-primary">22th,01,2022</span> at Taleh Street, Mogadishu. registration number <span class="text-primary">M0YEV16.</span> Licensed by
                    <span class="text-primary">CBS</span> under number <span class="text-primary">MER2023-005.</span> Copyright © {{ currentYear }} Yiksi. All rights reserved. Powered By <a href="https://dhameys.com" target="_blank" class="text-primary uppercase"> Dhameys Technology</a>.
                </span>
            </div>
        </div>
        <!-- <p class="font-normal text-gray-400 text-center flex items-center justify-center  w-full text-sm">
            Copyright © 2023
            <router-link :to="{ name: 'app.home' }">Taran</router-link>. Designed with 
            <span  class="fa fa-heart text-danger"></span> by <a href="#"> Taran </a> All rights reserved.
        </p> -->
    </footer>
</template>

<script>
export default {
    data() {
        return {
            currentYear: new Date().getFullYear()
        }
    }
}
</script>

<style lang="scss" scoped></style>
