<template>
  <div>
    <main-header :currentUserId="currentUserId"></main-header>
    <daily-report-form :currentUserId="currentUserId"></daily-report-form>
    <daily-report-list></daily-report-list>
  </div>
</template>

<script src="./javascripts/index.js"></script>
