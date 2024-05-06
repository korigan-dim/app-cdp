<template>
    <Header/>
    <div>
        <NuxtPage :transition="{
            name: 'my',
            mode: 'out-in',
            onBeforeEnter
        }"/>
    </div>
    <Footer v-if="$router.currentRoute.value.name != 'index___fr' && $router.currentRoute.value.name != 'index___en'"/>
</template>

<script setup>
    const {finalizePendingLocaleChange} = useI18n()

    const onBeforeEnter = async () => {
        await finalizePendingLocaleChange()
    }
</script>

<style>
    .my-enter-active,
    .my-leave-active {
        transition: opacity 0.3s;
    }

    .my-enter,
    .my-leave-active {
        opacity: 0;
    }</style>