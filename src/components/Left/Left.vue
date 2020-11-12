<template>
    <div id="left">
        <div>
            <logo />
            <tabs />
        </div>
        <profile-card />
    </div>
</template>

<script>
import Logo from "./Logo"
import ProfileCard from "./ProfileCard"
import Tabs from "./Tabs"
export default {
    components: { Logo, Tabs, ProfileCard },
}
</script>

<style lang="scss">
#left {
    grid-area: left;
    display: none;
    @include sm {
        overflow-x: hidden;
        border-right: 1px solid var(--tron-color);;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        right: 950px;
        width: 60px;
        margin: 0 auto;
        overflow-y: hidden;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 68px;
        /* min-height: 100vh; */
    }
    @include lg {
        right: 920px;
    }
    @include xl {
        right: 950px;
        width: 270px;
    }
    .hideIcon {
        visibility: visible;
        @include xl {
            display: none;
        }
    }
    .hideText {
        display: none;
        @include xl {
            display: inline;
        }
    }
}
</style>
