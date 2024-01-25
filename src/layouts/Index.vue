<template>
    <TopBar @myEvent="myaction" />
    <div class="print:hidden">
        <SideBar :class="{ 'translate-x-0': opensidebarsm, 'lg:w-[250px]': opensidebarlg }"> </SideBar>
    </div>

    <div class="print:px-0 print:m-0 print:mr-8 px-6  mt-[56px] lg:!mt-20 mb-16 print:shadow-none print:border-none" :class="{ 'md:ml-[80px] ': opensidebarmd, 'lg:ml-[250px] ': opensidebarlg }">
        <div class="overflow-scroll h-[560px] w-full rounded-lg relative transition-all duration-500 px-0.5 lg:px-1 border print:px-0 print:ml-0 print:shadow-none print:border-none">
            <router-view> </router-view>
        </div>
    </div>

    <Footer />
</template>

<script>
import TopBar from './TopBar.vue'
import SideBar from './SideBar.vue'
import Footer from './Footer.vue'

export default {
    components: {
        TopBar,
        SideBar,
        Footer
    },
    data() {
        return {
            opensidebarsm: false,
            opensidebarmd: true,
            opensidebarlg: true,

            currentYear: new Date().getFullYear()
        }
    },
    methods: {
        myaction() {
            this.opensidebarsm = !this.opensidebarsm
            //    alert("sm" +this.opensidebarsm)
            this.opensidebarmd = !this.opensidebarmd
            this.opensidebarlg = !this.opensidebarlg
            this.largescreen = !this.largescreen

            console.log('my event')
            const span = document.querySelector('span')
            span.style.display = 'none'
        }
    },

    mounted() {
        document.addEventListener('click', (e) => {
            let ToggleButton = document.querySelector('#openSidebar')
            let sidebar = document.querySelector('aside')
            // console.log(newLink, "yes");
            if (!ToggleButton.contains(e.target) && !sidebar.contains(e.target)) {
                this.opensidebarsm = false
                // alert("Please select")
            }
        })
    }
}
</script>

<style>
.overlay {
    transform: translateX(0);
}

/* .right-side-enter-active {
    animation: user 1.3s ;
}

@keyframes user {
    from {
        opacity: 0;
        translate: 100px 0;
    }

    to {
        opacity: 1;
        translate: 0 0;
    }
} */

/* Track */
::-webkit-scrollbar-track {
    -webkit-box-shadow: none;
    -webkit-border-radius: 0;
    border-radius: 0;
}

/* Handle */
::-webkit-scrollbar-thumb {
    -webkit-border-radius: 0;
    border-radius: 0;
    background: transparent;
    -webkit-box-shadow: none !important;
}
::-webkit-scrollbar {
    width: 0px;
}
</style>
