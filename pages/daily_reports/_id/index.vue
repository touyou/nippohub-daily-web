<template>
  <div>
    <main-header :currentUserId="currentUserId"></main-header>
    <div class="l-container">
      <DailyReportDetail :daily-report-id="$route.params.id"></DailyReportDetail>
    </div>
  </div>
</template>

<script src="~/assets/javascripts/pages/daily_report.js">
