import React from 'react'
import styled from 'styled-components'

import Icon from 'components/Icon'
import {getShortDayName} from 'lib/helpers'
import StyledText from 'styled/StyledText'

const StyledWrapper = styled.div `
    width: 100px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    &:not(:last-child){
        border-right: 1px solid #878787;
    }

    &:last-child{
        padding-right: 15px;
    }
`

const Forecast = ({
    date,
    day: {
        condition,
        avgtemp_c
    }
}) => (
    <StyledWrapper>
        <StyledText>{getShortDayName(date)}</StyledText>
        <Icon icon={condition.icon} text={condition.text}/>
        <StyledText>{avgtemp_c}
            °</StyledText>
    </StyledWrapper>
)

export default Forecast