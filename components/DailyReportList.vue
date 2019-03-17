<template>
  <ul class="p-daily-report-list u-mt-05">
    <li class="p-daily-report-list__item" v-for="dailyReport in dailyReports">
      <a :href="'/daily_reports/' + dailyReport.id">
        <h3>{{ dailyReport.date }} {{ dailyReport.title }}</h3>
      </a>
      <a :href="`/daily_reports/${dailyReport.id}/edit`">編集</a>
    </li>
  </ul>
</template>

<script src="./javascripts/daily_report_list.js"></script>
<style src="~/assets/stylesheets/daily_report_list.css"></style>
