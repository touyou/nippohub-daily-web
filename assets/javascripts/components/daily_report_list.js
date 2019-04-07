import firebase from '~/assets/javascripts/util/firebase.js';

export default {
  props: ['currentUserId'],
  data: function() {
    return {dailyReports: [
    ]};
  },
  mounted: function() {
    if(this.currentUserId == null) {
      return;
    }

    const database = firebase.database().ref(`users/${this.currentUserId}/daily_reports/`);

    database.off(); // TODO: 全イベントハンドラが消えてしまうので範囲を狭める
    database.orderByChild('date').limitToLast(30).on('value', res => {
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

      this.dailyReports = dailyReports.sort((x1, x2) => {
        if(x1.date < x2.date) {
          return -1;
        } else if(x1.date === x2.date) {
          return 0;
        } else {
          return 1;
        }
      }).reverse();
    });
  }
}
