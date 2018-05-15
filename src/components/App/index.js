import React from "react"
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Provider from 'components/Store'

const App = ({children}) => (
    <Provider>
        <MuiThemeProvider>
            {children}
        </MuiThemeProvider>
    </Provider>
)

export default App