import firebase from '~/assets/javascripts/util/firebase.js';
import MainHeader from '~/components/MainHeader.vue';
import DailyReportDetail from '~/components/DailyReportDetail.vue';

export default {
  components: {MainHeader, DailyReportDetail},
  data: function() {
    return {currentUserId: null}
  },
  mounted: function() {
    const auth = firebase.auth();

    auth.onAuthStateChanged(user => {
      this.currentUserId = (user != null) ? user.uid : null;
    });
  }
};
