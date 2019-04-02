<template>
  <div>
    <div>共有URL: <input type="text" readonly :value="`https://nippohub.com/daily_reports/public/${accessId}`" style="width: 100%"></div>
    <article>
      <h2>{{ title }}</h2>
      <p>{{ content }}</p>
    </article>
  </div>
</template>

<script src="./javascripts/daily_report_detail.js">
