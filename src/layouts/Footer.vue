<template>
    <div class="rounded-lg w-full fixed lg:ml-[248px] right-[0px] bottom-0 z-[90] print:hidden">
        <div class="bg-bgsidebar dark:bg-dark-bgsidebar border-bordercolor text-primary dark:text-secondary dark:text-dark-comment py-3 dark:border-dark-bordercolor text-center w-full text-sm">
            Copyright ©
            <span id="year">{{ currentYear }}</span
            ><br />
            <a href="https://dhameys.com" class="text-comment dark:text-dark-secondary"> Dhameys Technology Solutions </a>
            All rights reserved.
        </div>
    </div>
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
