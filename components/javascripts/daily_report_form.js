import firebase from '~/assets/javascripts/firebase.js';

export default {
  props: ['currentUserId'],
  data: function() {
    return {content: ''}
  },
  methods: {
    post: function() {
      const database = firebase.database();

      if(this.currentUserId == null) {
        return;
      }

      database.ref('daily_reports/').push({
        content: this.content,
        createdAt: Date.now(), // TODO: タイムスタンプをサーバ側で生成する
        userId: this.currentUserId
      });

      this.content = '';
    }
  }
}
