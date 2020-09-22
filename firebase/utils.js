// import * as firebase from '@react-native-firebase/app';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

// Sign in with google
import {GoogleSignin} from '@react-native-community/google-signin';

GoogleSignin.configure({
  webClientId:
    '402138581108-drknrfm3hgnm65qdkj6uc8flacefrbaj.apps.googleusercontent.com',
});

// import config from './config';
// firebase.initializeApp(config);
// const googleProvider = auth.GoogleAuthProvider();

export {firestore, auth, GoogleSignin};
