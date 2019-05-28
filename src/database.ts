import firebase from 'firebase/app';
import 'firebase/database';

firebase.initializeApp({
  apiKey: 'AIzaSyC5mVxaorL_LmNWasC5LNmAC3cmlQ-5vFM',
  authDomain: 'story-maker-85706.firebaseapp.com',
  databaseURL: 'https://story-maker-85706.firebaseio.com',
  projectId: 'story-maker-85706',
  storageBucket: 'story-maker-85706.appspot.com',
  messagingSenderId: '105986550181',
  appId: '1:105986550181:web:81ec40d053faad45'
});

// firebase.database().ref('stories/3xu8U3XpthkpiGHcACtJ').once('value').then(function(snapshot) {
//   console.log(snapshot.val());
// });

export default firebase.database();