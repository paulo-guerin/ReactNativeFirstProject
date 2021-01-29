import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var config = {
    apiKey: "AIzaSyB6xyoWrwbqc-rmkuVhPk0s8U3SDkYwGlA",
    authDomain: "reactnativefirstproject-dc702.firebaseapp.com",
    projectId: "reactnativefirstproject-dc702",
    storageBucket: "reactnativefirstproject-dc702.appspot.com",
    messagingSenderId: "865880311739",
    appId: "1:865880311739:web:0583a2abec0cd26912269e",
    measurementId: "G-80NKT3TC0N"
  };

 firebase.initializeApp(config);
 firebase.firestore().settings({timestampsInSnapshots: true});

 export default firebase;