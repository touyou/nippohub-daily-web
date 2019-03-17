<template>
  <div>
    <main-header :currentUserId="currentUserId"></main-header>
    <div class="l-container" v-if="currentUserId != null">
      <daily-report-form :currentUserId="currentUserId"></daily-report-form>
      <div>
        <h2 class="p-sub-title">過去の日報(最大30件)</h2>
        <daily-report-list :currentUserId="currentUserId"></daily-report-list>
      </div>
    </div>
  </div>
</template>

<script src="./javascripts/index.js"></script>
<style src="~/assets/stylesheets/sub_title.css"></style>
