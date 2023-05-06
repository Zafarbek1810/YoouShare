import React, {useCallback, useState} from 'react';
import HeaderContext from './HeaderContext';

const HeaderProvider = ({children}) => {
  const [burger, setBurger] = useState(false)

  const handleBurger = useCallback(() => {
    setBurger(p => !p)
  }, [])

  return (
    <HeaderContext.Provider value={{burger, handleBurger, setBurger}}>
      {children}
    </HeaderContext.Provider>
  );
};

export default HeaderProvider;
