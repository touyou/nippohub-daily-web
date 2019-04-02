<template>
  <div>
    <main-header :currentUserId="null"></main-header>
    <div class="l-container p-auth-form">
      <form @submit.prevent="signUp">
        <div>
          <input class="p-oneline-input p-auth-form__input" type="text" name="email" placeholder="email" v-model="email">
        </div>
        <div class="u-mt-075">
          <input class="p-oneline-input p-auth-form__input" type="password" name="password" placeholder="password" v-model="password">
        </div>
        <div class="u-mt-075">
          <input class="p-oneline-input p-auth-form__input" type="password" nane="password_confirmation" placeholder="password confirmation" v-model="passwordConfirmation">
        </div>
        <div class="u-mt-075 u-text-align-right">
          <button class="p-submit" type="submit">サインアップ</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script src="~/assets/javascripts/pages/sign_up.js"></script>
<style src="~/assets/stylesheets/submit.css"></style>
<style src="~/assets/stylesheets/oneline_input.css"></style>
<style src="~/assets/stylesheets/auth_form.css"></style>
<style src="~/assets/stylesheets/utility.css"></style>
