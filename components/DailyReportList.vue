<template>
  <ul>
    <li v-for="dailyReport in dailyReports">
      <a :href="'/daily_reports/' + dailyReport.id">
        <h2>{{ dailyReport.date }} {{ dailyReport.title }}</h2>
        <span>{{ dailyReport.createdAt }}</span>
      </a>
    </li>
  </ul>
</template>

<script src="./javascripts/daily_report_list.js"></script>
