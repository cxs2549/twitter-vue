<template>
    <footer class="pb-8 ml-4 text-gray-dim">
        <ul class="flex flex-wrap">
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
        </ul>
        <ul class="flex -mt-3">
            <li>Cookie Policy</li>
            <li>Ads info</li>
            <li class="flex items-center">
                More
                <div style="font-size: .6rem;" class="ml-1">
                    <i class="fa fa-chevron-down" aria-hidden="true"></i>
                </div>
            </li>
        </ul>
        <div class="cursor-auto">&copy; 2020 SuperVision Design</div>
    </footer>
</template>

<script>
export default {}
</script>

<style lang="scss">
footer {
    grid-area: footer;
    font-size: 13px;
    ul {
        li {
            width: auto;
            margin-right: 0.75rem;
            padding: 0.5rem 0;
            cursor: pointer;
        }
    }
}
</style>
