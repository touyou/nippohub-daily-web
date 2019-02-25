import firebase from '~/assets/javascripts/firebase.js';
import DailyReportForm from '~/components/DailyReportForm.vue';
import DailyReportList from '~/components/DailyReportList.vue';

export default {
  components: {
    DailyReportForm,
    DailyReportList
  },
  data: function() {
    return {uid: ''};
  },
  mounted: function() {
    const auth = firebase.auth();

    auth.onAuthStateChanged(user => {
      this.currentUserId = user.uid;
    });
  }
};
