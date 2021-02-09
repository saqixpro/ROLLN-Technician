import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAVJek8xVtdwEIol6N-8gyMLAvcy4TxIvk",
    authDomain: "rolln-daf3c.firebaseapp.com",
    projectId: "rolln-daf3c",
    storageBucket: "rolln-daf3c.appspot.com",
    messagingSenderId: "300865681094",
    appId: "1:300865681094:web:1de07ce1f61788f10f89c7"
};
  

if(!firebase.apps.length) firebase.initializeApp(firebaseConfig)