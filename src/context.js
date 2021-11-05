
import React, { useState, createContext } from 'react';

export const Context = createContext();


function UserProvder({ children }) {
    const [state, setState] = useState(undefined)
    return (
        <Context.Provider value={[state, setState]}>{children}</Context.Provider>
    )
}

export default UserProvder;