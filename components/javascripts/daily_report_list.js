import firebase from '~/assets/javascripts/firebase.js';

export default {
  props: ['currentUserId'],
  data: function() {
    return {dailyReports: [
    ]};
  },
  mounted: function() {
    const database = firebase.database().ref('daily_reports/');

    database.off(); // TODO: 全イベントハンドラが消えてしまうので範囲を狭める
    database.on('value', res => {
      const dailyReportList = res.val();
      const dailyReports = [];

      for(let dailyReportId in dailyReportList) {
        const dailyReport = dailyReportList[dailyReportId];
        const createdAt = new Date(dailyReport.createdAt);
        const createdAtStr = `${createdAt.getFullYear()}-${createdAt.getMonth()}-${createdAt.getDate()} ${createdAt.getHours()}:${createdAt.getMinutes()}`;

        dailyReports.push({id: dailyReportId, title: dailyReport.title, createdAt: createdAtStr, date: dailyReport.date});
      }

      this.dailyReports = dailyReports;
    });
  }
}
