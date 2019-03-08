import firebase from '~/assets/javascripts/firebase.js';
import DailyReportForm from '~/components/DailyReportForm.vue';

export default {
  components: {
    DailyReportForm
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
