import $ from 'jquery';
import firebase from 'firebase/app';
import 'firebase/auth';

import boardsData from '../../helpers/data/boardsData';
import singleBoard from '../singleBoard/singleBoard';

import utilities from '../../helpers/utilities';
import pinsData from '../../helpers/data/pinsData';

import './boards.scss';

const getCurrentUid = () => firebase.auth().currentUser.uid;


const deleteBoard = (e) => {
  e.preventDefault();
  const boardId = $(e.target.id).attr('boardInfo');
  const uid = getCurrentUid;

  boardsData.deleteABoard(boardId)
    .then(() => {
      e.preventDefault();
      pinsData.printAllBoards(uid);
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
            <button class="btn btn-danger delete" boardInfo="${bord.boardId}' id="${bord.boardId}-delete">Delete</button>
              <div class="card-body">
              <h5 class="card-title">${bord.boardName}</h5>
              <button class="btn btn-primary boardClick" id="${bord.boardId}">View</button>
              </div>
            </div>
          </div>  
          `;
      });
      domString += '</div>';
      utilities.printToDom('boards', domString);
      $('body').on('click', '.boardClick', addBoardClickEvent);
      $('body').on('click', '.delete', deleteBoard);
    })
    .catch((error) => console.error(error));
};

export default {
  printAllBoards,
  addBoardClickEvent,
  deleteBoard,
};
