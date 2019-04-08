import marked from 'marked';
import firebase from '~/assets/javascripts/util/firebase.js';

export default {
  props: ['accessKey'],
  data: function() {
    return {title: '', content: '', didFind: false};
  },
  mounted: function() {
    const database = firebase.database();

    new Promise((resolve, reject) => {
      database.ref(`/access_keys/${this.accessKey}`).once('value', r => {
        const accessKey = r.val();

        if(accessKey == null) {
          reject();
        }

        resolve(accessKey);
      });
    }).then((accessKey) => {
      const userId = accessKey.user_id;
      const dailyReportId = accessKey.daily_report_id;

      database.ref(`/users/${userId}/daily_reports/${dailyReportId}`).once('value', r => {
        const dailyReport = r.val();

        this.title = `${dailyReport.date} ${dailyReport.title}`;
        this.content = marked(dailyReport.content);
        this.didFind = true;
      });
    });
  }
}
