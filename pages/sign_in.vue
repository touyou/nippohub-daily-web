<template>
  <form @submit.prevent="signIn">
    <input type="text" name="email" placeholder="email" v-model="email">
    <input type="password" name="password" placeholder="password" v-model="password">
    <button type="submit">サインイン</button>
  </form>
</template>
<script src="./javascripts/sign_in.js"></script>
