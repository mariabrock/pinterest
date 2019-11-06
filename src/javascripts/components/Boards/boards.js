import utilities from '../../helpers/utilities';
import './boards.scss';

const printAllBoards = () => {
  const domString = '<h1>Boards</h1>';
  utilities.printToDom('boards', domString);
};

export default { printAllBoards };
