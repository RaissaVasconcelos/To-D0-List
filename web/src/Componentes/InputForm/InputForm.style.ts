import styled from "styled-components"

export const Section = styled.section`
  top: 170px;
  position: absolute;
  z-index: 1;
`

export const Form = styled.form`
  display: flex;
  align-items: baseline;
  gap: 5px;
`

export const InputText = styled.input`
  cursor: text;
  font-size: 1rem;
  padding: 1rem;
  font-weight: bold;
  width: 638px;
  height: 64px;
  background-color: ${(props) => props.theme['gray-500']};
  border: 1px solid ${(props) => props.theme['gray-700']};
  border-radius: 8px;
  color: ${(props) => props.theme['gray-300']};
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
`
