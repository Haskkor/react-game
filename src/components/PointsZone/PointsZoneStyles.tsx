import { colors } from "../../utils/colors";

import styled from "styled-components";

export const PointsZoneStyled = styled.div`
background-color: ${colors.greyOpacity};
border-radius: 10px;
border: 2px solid ${colors.grey};
padding: 20px;
display: flex;
align-items: center;
justify-content: center;
`
PointsZoneStyled.displayName = 'PointsZoneStyled'

export const TextZoneStyled = styled.div`
color: ${(props: {isCurrentPlayer: boolean}) =>props.isCurrentPlayer ? colors.blueGreen : colors.paleRed};
`
TextZoneStyled.displayName = 'TextZoneStyled'