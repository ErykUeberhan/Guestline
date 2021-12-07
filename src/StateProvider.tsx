import { createContext, useContext, useReducer } from 'react'

export const StateContext = createContext<unknown>(undefined);

export const StateProvider = ({ reducer, initialState, children }:any) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);