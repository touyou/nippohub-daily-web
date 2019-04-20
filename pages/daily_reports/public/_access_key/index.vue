<template>
  <div>
    <main-header :currentUserId="currentUserId"></main-header>
    <div class="l-container">
      <DailyReportPublicDetail :access-key="$route.params.access_key"></DailyReportPublicDetail>
    </div>
    <main-footer></main-footer>
  </div>
</template>

<script src="~/assets/javascripts/pages/daily_report_public.js">
