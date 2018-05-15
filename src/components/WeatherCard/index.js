import React, {Component} from 'react'
import styled from 'styled-components'
import Paper from 'material-ui/Paper'

import Icon from 'components/Icon'
import ForecastList from 'components/ForecastList'
import StyledText from 'styled/StyledText'

const StyledPaper = styled(Paper)`
    width: 100%;
    height: 85vh;
    padding-left: 15px;
    padding-right: 15px;
    overflow: hidden;
    position: relative;

    @media screen and (min-width: 600px) {
        width: 840px;
        height: 630px;
    }
`

const StyledH1 = styled.h1 `
    color: #000;
    font-weight: 600;
    font-size: 96px;
    margin: 0;
    margin-bottom: 20px;

    @media screen and (min-width: 600px) {
        font-size: 72px;
        margin: inherit;
    }
`

const StyledH2 = styled.h2 `
    color: #878787;
    font-weight: 600;
    text-align: center;
`

const StyledWrapper = styled.div `
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    @media screen and (min-width: 600px) {
        flex-direction: row;
        margin-right: auto;
        margin-left: auto;
        margin-top: 40px;
        justify-content: space-around;
    }
`

const StyledInnerWrapper = styled.div `
    display: flex;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    
    @media screen and (min-width: 600px) {
        margin-left: inherit;
        margin-right: inherit;
    }
`

const StyledInnerWrapperText = StyledInnerWrapper.extend `
    width: 60%;
    
    &:last-child {
        flex-direction: column;
        margin-top: 20px;

    
    }

    @media screen and (min-width: 600px) {
        width: auto;
        margin: auto inherit;

        &:last-child p {
            margin-left: auto;
        }
    }
`

class WeatherCard extends Component {
    render() {
        const {
            current: {
                condition,
                temp_c,
                wind_kph,
                precip_mm,
                pressure_mb
            },
            forecast: {
                forecastday
            },
            location: {
                name,
                region,
                country
            }
        } = this.props

        const locationName = `${name}, ${region}, ${country}.`
        const tempCFormatted = `${temp_c} °c`
        const windFormatted = `Wind: <strong>${wind_kph}</strong> kmph`
        const precipFormatted = `Precip: <strong>${precip_mm}</strong> mm`
        const pressureFormatted = `Pressure: <strong>${pressure_mb}</strong> mb`

        return (
            <StyledPaper zDepth={1}>
                <StyledH2>{locationName}</StyledH2>
                <StyledWrapper>
                    <StyledInnerWrapper>
                        <StyledH1>{tempCFormatted}</StyledH1>
                    </StyledInnerWrapper>
                    <StyledInnerWrapperText>
                        <Icon icon={condition.icon} text={condition.text}/>
                        <StyledText>{condition.text}</StyledText>
                    </StyledInnerWrapperText>
                    <StyledInnerWrapperText>
                        <StyledText
                            dangerouslySetInnerHTML={{
                            __html: windFormatted
                        }}/>
                        <StyledText
                            dangerouslySetInnerHTML={{
                            __html: precipFormatted
                        }}/>
                        <StyledText
                            dangerouslySetInnerHTML={{
                            __html: pressureFormatted
                        }}/>
                    </StyledInnerWrapperText>
                </StyledWrapper>
                <ForecastList forecast={forecastday}/>
            </StyledPaper>
        )
    }
}

export default WeatherCard