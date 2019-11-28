import utilities from '../../helpers/utilities';
import pinsData from '../../helpers/data/pinsData';
import singleBoard from '../singleBoard/singleBoard';

const pinBuilder = () => {
  pinsData.getMyPins()
    .then((pins) => {
      let domString = '';
      pins.forEach((pin) => {
        domString += '<div class="row justify-content-between"><h1>Pins</h1>';
        domString += '<button class="btn btn-success" id="all-boards">Back to Boards</button></div>';
        domString += '<div class="row">';
        domString += '<div class="card col-4">';
        domString += `<img src="${pin.imageUrl}" class="card-img-top" alt="${pin.pinName}">`;
        domString += `<div class="card-body">
            <h5 class="card-title">${pin.pinName}</h5>
            <button class="btn btn-danger delete" boardInfo="${pin.boardId}" id="${pin.pinId}">Delete</button>
          </div>
        </div>`;
      })
        .catch((error) => console.error(error));
      domString += '</div>';
      utilities.printToDom('single-board', domString);
    });
};

const deleteAPin = (e) => {
  e.preventDefault();
  const pinId = $(e.target.id).attr('id');

  pinsData.deletePin(pinId)
    .then(() => {
      e.preventDefault();
      const boardId = $(e.target.id).attr('boardInfo');
      singleBoard.showOneBoard(boardId);
    })
    .catch((error) => console.error(error));
};

export default { pinBuilder, deleteAPin };
