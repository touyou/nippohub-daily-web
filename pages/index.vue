<template>
  <div>
    <template v-if="currentUserId != null">
      <main-header :currentUserId="currentUserId"></main-header>
      <daily-report-form :currentUserId="currentUserId"></daily-report-form>
      <daily-report-list :currentUserId="currentUserId"></daily-report-list>
    </template>
  </div>
</template>

<script src="./javascripts/index.js"></script>
