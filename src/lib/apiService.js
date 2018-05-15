import {API_CURRENT, API_FORECAST} from './constants'

const isEnabledGeoApi = () => "geolocation" in navigator

const getCurrentPosition = () => new Promise((resolve, reject) => {
    if (!isEnabledGeoApi()) {
        return reject('Not geolaction api available in your browser.')
    }

    navigator
        .geolocation
        .getCurrentPosition(({
            coords: {
                latitude,
                longitude
            }
        }) => resolve({latitude, longitude}))
})

const callToEndpoint = async(api, query = '') => {
    const {latitude, longitude} = await getCurrentPosition()

    return (await fetch(`${api}&q=${latitude},${longitude}${query}`)).json()
}

export const getCurrentWeatherService = async() => await callToEndpoint(API_CURRENT)

export const getCurrentAndForecastWeatherService = async() => await callToEndpoint(API_FORECAST, '&days=7')
