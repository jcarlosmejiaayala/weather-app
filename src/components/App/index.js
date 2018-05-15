import React from "react"

import Provider from 'components/Store'

const App = ({children}) => (
    <Provider>
        {children}
    </Provider>
)

export default App