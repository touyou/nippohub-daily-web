<template>
  <div>
    <main-header :currentUserId="currentUserId"></main-header>
    <div class="l-container">
      <DailyReportDetail :daily-report-id="$route.params.id" :current-user-id="currentUserId" v-if="currentUserId != null"></DailyReportDetail>
    </div>
  </div>
</template>

<script src="~/assets/javascripts/pages/daily_report.js">
