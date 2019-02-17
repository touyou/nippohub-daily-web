<template>
  <div>
    <!-- TODO: コンポーネント分ける -->
    <header>
      <h1>NippoHub Dialy</h1>
      <nav>
        <ul>
          <li>Sign in</li>
          <li>Sign up</li>
          <li>Sign out</li>
        </ul>
      </nav>
    </header>
    <!-- TODO: コンポーネント分ける -->
    <ul>
      <li v-for="dailyReport in dailyReports">
        <a :href="'/dailyReposts/' + dailyReport.accessId">
          <h2>{{ dailyReport.date }} {{ dailyReport.title }}</h2>
          <span>{{ dailyReport.createdAt }}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script src="./javascripts/index.js"></script>
