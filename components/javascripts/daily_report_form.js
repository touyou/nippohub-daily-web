import firebase from '~/assets/javascripts/firebase.js';

export default {
  data: function() {
    return {content: ''}
  },
  methods: {
    post: function() {
      const database = firebase.database();

      // TODO: userIdの受け渡し
      database.ref('daily_reports/').push({
        content: this.content,
        createdAt: Date.now() // TODO: タイムスタンプをサーバ側で生成する
      });

      this.content = '';
    }
  }
}
