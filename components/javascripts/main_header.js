import firebase from '~/assets/javascripts/firebase.js';

export default {
  props: ['currentUserId'],
  methods: {
    signOut: function() {
      const auth = firebase.auth();

      auth.signOut();
    }
  }
}
