import utilities from '../../helpers/utilities';

// const getCurrentUid = () => firebase.auth().currentUser.uid;

const printSingleBoard = () => {
  utilities.printToDom.printSingleBoard();
};

export default { printSingleBoard };
