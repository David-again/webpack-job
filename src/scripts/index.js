import _ from 'lodash';
import '../styles/styles.css';
import HeliIcon from '../images/AW109SP.jpg';
import Data from '../data/data.xml';
import Notes from '../data/data.csv';

function component() {
    const element = document.createElement('div');
  
    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');
  
    // Add the image to our existing div.
    const myHeliIcon = new Image();
    myHeliIcon.src = HeliIcon;

    element.appendChild(myHeliIcon);

    console.log(Data);
    console.log(Notes);
    
    return element;
  }
  
  document.body.appendChild(component());

  if (module.hot) {
    module.hot.accept()
  }