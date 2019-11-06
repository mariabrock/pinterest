import utilities from '../../helpers/utilities';
import './home.scss';

const printPinterest = () => {
  const domString = '<h1>Pinterest</h1>';
  utilities.printToDom('home', domString);
};

export default { printPinterest };
