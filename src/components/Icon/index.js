import React from 'react'
import styled from 'styled-components'

const StyledImg = styled.img `
    display: flex;
    margin-right: 10px;

    @media screen and (min-width: 600px) {
        margin: 0 auto;
    }
`

const Icon = ({icon, text}) => <StyledImg src={icon} alt={text}/>

export default Icon
