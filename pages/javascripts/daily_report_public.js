import firebase from '~/assets/javascripts/firebase.js';
import MainHeader from '~/components/MainHeader.vue';
import DailyReportPublicDetail from '~/components/DailyReportPublicDetail.vue';

export default {
  components: {MainHeader, DailyReportPublicDetail},
  data: function() {
    return {currentUserId: null};
  },
  mounted: function() {
    const auth = firebase.auth();

    auth.onAuthStateChanged(user => {
      this.currentUserId = (user != null) ? user.uid : null;
    });
  }
}
