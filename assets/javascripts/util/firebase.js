import firebase from 'firebase';

const config = (process.env.NODE_ENV === 'production') ? {
  apiKey: "AIzaSyDgw7znG2kgpYAH6UPXF1k72zjpnYV7zRg",
  authDomain: "nippohub-daily-prod.firebaseapp.com",
  databaseURL: "https://nippohub-daily-prod.firebaseio.com",
  projectId: "nippohub-daily-prod",
  storageBucket: "",
  messagingSenderId: "729594218139"
} : {
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
