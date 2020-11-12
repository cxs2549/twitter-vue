<template>
    <div id="app">
        <svg-sprite />
        <left />
        <center />
        <right />
        <bottombar />
    </div>
</template>

<script>
export default {
    name: "App",
}
</script>

<style lang="scss">
#app {
    width: 100%;
    max-height: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-areas: "center";
    @include sm {
        grid-template-columns: 68px 4fr;
        grid-template-areas: "left center";
    }
    @include tablet {
        grid-template-columns: auto 68px 610px 320px auto;
        grid-template-areas: ". left center right .";
    }
    @include lg {
        grid-template-columns: 1fr 68px 600px 320px 1fr;
        grid-template-areas: ". left center right .";
    }
    @include xl {
        grid-template-columns: 1fr 270px 600px 350px 1fr;
    }
}
</style>
