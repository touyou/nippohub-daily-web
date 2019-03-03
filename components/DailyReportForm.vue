<template>
  <form @submit.prevent="post">
    <input type="date" placeholder="日付" v-model="date">
    <input type="text" placeholder="title" v-model="title">
    <textarea name="content" v-model="content"></textarea>
    <button type="submit">送信</button>
  </form>
</template>

<script src="./javascripts/daily_report_form.js"></script>
