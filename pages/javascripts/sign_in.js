import firebase from '~/assets/javascripts/firebase.js';

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
  }
};
