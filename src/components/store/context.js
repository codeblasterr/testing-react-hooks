import React, { useContext } from 'react'

export const useAppContext = () => useContext(Context)

const Context = React.createContext()

export default Context
