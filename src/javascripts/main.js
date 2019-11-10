import firebase from 'firebase';

import auth from './components/Auth/auth';
import navbar from './components/Navbar/navbar';
// import boards from './components/Boards/boards';

import apiKeys from './helpers/apiKeys.json';
import authData from './helpers/data/authData';
// import boardsData from './helpers/data/boardsData';

import 'bootstrap';
import '../styles/main.scss';


const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  auth.loginButton();
  authData.checkLoginStatus();
  navbar.logoutEvent();
};

init();
