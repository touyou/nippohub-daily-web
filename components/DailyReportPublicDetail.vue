<template>
  <div>
    <template v-if="didFind">
      <article>
        <h2>{{ title }}</h2>
        <main v-html="content"></main>
      </article>
    </template>
    <div v-else>
      日報が見つかりませんでした
    </div>
  </div>
</template>

<script src="~/assets/javascripts/components/daily_report_public_detail.js">
