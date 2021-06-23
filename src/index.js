import './styles/main.scss';
import exampleImg from './images/sample.png';
import example from './images/example.svg';

const testMessage = 'Hello!';

class Test {
  constructor(item) {
    this.item = item;
  }
  consoleItem() {
    console.log(this.item);
  }
}

const test1 = new Test(testMessage);

test1.consoleItem();

// создаем элемент заголовка
const heading = document.createElement('h1');
heading.textContent = testMessage;

// добавляем заголовок в DOM
const root = document.querySelector('#root');
root.append(heading);
