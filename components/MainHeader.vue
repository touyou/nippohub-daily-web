<template>
  <header>
    <h1>NippoHub Dialy</h1>
    <nav>
      <ul>
        <li v-if="currentUserId !== null">Sign out</li>
        <template v-else>
          <li>Sign in</li>
          <li>Sign up</li>
        </template>
      </ul>
    </nav>
  </header>
</template>

<script src="./javascripts/main_header.js"></script>
