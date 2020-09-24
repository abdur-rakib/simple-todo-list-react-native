import * as firebase from '@react-native-firebase/app';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
const db = firestore();

// Sign in with google
import {GoogleSignin} from '@react-native-community/google-signin';

GoogleSignin.configure({
  webClientId:
    '402138581108-drknrfm3hgnm65qdkj6uc8flacefrbaj.apps.googleusercontent.com',
  androidClientId:
    '402138581108-p73ptm9gg4qhj48nl8ol11q4j31ddapq.apps.googleusercontent.com',
});
export {db, auth, GoogleSignin};
