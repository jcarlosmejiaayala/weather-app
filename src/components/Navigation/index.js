import React from 'react'
import AppBar from 'material-ui/AppBar'

import Menu from 'components/Menu'

const Navigation = () => (
    <AppBar
        title="Weather App"
        showMenuIconButton={false}
        iconElementRight={<Menu />}/>
)

export default Navigation