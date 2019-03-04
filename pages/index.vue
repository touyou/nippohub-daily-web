<template>
  <div>
    <main-header :currentUserId="currentUserId"></main-header>
    <template v-if="currentUserId != null">
      <daily-report-form :currentUserId="currentUserId"></daily-report-form>
      <daily-report-list :currentUserId="currentUserId"></daily-report-list>
    </template>
  </div>
</template>

<script src="./javascripts/index.js"></script>
