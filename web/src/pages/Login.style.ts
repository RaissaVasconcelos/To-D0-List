import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 2rem;
  border: 1px solid black;
  border-radius: 6px;
  background-color: ${(props) => props.theme['gray-400']}
`

export const Title = styled.h2`
  display: flex;
  justify-content: center;
  font-family: sans-serif;
  color: ${(props) => props.theme['white']};
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const Input = styled.input`
  cursor: text;
  font-size: 1rem;
  padding: 0.5rem;
  border-radius: 5px;
  border-bottom: 2px solid rgb(200, 200, 200);
  outline: 0;
`

export const Button = styled.button`
  margin-top: 0.5rem;
  padding: 0.5rem;
  background-color: ${(props) => props.theme['blue']};
  color: ${(props) => props.theme['white']};
  font-size: 1rem;
  font-weight: bold;
  border: 1px solid ${(props) => props.theme['gray-300']};
  border-radius: 6px;
  box-shadow: 3px 3px 3px ${(props) => props.theme['gray-300']};

  &:hover {
    background-color: ${(props) => props.theme['blue-dark']};
  }
`