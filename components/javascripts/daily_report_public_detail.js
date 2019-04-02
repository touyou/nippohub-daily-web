import firebase from '~/assets/javascripts/firebase.js';

export default {
  props: ['dailyReportAccessId'],
  data: function() {
    return {title: '', content: '', didFind: false};
  },
  mounted: function() {
    const database = firebase.database();

    database.ref('/daily_reports').orderByChild('accessId').equalTo(this.dailyReportAccessId).once('value', r => {
      const dailyReports = r.val();

      // 通常ないが同一アクセスIDの日報が見つかった場合も考慮しない
      for(let dailyReportId in dailyReports) {
        const dailyReport = dailyReports[dailyReportId];

        this.title = `${dailyReport.date} ${dailyReport.title}`;
        this.content = dailyReport.content;
        this.didFind = true;

        break;
      }
    });
  }
}
