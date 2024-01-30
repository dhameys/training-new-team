<template>
    <div class="bg-white w-full">
        <div class="bg-[#64C5B1] h-32 pt-5 pl-5 text-xl text-white font-mono">
            <h2>Dashboard</h2>
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


        
       <canvas id="chart-mixed-example"></canvas>
      
    </div>
</template>

<script>
export default {}
</script>

<style></style>
