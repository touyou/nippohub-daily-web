<template>
  <div>
    <div v-if="didFind">
      <share-link :current-user-id="currentUserId" :daily-report-id="dailyReportId" :init-access-key="accessKey"></share-link>
      <article>
        <h2>{{ title }}</h2>
        <p>{{ content }}</p>
      </article>
    </div>
  </div>
</template>

<script src="~/assets/javascripts/components/daily_report_detail.js">
