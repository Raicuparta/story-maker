import firebase from 'firebase/app'
import 'firebase/database'

firebase.initializeApp({
  apiKey: 'AIzaSyC5mVxaorL_LmNWasC5LNmAC3cmlQ-5vFM',
  appId: '1:105986550181:web:81ec40d053faad45',
  authDomain: 'story-maker-85706.firebaseapp.com',
  databaseURL: 'https://story-maker-85706.firebaseio.com',
  messagingSenderId: '105986550181',
  projectId: 'story-maker-85706',
  storageBucket: 'story-maker-85706.appspot.com',
})

export default firebase.database()
