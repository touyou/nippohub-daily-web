import firebase from '~/assets/javascripts/util/firebase.js';
import MainHeader from '~/components/MainHeader.vue';
import DailyReportForm from '~/components/DailyReportForm.vue';
import DailyReportList from '~/components/DailyReportList.vue';
import MainFooter from '~/components/MainFooter.vue';

export default {
  components: {
    DailyReportForm,
    DailyReportList,
    MainHeader,
    MainFooter
  },
  data: function() {
    return {currentUserId: null};
  },
  methods: {
    deleteAll: function() {
      const database = firebase.database().ref('daily_reports/');

      if(this.currentUserId == null) {
        return;
      }

      database.orderByChild('userId').equalTo(this.currentUserId).on('value', res => {
        const dailyReportList = res.val();

        for(let dailyReportId in dailyReportList) {
          const database = firebase.database().ref(`daily_reports/${dailyReportId}`);

          database.remove();
        }
      });
    }
  },
  mounted: function() {
    const auth = firebase.auth();

    auth.onAuthStateChanged(user => {
      this.currentUserId = (user != null) ? user.uid : null;
    });
  }
};
