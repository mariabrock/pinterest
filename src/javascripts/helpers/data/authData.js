import firebase from 'firebase/app';
import 'firebase/auth';
import $ from 'jquery';

const authDiv = $('#auth');
const logoutNavbar = $('#navbar-button-logout');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // someone is logged in - we should not see auth component
      logoutNavbar.removeClass('d-none');
      authDiv.addClass('d-none');
      // console.error(user.uid);
    } else {
      //  nobody logged in SHOW auth component
      logoutNavbar.addClass('d-none');
      authDiv.removeClass('d-none');
    }
  });
};

export default { checkLoginStatus };
