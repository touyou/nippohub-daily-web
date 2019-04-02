<template>
  <div>
    <main-header :currentUserId="currentUserId"></main-header>
    <div class="l-container">
      <DailyReportPublicDetail :daily-report-access-id="$route.params.access_id"></DailyReportPublicDetail>
    </div>
  </div>
</template>

<script src="~/assets/javascripts/pages/daily_report_public.js">
