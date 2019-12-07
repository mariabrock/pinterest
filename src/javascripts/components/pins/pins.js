import $ from 'jquery';
import firebase from 'firebase';
import utilities from '../../helpers/utilities';
import pinsData from '../../helpers/data/pinsData';


const displayAllPins = (boardId) => {
  let domString = '<div class="text-center"><h1>Pins</h1></div>';
  domString += '<div class="text-center"><button class="btn btn-succes add-button" id="add-new-pin" data-toggle="modal" data-target="#exampleModal">Add New Pin</button>';
  domString += '<button class="btn btn-light back-button" id="all-boards">Back to Boards</button></div>';
  domString += '<div id="pins-section" class="d-flex flex-wrap">';
  pinsData.getMyPins(boardId)
    .then((pins) => {
      pins.forEach((pin) => {
        // eslint-disable-next-line no-use-before-define
        domString += pinBuilder(pin);
      });
      domString += '</div>';
      utilities.printToDom('single-board', domString);
      // $('body').on('click', '#add-new-pin', createNewPin);
      // $('body').on('click', '.edit-pin' , editPin);
      // eslint-disable-next-line no-use-before-define
      $('body').on('click', '.delete-pin', deleteOnePin);
    });
};

const pinBuilder = (pin) => {
  let domString = '';
  const user = firebase.auth().currentUser;
  if (user != null) {
    domString += `
        <div class="row">
        <div class="card pin-card col" style="width: 18rem;">
        <img src="${pin.imageUrl}" class="card-img-top" alt="${pin.pinName}">
        <div class="card-body">
            <h5 class="card-title">${pin.pinName}</h5>
            <button class="btn btn-primary edit-pin" boardInfo="${pin.boardId}" id="${pin.pinId} data-toggle="modal" data-target="#exampleModal">Edit</button>
            <button class="btn btn-danger delete-pin" boardInfo="${pin.boardId}" id="${pin.pinId}">Delete</button>
        </div>
        </div>
        </div>
        `;
  }
  return domString;
};

const pinsModal = (pin) => {
  const domString = `
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="addPinDataModalTitle" >${pin.id ? 'Update Pin' : 'Add A New Pin'}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form>
          <div class="form-group">
            <label for="pinName" class="col-form-label">Pin Name:</label>
            <input type="text" class="form-control" id="pinName" value="${pin.name ? pin.name : ''}">
          </div>
          <div class="form-group">
              <label for="pinImage" class="col-form-label">Image URL:</label>
              <input type="text" class="form-control" id="pinImage" value="${pin.imageUrl ? pin.imageUrl : ''}">
          </div>
          <div class="form-group">
              <label for="info" class="col-form-label">Info:</label>
              <input type="text" class="form-control" id="info" value="${pin.info ? pin.info : ''}">
          </div>
        </form>
      </div>
      <div class="modal-footer" id="${pin.id}">
        <button type="button" class="btn btn-secondary" data-dismiss="modal" id="close-button">Close</button>
        <button type="button" class="btn btn-primary" id="${pin.id ? 'update' : 'submit'}">Save</button>
      </div>
    </div>
  </div>
  `;
  return domString;
};

const deleteOnePin = (e) => {
  e.preventDefault();
  pinsData.deletePin(e.target.id)
    .then(() => {
      e.preventDefault();
      const boardId = $(e.target.id).attr('delete-pin');
      displayAllPins(boardId);
    })
    .catch((error) => console.error(error));
};

export default { displayAllPins, deleteOnePin };
