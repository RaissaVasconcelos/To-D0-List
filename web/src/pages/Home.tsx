import { Container } from './Home.style'
import { Header, InputForm, SectionTasks } from '../Componentes'


export default function Home() {
  return (
    <Container>
      <Header />
      <InputForm/>
      <SectionTasks/>
    </Container>
  )
}
