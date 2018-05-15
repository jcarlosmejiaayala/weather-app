import React, {Component, createContext} from 'react'

import {getCurrentAndForecastWeatherService} from 'lib/apiService'

const DEFAULT_STATE = {
    weather: {
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
        const {current, location, forecast} = await getCurrentAndForecastWeatherService()

        this.setState({
            weather: {
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
                ...this.state
            }}>
                {this.props.children}
            </Context.Provider>
        )
    }
}
