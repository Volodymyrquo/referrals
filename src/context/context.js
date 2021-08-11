import React, { createContext } from 'react'
import contextReducer, { initialState } from './contextReducer'

export const Context = createContext(initialState)

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(contextReducer, initialState)

  return <Context.Provider value={{}}>{children}</Context.Provider>
}
