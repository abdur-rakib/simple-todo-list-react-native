import {auth, db, GoogleSignin} from '../../firebase/utils';
import {CLEAR_LOADING, SET_LOADING, SET_LOGOUT, SET_USER} from '../types';

async function onGoogleButtonPress() {
  // Get the users ID token
  const {idToken} = await GoogleSignin.signIn();

  // Create a Google credential with the token
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  // Sign-in the user with the credential
  return auth().signInWithCredential(googleCredential);
}

export const loginWithGoogle = () => (dispatch) => {
  dispatch({type: SET_LOADING});
  onGoogleButtonPress().then((res) => {
    console.log('user ID: ', res.user.uid);
    dispatch({type: CLEAR_LOADING});

    db.doc(`users/${res.user.uid}`)
      .get()
      .then((doc) => {
        if (doc.exists) {
          console.log(doc.data());
          dispatch({
            type: SET_USER,
            payload: {
              authenticated: true,
              ...doc.data(),
            },
          });
        } else {
          db.doc(`users/${res.user.uid}`)
            .set({
              userName: res.user.displayName,
              userImage: res.user.photoURL,
              userId: res.user.uid,
              birthdate: null,
              gender: 'male',
              location: '',
            })
            .then(() => {
              dispatch({
                type: SET_USER,
                payload: {
                  authenticated: true,
                  userName: res.user.displayName,
                  userImage: res.user.photoURL,
                  userId: res.user.uid,
                  birthdate: null,
                  gender: 'male',
                  location: '',
                },
              });
            });
        }
      });
  });
};

// logout user
export const logout = () => (dispatch) => {
  auth()
    .signOut()
    .then(() => {
      dispatch({type: SET_LOGOUT});
    })
    .catch((err) => console.log('Error in logout', err));
};

export const getAuthenticatedUser = (userId) => (dispatch) => {
  db.doc(`users/${userId}`)
    .get()
    .then((doc) => {
      dispatch({
        type: SET_USER,
        payload: {
          authenticated: true,
          ...doc.data(),
        },
      });
    });
};
