import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyCgL85Gldn3m8XfHURW5WOHjU-6wy5ECWs",
    authDomain: "hcks1-77e97.firebaseapp.com",
    projectId: "hcks1-77e97",
    storageBucket: "hcks1-77e97.appspot.com",
    messagingSenderId: "540300687995",
    appId: "1:540300687995:web:25ca48ab857dce709dc0de"
  };

if(!firebase.apps.length)
{ 
  firebase.initializeApp(firebaseConfig); 
  }
   export default firebase.firestore()
