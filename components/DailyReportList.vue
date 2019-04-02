<template>
  <ul class="p-daily-report-list u-mt-05">
    <li class="p-daily-report-list__item" v-for="dailyReport in dailyReports">
      <nuxt-link :to="'/daily_reports/' + dailyReport.id">
        <h3>{{ dailyReport.date }} {{ dailyReport.title }}</h3>
      </nuxt-link>
      <nuxt-link :to="`/daily_reports/${dailyReport.id}/edit`">編集</nuxt-link>
    </li>
  </ul>
</template>

<script src="~/assets/javascripts/components/daily_report_list.js"></script>
<style src="~/assets/stylesheets/daily_report_list.css"></style>
