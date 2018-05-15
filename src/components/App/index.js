import React from "react"

import Store from 'components/Store'

const App = ({children}) => (
    <Store.Provider>
        <Store.Consumer>
            {children}
        </Store.Consumer>
    </Store.Provider>
)

export default App