import { createContext, useContext } from 'react';

export const ColorModeContext = createContext();

export const useColorModeContext = () => useContext(ColorModeContext);
