import * as firebase from 'firebase'

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_IP
}
firebase.initializeApp(firebaseConfig)

const database = firebase.database()
const googleProvider = new firebase.auth.GoogleAuthProvider()
export { firebase, googleProvider, database as default }

// const notes = [
//     {
//         id: '1',
//         title: 'first note',
//         body: '1st body'
//     },
//     {
//         id: '2',
//         title: 'second note',
//         body: '2nd body'
//     }
// ]

// database.ref('expenses').push({

// })
// const expenses = [
//     {
//         description: 'desc 1',
//         note: 'note 1',
//         amount: 12345,
//         createdAt: 0
//     },
//     {
//         description: 'desc 2',
//         note: 'note 2',
//         amount: 12345,
//         createdAt: 100
//     },
//     {
//         description: 'desc 3',
//         note: 'note 3',
//         amount: 12345,
//         createdAt: 1000
//     }
// ]

// database.ref('expenses').on('value', snaptshot => {
//     const expenses = []
//     snaptshot.forEach(childSnapshot => {
//         expenses.push({ id: childSnapshot.key, ...childSnapshot.val() })
//     })
//     console.log(expenses)
// })
// database.ref('expenses').on('child_removed', snaptshot => {
//     console.log(snaptshot.key, snaptshot.val())
// })
// database.ref('expenses').on('child_changed', snaptshot => {
//     console.log(snaptshot.key, snaptshot.val())
// })
// database.ref('expenses').on('child_added', snaptshot => {
//     console.log(snaptshot.key, snaptshot.val())
// })
// database.ref('expenses').push(expenses[2])
// database
//     .ref('expenses')
//     .once('value')
//     .then(snaptshot => {
//         const expenses = []
//         snaptshot.forEach(childSnapshot => {
//             expenses.push({ id: childSnapshot.key, ...childSnapshot.val() })
//         })
//         console.log(expenses)
//     })
//     .catch(error => {
//         console.log(error)
//     })
// expenses.forEach(expense => {
//     database.ref('expenses').push(expense)
// })
// database.ref('expenses').set()
// database
//     .ref('notes')
//     .push({
//         title: 'this is a note',
//         body: 'yes it is'
//     })
//     .then(() => console.log('insert completed'))
//     .catch(error => console.log(error))
// database.ref('notes/-LyaGO4QroJH3SMVkbiO').remove()
// .update({ title: 'this is a big title 2' })
// database
//     .ref('notes')
//     .set(notes)
//     .then(() => console.log('insert completed'))
//     .catch(error => console.log(error))

// const printSnapshotValue = snaptshot => {
//     console.log(snaptshot.val())
// }
// const onValueChange = database
//     .ref()
//     // .once('value')
//     .on('value', printSnapshotValue, e => {
//         console.log(e)
//     })
// // .then(snaptshot => {
// //     console.log(snaptshot.val())
// // })
// // .catch(error => {
// //     console.log(error)
// // })
// setTimeout(() => {
//     database.ref('users/1').update({
//         // location: { coutry: 'fr', city: 'Montrèal' }
//         // 'location/city': 'Paris'
//         stressLevel: '2'
//         // job: {
//         //     company: '--'
//         // },
//         // 'location/city': 'Montreal'
//     })
// }, 3000)
// setTimeout(() => {
//     database.ref().off('value', onValueChange)
// }, 2000)
// // database.ref('users/1').update({
// //     // location: { coutry: 'fr', city: 'Montrèal' }
// //     // 'location/city': 'Paris'
// //     stressLevel: '4'
// //     // job: {
// //     //     company: '--'
// //     // },
// //     // 'location/city': 'Montreal'
// // })
// // database
// //     .ref('users/3')
// //     .remove()
// //     .then(() => {
// //         console.log('data was removed')
// //     })
// //     .catch(error => {
// //         console.log(error)
// //     })
// // database.ref().set({ users: {} })
// // database.ref('users/2').set({ name: 'chistophe', age: 23 })
// // database
// //     .ref('users/2/location')
// //     .set({ coutry: 'US' })
// //     .then(() => {
// //         console.log('database updated with success')
// //     })
// //     .catch(error => {
// //         console.log(error)
// //     })
