import firebase from '~/assets/javascripts/firebase.js';
import MainHeader from '~/components/MainHeader.vue';
import DailyReportForm from '~/components/DailyReportForm.vue';
import DailyReportList from '~/components/DailyReportList.vue';

export default {
  components: {
    DailyReportForm,
    DailyReportList,
    MainHeader
  },
  data: function() {
    return {currentUserId: ''};
  },
  mounted: function() {
    const auth = firebase.auth();

    auth.onAuthStateChanged(user => {
      this.currentUserId = user.uid;
    });
  }
};
