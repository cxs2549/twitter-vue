<template>
    <div id="follow">
        <div
            class="flex items-center px-4 text-xl font-semibold border-b heading text-gray-basic border-gray-border"
        >
            Who to follow
        </div>

        <div
            v-for="story in stories"
            :key="story"
            class="flex items-center border-b story border-gray-border hover:bg-blue-900"
        >
            <div><img :src="story.image" class="w-12 h-12 rounded-full" alt="" /></div>
            <div class="flex flex-col">
                <div class="flex flex-col mt-1 font-semibold leading-5 text-gray-basic">
                    {{ story.story }}
                    <span class="font-normal text-gray-dim">{{ story.handle }}</span>
                </div>
            </div>
            <div
                class="flex items-center justify-center h-8 px-3 font-semibold border-2 rounded-full cursor-pointer border-blue-tron followBtn text-blue-tron"
            >
                Follow
            </div>
        </div>

        <div class="p-3 capitalize rounded-b-lg cursor-pointer show text-blue-tron hover:bg-blue-900">show more</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            stories: [
                {
                    created: "4 hours ago",
                    story: "ABC7 Eyewitne...",
                    handle: "@ABC7Eyewit...",
                    image:
                        "https://yt3.ggpht.com/a/AATXAJwI3pLUfrZRjetS7Mzz2EhmRaQX2_uG2wXAITh7Tg=s176-c-k-c0x00ffffff-no-rj-mo",
                },
                {
                    title: "",
                    created: "",
                    story: "NASA",
                    handle: "@NASA",
                    image:
                        "https://yt3.ggpht.com/a/AATXAJyjhPLjpkZ54OWzkeD3n6AwZNZE-AigHF_d7PU_kb0=s176-c-k-c0x00ffffff-no-rj-mo",
                },
                {
                    story: "Tesla",
                    handle: "@Tesla",
                    image:
                        "https://yt3.ggpht.com/a/AATXAJxOqVyZDD8nVdWU4KLOkLd2UYLkNc4sxNYdO2_k5sQ=s176-c-k-c0x00ffffff-no-rj-mo",
                },
            ],
        }
    },
}
</script>

<style lang="scss">
#follow {
    grid-area: follow;
    background: var(--app-color);
    border-radius: 12px;
    height: auto;
    .heading {
        grid-area: heading;
        padding: 0.75rem;
    }
    .show {
        grid-area: show;
    }
    .story {
        height: 80px;
        grid-area: story;
        padding: 0.75rem 0.75rem;
        display: grid;
        grid-template-columns: 0.75fr 2fr 1fr;
    }
}
</style>
