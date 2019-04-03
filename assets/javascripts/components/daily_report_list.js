import firebase from '~/assets/javascripts/util/firebase.js';

export default {
  props: ['currentUserId'],
  data: function() {
    return {dailyReports: [
    ]};
  },
  mounted: function() {
    const database = firebase.database().ref('daily_reports/');

    if(this.currentUserId == null) {
      return;
    }

    database.off(); // TODO: 全イベントハンドラが消えてしまうので範囲を狭める
    database.orderByChild('userId').equalTo(this.currentUserId).limitToLast(30).on('value', res => {
      const dailyReportList = res.val();
      const dailyReports = [];

      for(let dailyReportId in dailyReportList) {
        const dailyReport = dailyReportList[dailyReportId];
        const createdAt = new Date(dailyReport.createdAt);
        // TODO: 日付などを0埋めして2桁に保てるようにする
        const alignDigit = x => `0${x}`.slice(-2);
        const createdAtStr = `${createdAt.getFullYear()}-${alignDigit(createdAt.getMonth() + 1)}-${alignDigit(createdAt.getDate())} ${alignDigit(createdAt.getHours())}:${alignDigit(createdAt.getMinutes())}`;

        dailyReports.push({id: dailyReportId, title: dailyReport.title, createdAt: createdAtStr, date: dailyReport.date});
      }

      this.dailyReports = dailyReports;
    });
  }
}
