import firebase from 'firebase';
import FIREBASE_CONFIG from '~/assets/javascripts/firebase_config.js';

export default {
  data: function() {
    return {email: '', password: ''};
  },
  methods: {
    signIn: function() {
      const auth = firebase.auth();

      auth.signInWithEmailAndPassword(this.email, this.password).catch(function(e) {
        if(e.code === 'auth/wrong-password') {
          alert('パスワードが違います');
        } else if(e.code === 'auth/user-not-found') {
          alert('パスワードが違います');
        } else {
          console.error(e.code);
          console.error(e.message);
        }
      });
    }
  },
  created: function() {
    firebase.initializeApp(FIREBASE_CONFIG);
  }
};
