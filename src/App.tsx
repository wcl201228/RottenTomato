import React from 'react';
import Button, { ButtonSize, ButtonType } from './components/Button/button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Button disabled>disabled button</Button>
      <Button type={ButtonType.Primary} size={ButtonSize.Large} >Primary button</Button>
      <Button type={ButtonType.Default} size={ButtonSize.Large} >Default button</Button>
      <Button type={ButtonType.Danger} size={ButtonSize.Large} >Danger button</Button>
      <Button type={ButtonType.Link} href="https://reactjs.org">Hello World</Button>
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
