import firebase from '~/assets/javascripts/util/firebase.js';
import MainHeader from '~/components/MainHeader.vue';
import DailyReportForm from '~/components/DailyReportForm.vue';
import ButtonDeletingDailyReport from '~/components/ButtonDeletingDailyReport.vue';

export default {
  components: {
    MainHeader,
    DailyReportForm,
    ButtonDeletingDailyReport
  },
  data: function() {
    return {currentUserId: null}
  },
  mounted: function() {
    const auth = firebase.auth();

    // TODO: indexとまとめる
    auth.onAuthStateChanged(user => {
      this.currentUserId = (user != null) ? user.uid : null;
    });
  }
}
