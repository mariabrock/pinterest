import firebase from 'firebase/auth';
import 'firebase/app';
import utilities from '../../helpers/utilities';

import './boards.scss';

const getCurrentUid = () => firebase.auth().currentUser.uid;

const printAllBoards = () => {
  const domString = '<h1>Boards</h1>';

  utilities.printToDom('boards', domString);
};


const myBoards = () => {
  let domString = '';
  domString += '<div class="card" style="col-3">';
  domString += `<img src="${boardId.pin1.imageUrl}" class="card-img-top">`;
  domString += '<div class="card-body">';
  domString += `<h5 class="card-title">${boardId.name}</h5>`;
  domString += '<button class="btn btn-primary">View</button>';
  domString += '</div></div>';
  utilities.printToDom.printSingleBoard('my-boards', domString);
};

export default { printAllBoards };
