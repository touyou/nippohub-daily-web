import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyDYW753RcIC6_QmRTCJkK7DwuGIe0dhIBk',
  authDomain: 'nippohub-daily-dev.firebaseapp.com',
  databaseURL: 'https://nippohub-daily-dev.firebaseio.com',
  projectId: 'nippohub-daily-dev',
  storageBucket: '',
  messagingSenderId: '754356144832'
};

if(firebase.apps.length === 0) {
  firebase.initializeApp(config);
}

export default firebase;
