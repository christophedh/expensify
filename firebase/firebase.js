import * as firebase from 'firebase'

// firebase.analytics()
var firebaseConfig = {
    apiKey: 'AIzaSyAUvLfgqqm65M-AIFLJahGkJwczH-fawOU',
    authDomain: 'expensify-5ba3a.firebaseapp.com',
    databaseURL: 'https://expensify-5ba3a.firebaseio.com',
    projectId: 'expensify-5ba3a',
    storageBucket: 'expensify-5ba3a.appspot.com',
    messagingSenderId: '503357736040',
    appId: '1:503357736040:web:a21288319ab0b0e9c827dd'
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
// console.log(firebase.auth().currentUser)
firebase
    .database()
    .ref('users/1')
    .set({
        name: 'christophe'
    })
// var ref = firebase.database().ref()
// ref.on('value', function(snapshot) {
//     console.log(snapshot.key)
// })
// firebase
//     .database()
//     .ref()
//     .set({
//         name: 'christophe'
//     })
