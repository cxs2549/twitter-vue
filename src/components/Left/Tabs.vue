<template>
    <div>
        <ul class="pl-2 mt-4 tabs text-gray-basic">
            <li class="flex items-center home hover:bg-blue-900">
                <svg-icon icon="home-filled" class="mr-0 lg:mr-4" />
                <a href="/" class="hidden text-xl font-semibold capitalize text-blue-tron xl:inline">home</a>
            </li>
            <li
                v-for="tab in tabs"
                :key="tab"
                class="flex items-center hover:bg-blue-900"
                :class="tab === 'search' && 'd-none'"
            >
                <svg-icon :icon="tab" class="mr-0 lg:mr-4" />
                <span class="hidden lg:inline">{{ tab }}</span>
            </li>
        </ul>
        <div class="btnWrap">
            <button
                class="flex items-center justify-center font-bold rounded-full bg-blue-tron hover:bg-blue-700 tweetBtn"
            >
                <span class="text-lg hideText">Tweet</span>
                <svg-icon icon="tweet" class="hideIcon" />
            </button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tabs: [
                "search",
                "explore",
                "notifications",
                "messages",
                "bookmarks",
                "lists",
                "profile",
                "more",
            ],
        }
    },
}
</script>

<style lang="scss">
.tabs {
    display: grid;
    grid-gap: 0.5rem 0.75rem;
    grid-template-columns: 1fr;
    /* align-items: start; */
    align-items: center;
    margin-left: 0.6rem;
    span {
        visibility: hidden;
        /* color: var(--text-color); */
        @include xl {
            visibility: visible;
            font-weight: bold;
            font-size: 1.2rem;
            text-transform: capitalize;
        }
    }
    li {
        border-radius: 12px;
        margin-right: 0.75rem;
        padding: 0.5rem 0;
        &:hover {
            color: var(--tron-color);
            /* background: rgb(67, 125, 145); */
        }
    }
    .d-none {
        @include md {
            position: absolute;
            display: none;
        }
    }
    .home {
        color: var(--tron-color);
    }
}
.btnWrap {
    margin: 1rem auto;
    display: flex;
    align-items: center;
    justify-content: center;
    .tweetBtn {
        color: var(--text-color);
        width: 50px;
        height: 50px;
        @include xl {
            width: 230px;
        }
    }
}
</style>
