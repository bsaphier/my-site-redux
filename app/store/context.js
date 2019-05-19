import { createContext } from 'react';
import { initialState } from './reducers';

const StoreContext = createContext(initialState);

export default StoreContext;
