import firebase from '~/assets/javascripts/util/firebase.js';

export default {
  props: ['currentUserId'],
  methods: {
    signOut: function() {
      const auth = firebase.auth();

      auth.signOut();
    }
  }
}
