import list from '../../../public/list.svg'
import { Container, Paragraph } from './NoneTask.style'

export function NoneTask(){
  return (
    <Container>
      <img src={list} alt="icone de lista de tarefas" />
      <Paragraph>Você ainda não tem tarefas cadastradas</Paragraph>
      <Paragraph>Crie tarefas e organize seus itens a fazer</Paragraph>
    </Container>
  )
}