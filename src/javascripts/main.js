import firebase from 'firebase';

import auth from './components/Auth/auth';
import navbar from './components/Navbar/navbar';
import apiKeys from './helpers/apiKeys.json';
import authData from './helpers/data/authData';
import home from './components/Home/home';

import 'bootstrap';
import '../styles/main.scss';

console.error('hi');

const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  auth.loginButton();
  authData.checkLoginStatus();
  navbar.logoutEvent();
  home.printPinterest();
};

init();
