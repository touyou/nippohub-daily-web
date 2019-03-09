import firebase from '~/assets/javascripts/firebase.js';
import DailyReportForm from '~/components/DailyReportForm.vue';
import ButtonDeletingDailyReport from '~/components/ButtonDeletingDailyReport.vue';

export default {
  components: {
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
