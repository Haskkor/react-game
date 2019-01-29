import { grid } from "../../utils/grid";
import { IStyledTile } from "./Tile";

import styled from "styled-components";

export const StyledContainerTile = styled.div`
width: ${(props: {size: number}) => props.size}px;
height: ${(props: {size: number}) => props.size}px;
justify-content: center;
align-items: center;
display: flex;
`
StyledContainerTile.displayName = 'StyledContainerTile'

export const StyledTile = styled.div`
width: ${(props: IStyledTile) => props.size}px;
height: ${(props: IStyledTile) => props.size}px;
background-color: rgba(255, 255, 255, 0);
border: 1px solid ${(props: IStyledTile) => props.borderColor};
&:hover {
background: ${(props: IStyledTile) => props.hoverColor + grid.lowOpacity * 100};
}
`
StyledTile.displayName = 'StyledTile'
