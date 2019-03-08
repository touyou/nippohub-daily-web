<template>
  <daily-report-form :currentUserId="currentUserId" :dailyReportId="$route.params.id" v-if="currentUserId != null"></daily-report-form>
</template>

<script src="~/pages/javascripts/daily_report_edit.js"></script>
