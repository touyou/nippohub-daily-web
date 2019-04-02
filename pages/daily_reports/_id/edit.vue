<template>
  <div>
    <main-header :currentUserId="currentUserId"></main-header>
    <div class="l-container" v-if="currentUserId != null">
      <daily-report-form :currentUserId="currentUserId" :dailyReportId="$route.params.id" v-if="currentUserId != null"></daily-report-form>
      <ButtonDeletingDailyReport :dailyReportId="$route.params.id"></ButtonDeletingDailyReport>
    </div>
  </div>
</template>

<script src="~/assets/javascripts/pages/daily_report_edit.js"></script>
