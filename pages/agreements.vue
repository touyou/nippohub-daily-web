<template>
  <div>
    <main-header :currentUserId="currentUserId"></main-header>
    <div class="l-container">
      <iframe class="p-embedded-content" src="/agreements_content.html"></iframe>
    </div>
    <main-footer></main-footer>
  </div>
</template>

<script src="~/assets/javascripts/pages/privacy.js"></script>
<style src="~/assets/stylesheets/embedded_content.css"></style>
