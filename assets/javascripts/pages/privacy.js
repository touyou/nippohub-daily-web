import firebase from '~/assets/javascripts/util/firebase.js';
import MainHeader from '~/components/MainHeader.vue';

export default {
  components: {MainHeader},
  data: function() {
    return {currentUser: null};
  },
  mounted: function() {
    const auth = firebase.auth();

    auth.onAuthStateChanged(user => {
      this.currentUserId = (user != null) ? user.uid : null;
    });
  }
};
