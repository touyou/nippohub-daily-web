import firebase from 'firebase';
import FIREBASE_CONFIG from '~/assets/javascripts/firebase_config.js';

export default {
  data: function() {
    return {email: '', password: '', passwordConfirmation: ''};
  },
  methods: {
    signUp: function() {
      const auth = firebase.auth();

      if(this.password !== this.passwordConfirmation) {
        return;
      }

      auth.createUserWithEmailAndPassword(this.email, this.password).catch(function(e) {
        if(e.code === 'auth/email-already-in-use') {
          alert('ご入力のメールアドレスは登録済みです');
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
