<template>
    <HeaderComponent/>

    <main>
        <router-view></router-view>
    </main>

    <FooterComponent/>
</template>

<script setup>
import FooterComponent from '../components/headerFooter/FooterComponent.vue';
import HeaderComponent from '../components/headerFooter/HeaderComponent.vue';


</script>
