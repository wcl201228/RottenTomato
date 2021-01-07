import React from 'react';
import Button, { ButtonSize, ButtonType } from './components/Button/button';
import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menuItem';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu defaultIndex={0} onSelect={(index) => { } }>
          <MenuItem index={0}>cool link 1</MenuItem>
          <MenuItem index={1}>cool link 2</MenuItem>
          <MenuItem index={2}>cool link 3</MenuItem>
        </Menu>
        <Button className="custom" onClick={() =>{alert('123')}}>disabled button</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large} >Primary button</Button>
        <Button btnType={ButtonType.Default} size={ButtonSize.Large} >Default button</Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Large} >Danger button</Button>
        <Button btnType={ButtonType.Link} href="https://reactjs.org" target="_blank">Hello World</Button>
      </header>
    </div>
  );
}

export default App;
