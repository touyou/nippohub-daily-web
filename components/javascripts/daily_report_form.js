import firebase from '~/assets/javascripts/firebase.js';
import RandomStringGenerator from '~/assets/javascripts/random_string_generator.js';

export default {
  props: ['currentUserId', 'dailyReportId'],
  data: function() {
    return {date: '', title: '', content: ''};
  },
  methods: {
    post: function() {
      const database = firebase.database();

      if(this.currentUserId == null) {
        return;
      }

      if(this.dailyReportId != null) {
        database.ref(`daily_reports/${this.dailyReportId}`).update({
          date: this.date,
          title: this.title,
          content: this.content
        });
      } else {
        database.ref('daily_reports/').push({
          date: this.date,
          title: this.title,
          content: this.content,
          createdAt: Date.now(), // TODO: タイムスタンプをサーバ側で生成する
          accessId: btoa(Date.now()).replace(/=/g, '') + RandomStringGenerator.generate(12), // TODO: idの生成方法を要検討
          userId: this.currentUserId
        });

        this.date = null;
        this.title = '';
        this.content = '';
      }
    }
  },
  mounted: function() {
    const database = firebase.database();

    if(this.dailyReportId != null) {
      // TODO: DailyReportDetailとまとめる
      database.ref(`/daily_reports/${this.dailyReportId}`).once('value', r => {
        const dailyReport = r.val();
        if(dailyReport == null) {
          return; // TODO: 日報が見つからなかった時の処理
        }

        const createdAt = new Date(dailyReport.createdAt);
        // TODO: 日付などを0埋めして2桁に保てるようにする
        const createdAtStr = `${createdAt.getFullYear()}-${createdAt.getMonth()}-${createdAt.getDate()}`;

        this.date = dailyReport.date;
        this.title = dailyReport.title;
        this.content = dailyReport.content;
      });
    }
  }
}
