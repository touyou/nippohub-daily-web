import firebase from '~/assets/javascripts/util/firebase.js';

export default {
  props: ['dailyReportId'],
  methods: {
    destroy: function() {
      const database = firebase.database();

      database.ref(`daily_reports/${this.dailyReportId}`).remove().then(() => {
        console.log('test');
      });
    }
  }
}
