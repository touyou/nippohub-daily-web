<template>
  <div>
    <template v-if="didFind">
      <article>
        <h2>{{ title }}</h2>
        <p>{{ content }}</p>
      </article>
    </template>
    <div v-else>
      日報が見つかりませんでした
    </div>
  </div>
</template>

<script src="./javascripts/daily_report_public_detail.js">
