import {auth, GoogleSignin} from '../../firebase/utils';
import {CLEAR_LOADING, SET_LOADING, SET_USER} from '../types';

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
    dispatch({type: CLEAR_LOADING});
    // console.log(res);
    dispatch({
      type: SET_USER,
      payload: {
        authenticated: true,
        userName: res.user.displayName,
        userImage: res.user.photoURL,
        userId: res.user.uid,
      },
    });
  });
};

// Utility function
