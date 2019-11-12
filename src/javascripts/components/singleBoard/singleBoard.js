import $ from 'jquery';
// import firebase from 'firebase/auth';

import pinsData from '../../helpers/data/pinsData';
import aPin from '../pins/pins';
// import boardData from '../../helpers/data/boardsData';

import './singleBoard.scss';
// import utilities from '../../helpers/utilities';

const backToBoards = (e) => {
  e.preventDefault();
  $('#boards').removeClass('d-none');
  $('#single-board').addClass('d-none');
};

const showOneBoard = (boardId) => {
  pinsData.getMyPins(boardId)
    .then(() => {
      $('#single-board').on('click', '#all-boards', backToBoards);
      $('#boards').addClass('d-none');
      $('#single-board').removeClass('d-none');
      $('body').on('click', '.delete', aPin.deletePin);
    })
    .catch((error) => console.error(error));
};

export default { showOneBoard };
