import React, {createContext, useContext, useEffect, useState} from 'react';
import { useCity } from '../hooks';

const PaginationRefreshContext = createContext({
  PaginationRefresh: false,
  setPaginationRefresh: () => {},
  PaginationCity: {},
  setPaginationCity: () => {}
});

export const PaginationRefreshProvider = ({children}) => {
  const [PaginationRefresh, setPaginationRefresh] = useState(false);
  const [PaginationCity, setPaginationCity] = useState('');

  return (
    <PaginationRefreshContext.Provider
      value={{
        PaginationRefresh,
        setPaginationRefresh,
        PaginationCity,
        setPaginationCity,
      }}>
      {children}
    </PaginationRefreshContext.Provider>
  );
};

export const usePaginationRefresh = () => useContext(PaginationRefreshContext);
