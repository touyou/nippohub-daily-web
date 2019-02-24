import firebase from 'firebase';
import FIREBASE_CONFIG from '~/assets/javascripts/firebase_config.js';
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
    firebase.initializeApp(FIREBASE_CONFIG);

    const auth = firebase.auth();

    auth.onAuthStateChanged(user => {
      this.currentUserId = user.uid;
    });
  }
};
