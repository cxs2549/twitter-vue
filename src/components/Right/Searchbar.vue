<template>
    <div class="relative text-gray-600 search">
        <input
            class="pl-4 bg-white rounded-full w-100 focus:outline-none"
            type="search"
            name="search"
            placeholder="Search Twitter"
        />
        <button type="submit" class="absolute top-0 right-0 mt-3 mr-1">
            <svg-icon icon="search" />
        </button>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.search {
    grid-area: search;
    padding-bottom: .25rem;
    background: var(--app-background-color);;
    padding-top: 6px;
    input {
        height: 41px;
        width: 100%;
        background: var(--input-color);
    }
}
</style>
