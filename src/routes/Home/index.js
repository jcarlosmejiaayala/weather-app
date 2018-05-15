import React, {Component, Fragment} from 'react'
import styled from 'styled-components'
import CircularProgress from 'material-ui/CircularProgress';
import RaisedButton from 'material-ui/RaisedButton'
import Snackbar from 'material-ui/Snackbar';

import {Consumer} from 'components/Store'
import Navigation from 'components/Navigation'
import WeatherCard from 'components/WeatherCard'
import StyledWrapper from 'styled/StyledWrapper'

const StyledRaisedButton = styled(RaisedButton)`
    margin: 40px 0;
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
        const {weather, showMessageWhenNewLocationAdded, saveNewLocation, switchMessageWhenNewLocationIsAdded} = this.props

        return (
            <Fragment>
                <Navigation/>
                <StyledWrapper>
                    {this.showSpinner()
                        ? <CircularProgress size={80} thickness={5}/>
                        : <Fragment>
                            <WeatherCard {...weather}/>
                            <StyledRaisedButton
                                label="Save this location"
                                primary
                                onClick={() => saveNewLocation(weather)}/>
                        </Fragment>
}
                    <Snackbar
                        open={showMessageWhenNewLocationAdded}
                        message="New location saved"
                        autoHideDuration={2000}
                        onRequestClose={switchMessageWhenNewLocationIsAdded}/>
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