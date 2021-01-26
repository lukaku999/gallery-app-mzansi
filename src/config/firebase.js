import firebase from 'firebase'





const firebaseConfig = {
    apiKey: "AIzaSyAtunQ6PKzgcChIXtyQN0PZpHoqHKsjcYI",
    authDomain: "in-depth-react-8c739.firebaseapp.com",
    databaseURL: "https://in-depth-react-8c739.firebaseio.com",
    projectId: "in-depth-react-8c739",
    storageBucket: "in-depth-react-8c739.appspot.com",
    messagingSenderId: "911835515436",
    appId: "1:911835515436:web:440778864d780bfae65f89"
  };

firebase.initializeApp(firebaseConfig);

export default firebase