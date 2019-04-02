import firebase from '~/assets/javascripts/util/firebase.js';
import MainHeader from '~/components/MainHeader.vue';

export default {
  components: {
    MainHeader
  },
  data: function() {
    return {email: '', password: '', passwordConfirmation: ''};
  },
  methods: {
    signUp: function() {
      const auth = firebase.auth();

      if(this.password !== this.passwordConfirmation) {
        return;
      }

      auth.createUserWithEmailAndPassword(this.email, this.password)
        .then(() => {
          location.href = '/';
        })
        .catch(e => {
          if(e.code === 'auth/email-already-in-use') {
            alert('ご入力のメールアドレスは登録済みです');
          } else {
            console.error(e.code);
            console.error(e.message);
          }
        });
    }
  }
};
