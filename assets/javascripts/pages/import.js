import firebase from '~/assets/javascripts/util/firebase.js';
import MainHeader from '~/components/MainHeader.vue';
import MainFooter from '~/components/MainFooter.vue';

export default {
  components: {
    MainHeader,
    MainFooter
  },
  data: function() {
    return {currentUserId: null, dailyReportsJson: ''};
  },
  methods: {
    requestToImport: function() {
      const database = firebase.database();
      const dailyReports = JSON.parse(this.dailyReportsJson);

      if(this.currentUserId == null) {
        return;
      }

      for(let dailyReport of dailyReports) {
        database.ref(`/users/${this.currentUserId}/daily_reports`).push({
          date: dailyReport.date,
          title: dailyReport.title || '',
          content: dailyReport.content,
          createdAt: Date.now() // TODO: タイムスタンプをサーバ側で生成する
        });
      }
    }
  },
  mounted: function() {
    const auth = firebase.auth();

    auth.onAuthStateChanged(user => {
      this.currentUserId = (user != null) ? user.uid : null;
    });
  }
};
