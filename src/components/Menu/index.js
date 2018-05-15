import React, {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'

import IconButton from 'material-ui/IconButton'
import IconMenu from 'material-ui/IconMenu'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import MenuItem from 'material-ui/MenuItem'

const isCurrentPathHome = pathname => (toHome, otherwise) => pathname === '/'
    ? toHome
    : otherwise

class Menu extends Component {
    muiName = 'IconMenu'

    render() {
        const {location: {
                pathname
            }} = this.props

        const resolveCurrentLocationIfHome = isCurrentPathHome(pathname)

        return (
            <IconMenu
                {...this.props}
                iconButtonElement={<IconButton><MoreVertIcon/></IconButton>}
                targetOrigin={{
                horizontal: 'right',
                vertical: 'top'
            }}
                anchorOrigin={{
                horizontal: 'right',
                vertical: 'top'
            }}>
                <Link to={resolveCurrentLocationIfHome('collections', '/')}>
                    <MenuItem
                        primaryText={`Go to ${resolveCurrentLocationIfHome('Collections', 'Home')}`}/>
                </Link>
            </IconMenu>
        )
    }
}

export default withRouter(Menu)
