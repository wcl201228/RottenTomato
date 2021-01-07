import React, { createContext, FC, useState } from 'react';
import classnames from 'classnames';

type MenduMode = 'horizontal' | 'vertical'
type SelectCallBack = (selectedIndex: number) => void;
export interface MenuProps {
  defaultIndex?: number;
  className?: string;
  mode?: MenduMode;
  style?: React.CSSProperties;
  onSelect?: SelectCallBack
}

interface IMenuContext {
  index: number;
  onSelect?: SelectCallBack
}

export const MenuContext = createContext<IMenuContext>({index: 0})

const Menu: FC<MenuProps> = (props) => {
  const { className, mode, style, children, defaultIndex, onSelect } = props;
  const [currentActive, setCurrentActive] = useState(defaultIndex)
  const classes = classnames('rott-menu', className, {
    'menu-verital': mode === 'vertical'
  })
  const handleClick = (index: number) => {
    console.log('index2', index)
    setCurrentActive(index);
    onSelect && onSelect(index);
  }
  const passedContext: IMenuContext = {
    index: currentActive ? currentActive: 0,
    onSelect: handleClick
  }
  return (
    <ul className={classes} style={style}>
      <MenuContext.Provider value={passedContext}>
        {children}
      </MenuContext.Provider>
    </ul>
  )
}

Menu.defaultProps = {
  mode: 'horizontal',
}

export default Menu;