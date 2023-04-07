// Componente Controller vincula cada campo do formulario a uma entrada de dados especificos
// import { Controller, Control } from 'react-hook-form'
import { Button } from './ButtonForm.style'
import plus from '../../../public/plus.svg'

export const ButtonForm = () => (
      <Button type='submit'>
        Criar
        <img src={plus} alt="plus"/>
      </Button>
)
