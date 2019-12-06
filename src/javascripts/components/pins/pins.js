import utilities from '../../helpers/utilities';
import pinsData from '../../helpers/data/pinsData';
// import singleBoard from '../singleBoard/singleBoard';

const pinBuilder = (boardId) => {
  pinsData.getMyPins(boardId)
    .then((pins) => {
      pins.forEach((pin) => {
        let domString = '<div class="row justify-content-between"><h1>Pins</h1></div>';
        domString += '<button class="btn btn-success" id="all-boards">Back to Boards</button>';
        domString += `
        <div class="row">
        <div class="card col-4">
        <img src="${pin.imageUrl}" class="card-img-top" alt="${pin.pinName}">
        <div class="card-body">
            <h5 class="card-title">${pin.pinName}</h5>
            </div>
            <button class="btn btn-danger delete" boardInfo="${pin.boardId}" id="${pin.pinId}">Delete</button>
        </div>
        </div>
        </div>
        `;
        utilities.printToDom('single-board', domString);
      });
    });
};

// const deleteAPin = (e) => {
//   e.preventDefault();
//   const pinId = $(e.target.id).attr('id');

//   pinsData.deletePin(pinId)
//     .then(() => {
//       e.preventDefault();
//       const boardId = $(e.target.id).attr('boardInfo');
//       singleBoard.showOneBoard(boardId);
//     })
//     .catch((error) => console.error(error));
// };

export default { pinBuilder };
