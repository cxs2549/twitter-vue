<template>
    <div id="center" class="">
        <Topbar />
        <Header />
        <twit />
        <div class="hidden space sm:block"></div>
        <div class="flex flex-col mb-4 tweet-wrap">
            <tweet
                v-for="tweet in tweets"
                :key="tweet"
                :avatar="tweet.avatar"
                :author="tweet.author"
                :handle="tweet.handle"
                :verified="tweet.verified"
                :created="tweet.created"
                :tweet="tweet.tweet"
                :comments="tweet.comments"
                :retweets="tweet.retweets"
                :likes="tweet.likes"
                :image="tweet.image"
                :caption="tweet.caption"
            />
        </div>
    </div>
</template>

<script>
import Tweet from "./Tweet"
import Twit from "./Twit"
import Header from "./Header"
import Topbar from "./Topbar"
export default {
    components: { Topbar, Header, Twit, Tweet },
    data() {
        return {
            tweets: [
                {
                    author: "Lex Fridman",
                    handle: "lexfridman",
                    verified: false,
                    created: "1h",
                    avatar:
                        "https://yt3.ggpht.com/a/AATXAJyaoejpg2cKqP4rszXXUfVUvhpMkjCjRVDTV0VYFw=s88-c-k-c0x00ffffff-no-rj",
                    tweet: "'The two most powerful warriors are Patience and Time.' - Leo Tolstoy ",
                    comments: "54",
                    retweets: "316",
                    likes: "1.8K",
                },
                {
                    author: "Bill Gates",
                    handle: "BillGates",
                    verified: true,
                    created: "Oct 19",
                    avatar:
                        "https://yt3.ggpht.com/a/AATXAJzMvsKB7s_HIEoAvhxTnv5uwK5eyl74eXVTDTib=s176-c-k-c0x00ffffff-no-rj-mo",
                    tweet:
                        "It’s inspiring to see so much passion these days for dealing with climate change, and to know that the world has set some ambitious goals for solving it. What we need now are practical plans to reach those goals.",
                    comments: "1",
                    retweets: "785",
                    likes: "6.7K",
                },
                {
                    author: "Elon Musk",
                    handle: "elonmusk",
                    created: "6h",
                    avatar:
                        "https://i.insider.com/5f16e319988ee33a161a6283?width=1100&format=jpeg&auto=webp",
                    tweet: "Starship nosecone, high bay & tiki bar",
                    image: "https://i.insider.com/5f1b201a5af6cc7e1b741330?width=1136&format=jpeg",
                    comments: "1.4K",
                    retweets: "3.3K",
                    likes: "55.9K",
                },
                {
                    author: "Joe Rogan",
                    handle: "joerogan",
                    verified: true,
                    created: "12h",
                    avatar:
                        "https://yt3.ggpht.com/a/AATXAJwVJeeimAaxFQxL7vMQWzc7_ElVpT_Vhjnxwi9X=s176-c-k-c0x00ffffff-no-rj-mo",
                    tweet: "Just posted a photo https://instagram.com/p/CGfld8KFYuu/",
                    comments: "121",
                    retweets: "33",
                    likes: "540",
                },
                {
                    avatar:
                        "https://everipedia-storage.s3.amazonaws.com/GalleryMediaItem/lang_en/melissa-chen-1/4AfdJh6u_400x400jpg.jpeg",
                    author: "Melissa Chen",
                    handle: "MsMelChen",
                    created: "Oct 18",
                    verified: false,
                    tweet: "The season finale of 2020 is going to suck.",
                    image:
                        "https://pbs.twimg.com/card_img/1317939795125993475/PQvfL-xG?format=jpg&name=360x360",
                    comments: "121",
                    retweets: "33",
                    likes: "540",
                },
            ],
        }
    },
}
</script>

<style lang="scss">
#center {
    grid-area: center;
    max-width: 100%;

    display: grid;
    grid-template-rows: 55px auto;
    @include sm {
        grid-template-rows: 53px 120px 1rem auto;
    }
    @include lg {
        max-width: auto;
    }
    .space {
        background: #253341;
    }
    .tweet-wrap {
        display: flex;
        flex-direction: column;
    }
}
</style>
