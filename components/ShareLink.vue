<template>
  <div>
    <template v-if="accessKey != null">
      <div>共有URL: <input type="text" readonly :value="`https://nippohub.com/daily_reports/public/${accessKey}`" style="width: 100%"></div>
      <button type="button" class="p-submit" @click="dismissAccessKey">プライベートにする</button>
    </template>
    <button type="button" class="p-submit" v-else @click="generateAccessKey">共有する</button>
  </div>
</template>

<script src="~/assets/javascripts/components/share_link.js"></script>
<style src="~/assets/stylesheets/submit.css"></style>
