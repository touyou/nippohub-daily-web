import firebase from '~/assets/javascripts/util/firebase.js';

export default {
  props: ['dailyReportId'],
  data: function() {
    return {title: '', content: '', accessId: ''};
  },
  mounted: function() {
    const database = firebase.database();

    database.ref(`/daily_reports/${this.dailyReportId}`).once('value', r => {
      const dailyReport = r.val();
      if(dailyReport == null) {
        return; // TODO: 日報が見つからなかった時の処理
      }

      this.title = `${dailyReport.date} ${dailyReport.title}`;
      this.content = dailyReport.content;
      this.accessId = dailyReport.accessId
    });
  }
}
