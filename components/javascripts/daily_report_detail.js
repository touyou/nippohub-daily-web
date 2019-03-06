import firebase from '~/assets/javascripts/firebase.js';

export default {
  props: ['dailyReportId'],
  data: function() {
    return {title: '', content: ''};
  },
  mounted: function() {
    const database = firebase.database();

    database.ref(`/daily_reports/${this.dailyReportId}`).once('value', r => {
      const dailyReport = r.val();
      if(dailyReport == null) {
        return; // TODO: 日報が見つからなかった時の処理
      }

      const createdAt = new Date(dailyReport.createdAt);
      // TODO: 日付などを0埋めして2桁に保てるようにする
      const createdAtStr = `${createdAt.getFullYear()}-${createdAt.getMonth()}-${createdAt.getDate()} ${createdAt.getHours()}:${createdAt.getMinutes()}`;

      this.title = `${createdAtStr} ${dailyReport.title}`;
      this.content = dailyReport.content;
    });
  }
}
