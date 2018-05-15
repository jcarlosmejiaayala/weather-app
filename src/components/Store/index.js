import React, {Component, createContext} from 'react'

import {getCurrentWeatherService, getForecastWeatherService} from 'lib/apiService'

const DEFAULT_STATE = {
    currentWeater: {
        current: null,
        location: null
    },
    forecastWeather: {
        current: null,
        location: null,
        forecast: null
    }
}

const Context = createContext(DEFAULT_STATE)

export const Consumer = Mixin => class extends Component {
    render() {
        return (
            <Context.Consumer>
                {context => <Mixin {...context}/>}
            </Context.Consumer>
        )
    }
}

export default class Provider extends Component {
    state = DEFAULT_STATE

    getCurrentWeather = async() => {
        const {current, location} = await getCurrentWeatherService()

        this.setState({
            currentWeater: {
                current,
                location
            }
        })

    }

    getForecastWeather = async() => {
        const {current, location, forecast} = await getForecastWeatherService()

        this.setState({
            forecastWeather: {
                current,
                location,
                forecast
            }
        })
    }

    render() {
        return (
            <Context.Provider
                value={{
                getCurrentWeather: this.getCurrentWeather,
                getForecastWeather: this.getForecastWeather,
                ...this.state
            }}>
                {this.props.children}
            </Context.Provider>
        )
    }
}
