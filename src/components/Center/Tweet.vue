<template>
    <div
        id="tweet"
        class="flex w-full h-full border-t wrap border-gray-border text-gray-dim hover:bg-blue-900"
    >
        <img class="object-cover w-12 h-12 mt-3 ml-4 rounded-full avatar" :src="avatar" alt="" />
        <div class="flex flex-col w-full mx-4">
            <div class="flex items-center justify-between w-full mt-2" :class="image && 'mt-1'">
                <div class="flex justify-between">
                    <span class="font-bold text-gray-basic" :class="!verified && 'mr-1'"
                        >{{ author }}
                    </span>
                    <div class="verified">
                        <svg-icon v-if="verified" icon="verified" class="w-2 h-4 text-xs" />
                    </div>
                    <span class="mr-1 handle"> @{{ handle }} </span> <span>{{ created }}</span>
                </div>
                <div class="text-xs">
                    <i class="fa fa-chevron-down" aria-hidden="true"></i>
                </div>
            </div>
            <div class="mt-1 mr-2 text-gray-basic">
                {{ tweet }}
            </div>

            <img
                v-show="image"
                class="w-full h-full mt-3 rounded-xl tweetIMG"
                :src="image"
                alt=""
            />

            <div class="flex items-center justify-between mt-3 mb-2 mr-24 text-xs">
                <div class="flex items-center">
                    <i class="fa fa-comment" aria-hidden="true"></i>
                    <span class="ml-2">{{ comments }}</span>
                </div>
                <div class="flex items-center">
                    <i class="fa fa-retweet" aria-hidden="true"></i>
                    <span class="ml-2">{{ retweets }}</span>
                </div>
                <div class="flex items-center">
                    <i class="fa fa-heart" aria-hidden="true"></i>
                    <span class="ml-2">{{ likes }}</span>
                </div>
                <div class="flex items-center">
                    <i class="fa fa-share" aria-hidden="true"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: [
        "author",
        "handle",
        "verified",
        "avatar",
        "created",
        "tweet",
        "image",
        "caption",
        "comments",
        "retweets",
        "likes",
    ],
}
</script>

<style lang="scss">
#tweet {
    height: auto;
    @include sm {
        /* border-left: 1px solid var(--tron-color); */
        /* border-right: 1px solid var(--tron-color); */
    }
    .wrap {
        display: grid;
        grid-template-columns: auto 1fr;
        grid-template-rows: auto auto auto 1fr;
    }
    .verified {
        font-size: 4rem;
    }
    .handle::after {
        content: "\00B7";
        padding-left: 0.15rem;
        padding-right: 0.15rem;
    }
    .avatar {
        min-width: 48px;
        min-height: 48px;
        max-width: 48px;
        max-height: 48px;
    }
    .tweetIMG {
        max-width: 100%;
        @include sm {
            max-width: 500px;
        }
    }
}
</style>
