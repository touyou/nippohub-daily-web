<template>
  <form @submit.prevent="signUp">
    <input type="text" name="email" placeholder="email">
    <input type="password" name="password" placeholder="password">
    <input type="password" nane="password_confirmation" placeholder="password confirmation">
    <button type="submit">サインアップ</button>
  </form>
</template>
<script src="./javascripts/sign_up.js"></script>
