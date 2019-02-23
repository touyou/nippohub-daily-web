<template>
  <form @submit.prevent="post">
    <textarea name="content" v-model="content"></textarea>
    <button type="submit">送信</button>
  </form>
</template>

<script src="./javascripts/daily_report_form.js"></script>
