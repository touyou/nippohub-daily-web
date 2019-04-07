import firebase from '~/assets/javascripts/util/firebase.js';

export default {
  props: ['currentUserId', 'dailyReportId', 'initAccessKey'],
  data: function() {
    return {accessKey: null}
  },
  methods: {
    generateAccessKey: function() {
      const database = firebase.database();

      if(this.currentUserId == null || this.accessKey != null) {
        return; // TODO: ユーザがいない時の処理
      }

      // TODO: トランザクション張る

      const accessKey = database.ref(`access_keys`).push({
        user_id: this.currentUserId,
        daily_report_id: this.dailyReportId
      });

      database.ref(`users/${this.currentUserId}/daily_reports/${this.dailyReportId}`).update({
        access_key: accessKey.key
      });

      this.accessKey = accessKey.key;
    },
    dismissAccessKey: function() {
      const database = firebase.database();

      if(this.currentUserId == null || this.accessKey == null) {
        return; // TODO: ユーザがいない時の処理
      }

      database.ref(`users/${this.currentUserId}/daily_reports/${this.dailyReportId}`).update({
        access_key: null
      });

      database.ref(`access_keys/${this.accessKey}`).update({
        user_id: null,
        daily_report_id: null
      });

      this.accessKey = null;
    }
  },
  mounted: function() {
    this.accessKey = this.initAccessKey;
  }
}
