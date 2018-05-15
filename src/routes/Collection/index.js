import React, {Fragment} from 'react'

import {Consumer} from 'components/Store'
import Navigation from 'components/Navigation'
import WeatherCard from 'components/WeatherCard'
import StyledWrapper from 'styled/StyledWrapper'

const Collection = ({storeLocations}) => (
    <Fragment>
        <Navigation/>
        <StyledWrapper>
            {storeLocations.map(weather => <WeatherCard key={Date.now()} {...weather}/>)}
        </StyledWrapper>
    </Fragment>
)

export default Consumer(Collection)