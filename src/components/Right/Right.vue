<template>
    <div id="right-wrap">
        <div id="right" class="relative">
            <Searchbar />
            <Happening />
            <Follow />
            <Footer />
        </div>
    </div>
</template>

<script>
import Searchbar from "./Searchbar"
import Happening from "./Happening"
import Follow from "./Follow"
import Footer from "./Footer"
export default {
    components: { Searchbar, Happening, Follow, Footer },
}
</script>

<style lang="scss">
#right-wrap {
    grid-area: right;
}
#right {
    /* height: 100vh; */
    display: none;
   
    overflow-y: scroll;
    max-width: 340px;
    border-left: 1px solid var(--tron-color);
    @include tablet {
        display: grid;
        grid-gap: 1rem 0;
        grid-template-columns: 1.25rem 1fr;
        grid-template-rows: 50px 426px 340px auto;
        grid-template-areas:
            ". search"
            ". happening"
            ". follow"
            ". footer";
    }
    @include xl {
        grid-template-columns: 2rem 1fr;
    }
}
</style>
