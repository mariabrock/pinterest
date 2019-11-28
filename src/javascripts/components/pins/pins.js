// // import $ from 'jquery';

// import utilities from '../../helpers/utilities';
// import pinsData from '../../helpers/data/pinsData';
// // import singleBoard from '../singleBoard/singleBoard';

// // const deletePin = (e) => {
// //   e.preventDefault();
// //   const pinId = $(e.target.id).attr('id');

// //   pinsData.deleteAPin(pinId)
// //     .then(() => {
// //       e.preventDefault();
// //       const boardId = $(e.target.id).attr('boardInfo');
// //       // eslint-disable-next-line no-use-before-define
// //       singleBoard.showOneBoard(boardId);
// //     })
// //     .catch((error) => console.error(error));
// // };

// const pinBuilder = () => {
//   pinsData.getMyPins(boardId);
//   let domString = '<div class="row justify-content-between"><h1>Pins</h1>';
//   domString += '<button class="btn btn-success" id="all-boards">Back to Boards</button></div>';
//   domString += '<div class="row">';
//   pins.forEach((pin) => {
//     domString += '<div class="card col-4">';
//     domString += `<img src="${pin.imageUrl}" class="card-img-top" alt="${pin.pinName}">`;
//     domString += `<div class="card-body">
//             <h5 class="card-title">${pin.pinName}</h5>
//             <button class="btn btn-danger delete" boardInfo="${pin.boardId}" id="${pin.pinId}">Delete</button>
//           </div>
//         </div>`;
//   });
//   domString += '</div>';
//   utilities.printToDom('single-board', domString);
// };

// export default { pinBuilder };
