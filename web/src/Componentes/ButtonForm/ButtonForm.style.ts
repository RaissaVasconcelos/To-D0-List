import styled from 'styled-components'

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 1rem;
  gap: 0.5rem;
  background-color: ${(props) => props.theme['blue-dark']};
  color: #eee;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 8px;

  &:hover {
    background-color: ${(props) => props.theme['blue']};
  }
`