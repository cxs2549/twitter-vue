<template>
    <div id="bottombar" class="relative flex items-start justify-between text-gray-dim">
        <div class="flex justify-between pt-4 wrap">
            <div class="active">
                <svg-icon icon="home-filled" />
            </div>
            <div><svg-icon icon="search" /></div>
            <div><svg-icon icon="notifications" /></div>
            <div><svg-icon icon="messages" /></div>
        </div>
        <div class="absolute tweetFloat">
            <div class="btnWrap">
                <button
                    class="flex items-center justify-center font-bold rounded-full bg-blue-tron hover:bg-blue-700 tweetBtn"
                >
                    <span class="text-lg hideText">Tweet</span>
                    <svg-icon icon="tweet" class="hideIcon" />
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
#bottombar {
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    background: var(--app-color);
    height: 70px;
    @include sm {
        display: none;
    }
    .wrap {
        width: 100%;
        margin: 0 2rem;
        .active {
            color: var(--tron-color);
        }
    }
    .tweetFloat {
        right: 0.75rem;
        top: -5rem;
        @include sm {
            display: none;
        }
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
