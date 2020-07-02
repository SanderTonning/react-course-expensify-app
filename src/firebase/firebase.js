import * as firebase from 'firebase';

const config = {
        apiKey: process.env.FIREBASE_API_KEY,
        authDomain: process.env.FIREBASE_AUTH_DOMAIN,
        databaseURL: process.env.FIREBASE_DATABASE_URL,
        projectId: process.env.FIREBASE_PROJECT_ID,
        storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.FIREBASE_MESSAGE_SENDER_ID
      };

      firebase.initializeApp(config)

      const database = firebase.database();
      
      // child_removed, only fires when a child is removed.
      database.ref('expenses').on('child_removed', (snapshot) => {
        console.log(snapshot.key, snapshot.val())
      });

      // child_changed, only fires when child is changed.
      database.ref('expenses').on('child_changed', (snapshot) => {
        console.log(snapshot.key, snapshot.val())
      });
      
      // child_added, fires on current db entries and the added childs.
      database.ref('expenses').on('child_added', (snapshot) => {
        console.log(snapshot.key, snapshot.val())
      });

      
      export { firebase, database as default };


      // database.ref('expenses').on('value', (snapshot) => {
      // const expenses = [];
      
      // snapshot.forEach((childSnapshot) => {
      //   expenses.push({
      //     id: childSnapshot.key,
      //     ...childSnapshot.val()
      //   });
      // });
      //   console.log(expenses);
      // });

     

      // database.ref('expenses').push({
      //   description: 'Rent',
      //   note: '',
      //   amount: 109500,
      //   createdAt: 915671238
      // })
 

      // database.ref('notes/-MAzVx03R_YkHbxPk1A4').update()

      // database.ref('notes').push({
      //   title: 'Course Topics',
      //   body: 'React Native, Angular, Python'
      // });


      // const firebaseNotes = {
      //   notes: {
      //     asmdiofnasd: {
      //       tile: 'First note',
      //       body: 'This is my note'
      //     },
      //     asnidonasfif: {
      //       title: 'Another note',
      //       body: 'This is my note'
      //     }
      //   }
      // };

      // const notes = [{
      //   id: '12',
      //   title: 'First note',
      //   body: 'This is my note'
      // }, {
      //   id: '761ase',
      //   title: 'Another note',
      //   body: 'This is my note'
      // }]

      // database.ref('notes').set(notes);

      // database.ref().on('value', (snapshot) => {
      //   const val = snapshot.val();
      //   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`)
      // }, (e) => {
      //   console.log('Error with data fetching', e);
      // });

      // const onValueChange = database.ref().on('value', (snapshot) => {
      //   console.log(snapshot.val());  
      // }, (e) => {
      //   console.log('Error with data fetching', e);
      // });

      // setTimeout(() => {
      //   database.ref('age').set(29);
      // }, 3500);
      // setTimeout(() => {
      //   database.ref().off(onValueChange);  
      // }, 7000);
      // setTimeout(() => {
      //   database.ref('age').set(30);
      // }, 10500);

      // database.ref()
      // .once('value')
      // .then((snapshot) => {
      //   const val = snapshot.val();
      //   console.log(val);
      // })
      // .catch((e) => {
      //   console.log('Error fetching data', e);
      // });
      
      // Specify in ref('') which data you want val to return. IE: 'location' or 'location/city'



      // database.ref()
      // .remove()
      // .then(() => {
      //     console.log('Remove succeeded');
      // }).catch((e) => {
      //     console.log('Remove failed.', e)
      // });

      // database.ref('isSingle').set(null);   // Will remove the entry complety.

      //.update will update the new child object and overwrite it completly.
      // To update child object without removing the older entries, you can use "/" to reference it


      
      // database.ref().set({
      //   name: 'Sander Tonning',
      //   age: 28,
      //   stressLevel: 6,
      //   job: {
      //     title: 'Software developer',
      //     company: 'Google'
      //   },
      //   location: {
      //       city: 'Solheimsdalen',
      //       country: 'Norway'
      //   }
      // }).then(() => {
      //   console.log('Data is saved.')
      // }).catch((error) => {
      //   console.log('This failed.', error);
      // })

      // database.ref().update({
      //   stressLevel: 9,
      //   'job/company': 'Amazon',
      //   'location/city': 'Seattle'
      // })