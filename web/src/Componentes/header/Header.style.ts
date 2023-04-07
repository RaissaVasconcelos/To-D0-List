import styled from "styled-components"

export const Content = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme['gray-700']};
  position: absolute;
  height: 200px;
  width: 100%;
  top: 0;
`

export const Image = styled.img`
  width: 126px;
  height: 48px;
`