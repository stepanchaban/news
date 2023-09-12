import { useState } from 'react';

export const useFilters = initalFilters => {
  const [filters, setFilters] = useState(initalFilters);

  const changeFilter = (key, value) => {
    setFilters(prev => {
      return { ...prev, [key]: value };
    });
  };

  return { filters, changeFilter };
};
