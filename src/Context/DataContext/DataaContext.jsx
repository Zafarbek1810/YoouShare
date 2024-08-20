import React from 'react';
import DataContext from './DataContext';

const DataProvider = ({ children, value }) => {

  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
