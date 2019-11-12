import $ from 'jquery';
import firebase from 'firebase/app';
import 'firebase/auth';

import boardsData from '../../helpers/data/boardsData';
import singleBoard from '../singleBoard/singleBoard';

import utilities from '../../helpers/utilities';
import pinsData from '../../helpers/data/pinsData';

import './boards.scss';

const getCurrentUid = () => firebase.auth().currentUser.uid;

const deletePin = (e) => {
  e.preventDefault();
  const pinId = e.target.id.split('-del-')[0];
  const boardId = e.target.id.split('-del-')[1];
  pinsData.deleteAPin(pinId)
    .then(() => {
      // eslint-disable-next-line no-use-before-define
      singleBoard.showOneBoard(boardId);
    })
    .catch((error) => console.error(error));
};

const deleteBoard = (e) => {
  e.preventDefault();
  const boardId = e.target.id.split('-del-')[0];
  const uid = e.target.id.split('-del-')[1];
  // const boardId = e.target.id.split('-del-')[1];
  boardsData.deleteABoard(boardId)
    .then(() => {
      // eslint-disable-next-line no-use-before-define
      printAllBoards(uid);
    })
    .catch((error) => console.error(error));
};

const addBoardClickEvent = (e) => {
  e.preventDefault();
  singleBoard.showOneBoard(e.target.id);
};

// <img src="..." class="card-img-top" alt="...">

const printAllBoards = (user) => {
  boardsData.getMyBoards(user.uid)
    .then((bords) => {
      let domString = '<h1>Boards</h1>';
      domString += '<div class="row" id="board-cards">';
      bords.forEach((bord) => {
        domString += `
          <div class="col-sm-4">
            <div class="card">
            <button class="btn btn-danger delete" id="${bord.boardId}-del-${getCurrentUid}">Delete</button>
              <div class="card-body">
              <h5 class="card-title">${bord.boardName}</h5>
              <button class="btn btn-primary boardClick" id="${bord.boardId}">View</button>
              </div>
            </div>
          </div>  
          `;
      });
      domString += '</div>';
      console.log(user.uid);
      utilities.printToDom('boards', domString);
      $('body').on('click', '.boardClick', addBoardClickEvent);
      $('body').on('click', '.delete', deletePin);
      $('body').on('click', '.delete', deleteBoard);
    })
    .catch((error) => console.error(error));
};

export default {
  printAllBoards,
  addBoardClickEvent,
  deletePin,
  deleteBoard,
};
