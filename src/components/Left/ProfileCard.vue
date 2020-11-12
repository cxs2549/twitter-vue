<template>
    <button class="flex items-center justify-around pt-2 rounded-lg xl:mr-3 profileBtn hover:bg-blue-900">
        <div class="flex items-center">
            <img class="rounded-full profile-img" src="../../assets/images/profile.jpg" alt="" />
            <div class="flex-col items-start hidden ml-3 leading-4 xl:flex username">
                <span class="mb-1 text-md text-gray-basic">Cliff</span>
                <span class="text-md text-gray-dim">@CliffS</span>
            </div>
        </div>
        <div class="text-gray-dim">
            <i class="fa fa-chevron-down" aria-hidden="true"></i>
        </div>
    </button>
</template>

<script>
export default {}
</script>

<style lang="scss">
.profileBtn {
    height: 100px;
    margin-left: .5rem;
}

.username {
    display: none;
    @include xl {
        display: flex;
    }
}
.fa,
.fa-chevron-down {
    display: none;
    @include xl {
        display: inline;
    }
}
.profile-img {
    min-width: 48px;
    max-width: 48px;
    min-height: 48px;
    max-height: 48px;
    @include lg {
        /* margin-left: 0.5rem; */
    }
}
</style>
