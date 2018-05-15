import React, {Component, Fragment} from 'react'
import styled from 'styled-components'
import AppBar from 'material-ui/AppBar'
import CircularProgress from 'material-ui/CircularProgress';

import {Consumer} from 'components/Store'
import WeatherCard from 'components/WeatherCard'

const StyledWrapper = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 1380px;
    height: calc(100% - 64px);
    margin: 0 auto;
    padding: 0 15px;
`

class Home extends Component {
    showSpinner = () => {
        const {
            weather: {
                current,
                location,
                forecast
            }
        } = this.props

        return !(current && location && forecast)
    }

    render() {
        return (
            <Fragment>
                <AppBar title="Weather App" showMenuIconButton={false}/>
                <StyledWrapper>
                    {this.showSpinner()
                        ? <CircularProgress size={80} thickness={5}/>
                        : <WeatherCard {...this.props.weather}/>
}
                </StyledWrapper>
            </Fragment>
        )
    }

    componentDidMount() {
        this
            .props
            .getCurrentWeather()
    }
}

export default Consumer(Home)