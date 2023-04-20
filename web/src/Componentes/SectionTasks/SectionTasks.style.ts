import styled from "styled-components"


export const Section = styled.section`
  flex: display;
  flex-direction: column;
  position: absolute;
  gap: 5px;
  width: 736px;
  height: 451px;
  left: calc(50% - 736px/2);
  top: 291px;
`

export const ContentTasksDone = styled.div`
  height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const Content = styled(ContentTasksDone)`
  display: flex;
  flex-direction: row;
  gap: 8px;

  p {
    color: ${(props) => props.theme['blue']};
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
  }

  div {
    display: flex;
    justify-content: center;
    width: auto;
    padding: 2px 8px;
    height: 19px;
    background-color: ${(props) => props.theme['gray-400']};
    color: ${(props) => props.theme['gray-200']};
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
    border-radius: 999px;
  }
`
