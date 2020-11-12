<template>
    <div class="flex-col hidden h-full px-4 sm:flex tweet twit">
        <div class="flex items-center">
            <img
                class="w-12 h-12 mt-3 rounded-full"
                src="../../assets/images/profile.jpg"
                alt=""
            />
            <input
                type="text"
                placeholder="What's happening?"
                class="ml-3 text-xl font-semibold border-none outline-none text-gray-dim bg-none"
            />
        </div>
        <div class="flex items-center justify-between mt-2 ml-16 text-xl text-blue-tron">
            <div>
                <i class="mr-4 fa fa-picture-o" aria-hidden="true"></i>
                <i class="mr-4 fa fa-calendar" aria-hidden="true"></i>
                <i class="mr-4 fa fa-line-chart" aria-hidden="true"></i>
                <i class=" fa fa-smile-o" aria-hidden="true"></i>
            </div>
            <button
                class="flex items-center justify-center px-4 py-2 font-bold text-white rounded-full opacity-50 bg-blue-tron hover:bg-blue-700 tweetBtn"
            >
                <span class="text-lg">Tweet</span>
            </button>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style>
.twit {
    border-bottom: 1px solid var(--border-color);;
}
input {
    background: transparent;
}
</style>
