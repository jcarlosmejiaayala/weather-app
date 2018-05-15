import React from 'react'
import styled from 'styled-components'

import Forecast from 'components/Forecast'

const StyledSliderWrapper = styled.div `
    width: 100%;
    display: flex;
    position: absolute;
    bottom: 15px;
    overflow-x: auto;

    &::-webkit-scrollbar {
        display: none;
    }

    @media screen and (min-width: 600px) {
        width: auto;
        overflow-x: inherit;
        left: 50%;
        transform: translateX(-50%);
    }
`

const ForecastList = ({forecast}) => <StyledSliderWrapper>{forecast.map(item => <Forecast key={item.date_epoch} {...item}/>)}</StyledSliderWrapper>

export default ForecastList
