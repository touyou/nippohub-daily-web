import firebase from '~/assets/javascripts/util/firebase.js';
import MainHeader from '~/components/MainHeader.vue';
import MainFooter from '~/components/MainFooter.vue';

export default {
  components: {
    MainHeader,
    MainFooter
  },
  data: function() {
    return {currentUserId: null};
  },
  mounted: function() {
    const auth = firebase.auth();

    auth.onAuthStateChanged(user => {
      this.currentUserId = (user != null) ? user.uid : null;
    });
  }
};
