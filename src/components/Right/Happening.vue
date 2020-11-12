<template>
    <div id="happening">
        <div
            class="flex items-center px-4 text-xl font-semibold border-b heading text-gray-basic border-gray-border"
        >
            What's happening?
        </div>

        <div v-for="story in stories" :key="story" class="border-b story border-gray-border hover:bg-blue-900">
            <div class="flex flex-col">
                <div class="text-xs text-gray-dim" v-show="story.title">
                    <span>{{ story.title }}</span> - <span>{{ story.created }}</span>
                </div>
                <div class="flex flex-col mt-1 font-semibold text-gray-basic">
                    {{ story.story }}
                    <span class="font-normal text-gray-dim">{{ story.caption }}</span>

                    <div class="flex mt-1 text-xs text-gray-dim">
                        <i v-show="story.info" class=" fa fa-share" aria-hidden="true"></i>
                        <span class="ml-1 font-normal ">{{ story.info }}</span>
                    </div>
                </div>
            </div>
            <div><img :src="story.image" class="mt-1 rounded-lg" alt="" /></div>
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
                    title: "Politics",
                    created: "4 hours ago",
                    story:
                        "Rudy Giuliani says ‘compromising scene’ in new Borat film is a ‘complete fabrication’",
                    image:
                        "https://nypost.com/wp-content/uploads/sites/2/2020/10/rudy-giuliani.jpg?quality=80&strip=all",
                },
                {
                    title: "",
                    created: "",
                    story: "#GMCHummerEV",
                    caption: "The All-Electric Supertruck",
                    image: "",
                    info: "Promoted by GMC",
                },
                {
                    title: "US elections",
                    created: "LIVE",
                    story: "California: Election news and updates",
                    caption: "",
                    image: "https://pbs.twimg.com/semantic_core_img/1304441681899479041/gwkbEFvL?format=png&name=240x240",
                    info: "",
                },
            ],
        }
    },
}
</script>

<style lang="scss">
#happening {
    grid-area: happening;
    /* grid-row: 2 / 3; */
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
        height: auto;
        grid-area: story;
        padding: 0.5rem 0.75rem;
        display: grid;
        grid-template-columns: 3fr 1fr;
    }
}
</style>
