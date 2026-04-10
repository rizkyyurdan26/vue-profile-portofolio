<template>
    <div id="skills" class="lg:max-w-[80%] mx-auto w-full p-4 md:p-10 items-center flex flex-col">
        <h1 class="text-2xl font-bold mb-10 ">Skills</h1>
        <div class="grid grid-cols-3 md:grid-cols-5 lg:flex lg:justify-between gap-6 w-full ">
            
        <IconComponent src="vue.svg" text="Vue js"/>
        <IconComponent src="tailwind.svg" text="Tailwind CSS"/>
        <IconComponent src="wp.svg" text="WordPress"/>
        <IconComponent src="axios.svg" text="Axios"/>
        <IconComponent src="python.svg" text="Python"/>
        <IconComponent src="looker.svg" text="Looker Studio"/>
        <IconComponent src="excel.svg" text="Ms. Excel"/>

        </div>

    </div>
</template>

<script setup>
import { Icon } from '@iconify/vue';
import IconComponent from '../common/IconComponent.vue';


</script>
