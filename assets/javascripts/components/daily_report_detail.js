import marked from 'marked';
import firebase from '~/assets/javascripts/util/firebase.js';
import ShareLink from '~/components/ShareLink.vue';

export default {
  components: {ShareLink},
  props: ['currentUserId', 'dailyReportId'],
  data: function() {
    return {title: '', content: '', accessKey: null, didFind: false};
  },
  mounted: function() {
    const database = firebase.database();

    if(this.currentUserId == null) {
      return;
    }

    database.ref(`users/${this.currentUserId}/daily_reports/${this.dailyReportId}`).once('value', r => {
      const dailyReport = r.val();
      if(dailyReport == null) {
        return; // TODO: 日報が見つからなかった時の処理
      }

      this.title = `${dailyReport.date} ${dailyReport.title}`;
      this.content = marked(dailyReport.content);
      this.accessKey = dailyReport.access_key;
      this.didFind = true;
    });
  }
}
