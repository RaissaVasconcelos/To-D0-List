import styled from "styled-components"

interface LabelProps {
  completed: boolean
}

export const Content = styled.div`
  width: auto;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  margin-top: 24px;
  background-color: ${(props) => props.theme['gray-500']};
  border: 1px solid ${(props) => props.theme['gray-400']};
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.06);
  border-radius: 8px;
`

export const Input = styled.input.attrs({ type: 'checkbox' })`
  appearance: none;
  width: 16px;
  height: 16px;
  border: 2px solid ${(props) => props.theme['blue']};
  border-radius: 50%;
  vertical-align: middle;

  &:checked {
    background-color: ${(props) => props.theme['purple']};
  }
  `

export const Label = styled.label<LabelProps>`
  display: flex;
  gap: 12px;
  width: auto;
  height: auto;
  padding: 5px 5px;
  color: ${(props) => props.theme['gray-100']};
  text-decoration: ${(props) => (props.completed ? 'line-through' : 'none')};
`

export const ButtonDelete = styled.button`
  background-color: transparent;
  border: none;

  img {
    width: 18px;
    height: 18px;
  }
`
