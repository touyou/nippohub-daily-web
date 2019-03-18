<template>
  <form class="p-daily-report-form" @submit.prevent="post">
    <div>
      <input class="p-oneline-input p-daily-report-form__date-form" type="date" placeholder="日付" v-model="date">
      <input class="p-oneline-input p-daily-report-form__title-form" type="text" placeholder="title" v-model="title">
    </div>
    <div class="u-mt-075" style="line-height: 1">
      <textarea class="p-daily-report-form__content-form" name="content" v-model="content"></textarea>
    </div>
    <div class="u-text-align-right u-mt-075">
      <button class="p-submit" type="submit">送信</button>
    </div>
  </form>
</template>

<script src="./javascripts/daily_report_form.js"></script>
<style src="~/assets/stylesheets/oneline_input.css"></style>
<style src="~/assets/stylesheets/submit.css"></style>
<style src="~/assets/stylesheets/daily_report_form.css"></style>
<style src="~/assets/stylesheets/utility.css"></style>
