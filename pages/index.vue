<template>
  <div>
    <main-header :currentUserId="currentUserId"></main-header>
    <div class="l-container" v-if="currentUserId != null">
      <daily-report-form :currentUserId="currentUserId"></daily-report-form>
      <div>
        <h2 class="p-sub-title">過去の日報(最大30件)</h2>
        <daily-report-list :currentUserId="currentUserId"></daily-report-list>
      </div>
      <div class="u-text-align-right u-mt-075">
        <button type="button" class="p-btn" @click="deleteAll">全削除する</button>
      </div>
    </div>
  </div>
</template>

<script src="~/assets/javascripts/pages/index.js"></script>
<style src="~/assets/stylesheets/sub_title.css"></style>
<style src="~/assets/stylesheets/utility.css"></style>
