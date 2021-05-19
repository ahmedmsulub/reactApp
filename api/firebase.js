import firebase from 'firebase';
// import 'firebase/auth'
// import 'firebase/firestore';
class Fire {
    constructor(){
        this.init()
        this.checkAuth()
    }
    init = () => {
        if(!firebase.apps.length) {
            firebase.initializeApp({
                    apiKey: "AIzaSyD_g1j0rQaPJMThVeLEjMC11wkP11FrYO8",
                    authDomain: "chatapp-a7d26.firebaseapp.com",
                    databaseURL: "https://chatapp-a7d26.firebaseio.com",
                    projectId: "chatapp-a7d26",
                    storageBucket: "chatapp-a7d26.appspot.com",
                    messagingSenderId: "28293458966",
                    appId: "1:28293458966:web:05db69de8efcb27cef9937",
                    measurementId: "G-6YQWJQBDVZ"
            })
        }
    }
    checkAuth = () => {
        firebase.auth().onAuthStateChanged(user => {
            if(!user) {
                firebase.auth().signInAnonymously();
            }
        });
    }
    send = messages => {
        messages.forEach(item => {
            const message = {
                text:item.text,
                timestamp:firebase.database.ServerValue.TIMESTAMP,
                user: item.user
            }
            this.db.push(message)
        })
    }
    parse = message => {
        const {user, text, timestamp} = message.val()
        const {key: _id}= message;
        const createdAt = new Date(timestamp);

        return {
            _id,
            createdAt,
            text,
            user
        }
    }
    get = callback => {
        this.db.on("child_added", snapshot => callback(this.parse(snapshot)));
    };
    off() {
        this.db.off()
    }
    get db() {
        return firebase.database().ref("messages");
    }
    get uid() {
        return (firebase.auth().currentUser || {}).uid
    }
}
// export const auth = firebase.auth();
// export const db = firebase.firestore();
export default new Fire();
// // Web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDvUlwgzhmdh8PWIqQ7XSNsODNbYEBMrHk",
//   authDomain: "pooyaadnan-3e4fd.firebaseapp.com",
//   databaseURL: "https://pooyaadnan-3e4fd.firebaseio.com",
//   projectId: "pooyaadnan-3e4fd",
//   storageBucket: "pooyaadnan-3e4fd.appspot.com",
//   messagingSenderId: "755666945382",
//   appId: "1:755666945382:web:7f32402cddc4482254f4a7",
//   measurementId: "G-Q97B818P6R"
// };
// // Initialize Firebase and exports
// firebase.initializeApp(firebaseConfig);
// export const auth = firebase.auth();
// export const db = firebase.firestore();

// export default firebase;
