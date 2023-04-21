import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Container, Content, Form, Input, Title } from './Login.style'
import { api } from '../service/api';
import { useNavigate } from 'react-router-dom';

const InputSchema = z.object({
  name: z.string().min(3, { message: 'Required min 3 letters' }),
  password: z.string().min(3, { message: 'Required min 3 letters' })
})

type Inputs = z.infer<typeof InputSchema>

export default function Login() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({
    resolver: zodResolver(InputSchema),
  });

  const handleLogin = async (data: Inputs) => {
    try {
      const response = await api.post('/login', data)
      salveUser(response.data.name);
      navigate('/home');
      
    } catch (error: any) {
      alert(error.response.data.message)
    }
  }

  const salveUser = (user: string) => {
    localStorage.setItem('user', JSON.stringify(user));
  }

  return(
    <Container>
      <Content>
        <Title>Login</Title>
        <Form onSubmit={handleSubmit(handleLogin)}>
          <label htmlFor='id_name'>
            <Input 
              type='text'
              placeholder='name'
              id='id_name'
              required
              {...register('name')}
            />
            {errors.name?.message && <p>{errors.name?.message}</p>}
          </label>
          <label htmlFor='id_password'>
            <Input
              type='text'
              placeholder='password'
              id='id_password'
              required
              {...register('password')}
            />
            {errors.password?.message && <p>{errors.password?.message}</p>}
          </label>
          <Button type='submit'>Send</Button>
        </Form>
      </Content>
    </Container>
  );
};
