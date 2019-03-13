<template>
  <header>
    <h1>NippoHub Dialy</h1>
    <nav>
      <ul>
        <li v-if="currentUserId !== null" @click="signOut">Sign out</li>
        <template v-else>
          <li><a href="/sign_in">Sign in</a></li>
          <li><a href="/sign_up">Sign up</a></li>
        </template>
      </ul>
    </nav>
  </header>
</template>

<script src="./javascripts/main_header.js"></script>
