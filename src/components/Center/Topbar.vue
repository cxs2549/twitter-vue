<template>
  <div id="topbar" class="flex items-center justify-between px-3 border-b sm:hidden text-blue-tron border-gray-border">
    <div>
    <img class="w-8 h-8 rounded-full" src="../../assets/images/profile.jpg" alt="">
    </div>
    <div>
      <i class="fa fa-twitter" aria-hidden="true"></i>
    </div>
    <div>
      <svg-icon icon='twinkle' />
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
#topbar {
height: 55px;
background: var(--app-color);
}
</style>