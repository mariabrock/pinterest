import $ from 'jquery';
import 'firebase/auth';

import boardsData from '../../helpers/data/boardsData';
import singleBoard from '../singleBoard/singleBoard';

import utilities from '../../helpers/utilities';

import './boards.scss';

const addBoardClickEvent = (e) => {
  e.preventDefault();
  singleBoard.showOneBoard(e.target.id);
};

const printAllBoards = (uid) => {
  boardsData.getBoardsByUser(uid)
    .then((boards) => {
      let domString = '<h1>Boards</h1>';
      domString += '<div class="row" id="board-cards">';
      boards.forEach((board) => {
        domString += `
          <div class="col-sm-4">
            <div class="card border-secondary mb-3">
            <button class="btn btn-danger delete col-3 offset-9" boardInfo="${board.boardId}' id="${board.boardId}-delete">Delete</button>
              <div class="card-body">
              <h5 class="card-title">${board.boardName}</h5>
              <button class="btn btn-primary boardClick" id="${board.boardId}">View</button>
              </div>
            </div>
          </div>  
          `;
      });
      domString += '</div>';
      utilities.printToDom('boards', domString);
      $('body').on('click', '.boardClick', addBoardClickEvent);
      $('body').on('click', '.delete', boardsData.deleteABoard);
    })
    .catch((error) => console.error(error));
};

export default {
  printAllBoards,
  addBoardClickEvent,
};
