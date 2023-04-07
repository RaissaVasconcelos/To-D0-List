import styled from "styled-components";

// interface PropsParagraph {
//   line: string
// }

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  padding: 64px 24px;

  img {
    width: 80px;
    height: 80px;
  }
`
export const Paragraph = styled.p`
  color: ${(props) => (props.theme['white'])};
  font-weight: bold;
`