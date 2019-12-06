import $ from 'jquery';
import firebase from 'firebase';

import pins from '../pins/pins';
import pinsData from '../../helpers/data/pinsData';
import boardData from '../../helpers/data/boardsData';

import './singleBoard.scss';


const backToBoards = (e) => {
  e.preventDefault();
  $('#boards').removeClass('d-none');
  $('#single-board').addClass('d-none');
};

const showOneBoard = (boardId) => {
  pins.pinBuilder(boardId);
  $('#single-board').on('click', '#all-boards', backToBoards);
  $('#boards').addClass('d-none');
  $('#single-board').on('click', pins.pinBuilder()).removeClass('d-none');
  // $('body').on('click', '.delete', pinsData.deletePin);
};

const getCurrentUid = () => firebase.auth().currentUser.uid;

const deleteBoard = (e) => {
  e.preventDefault();
  const boardId = $(e.target.id).attr('boardInfo');
  const uid = getCurrentUid;

  boardData.deleteABoard(boardId)
    .then(() => {
      e.preventDefault();
      pinsData.printAllBoards(uid);
    })
    .catch((error) => console.error(error));
};

export default { showOneBoard, deleteBoard };
