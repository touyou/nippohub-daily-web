<template>
  <div>
    <main-header :currentUserId="currentUserId"></main-header>
    <div class="l-container">
      <form class="p-import-form">
        <textarea class="p-import-form__text-area" name="daily_reports" v-model="dailyReportsJson"></textarea>
        <div class="u-mt-075 u-text-align-right">
          <button class="p-submit" @click.prevent="requestToImport">インポート</button>
        </div>
      </form>
    </div>
    <main-footer></main-footer>
  </div>
</template>

<script src="~/assets/javascripts/pages/import.js"></script>
<style src="~/assets/stylesheets/submit.css"></style>
<style src="~/assets/stylesheets/import_form.css"></style>
<style src="~/assets/stylesheets/utility.css"></style>
