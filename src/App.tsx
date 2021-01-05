import React from 'react';
import Button, { ButtonSize, ButtonType } from './components/Button/button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Button className="custom" onClick={() =>{alert('123')}}>disabled button</Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Large} >Primary button</Button>
      <Button btnType={ButtonType.Default} size={ButtonSize.Large} >Default button</Button>
      <Button btnType={ButtonType.Danger} size={ButtonSize.Large} >Danger button</Button>
      <Button btnType={ButtonType.Link} href="https://reactjs.org">Hello World</Button>
      <Button btnType={ButtonType.Link} href="https://reactjs.org" target="_blank">Hello World</Button>
      <h3>Hello World</h3>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
