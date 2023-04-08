import { useState } from 'react';
import EmailInput from '@/components/email-input';
import PasswordInput from '@/components/password-input';
import Button from '@/components/button';
import SignUpButton from '@/components/signup-button';

function Login() {

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  function sendPassword(password: string) {
    setPassword(password);
  }

  function sendEmail(email: string) {
    setEmail(email);
  }

  function submit() {
    if (!email || !password) {
      return;
    }

    if (email === 'user@email.com' && password === '123456') {
      console.log('login feito com sucesso');
    } else {
      console.log('usuário ou senha inválidos');
    }
  }

  return (
    <div className="container-page">
      <EmailInput sendEmail={sendEmail} />
      <PasswordInput sendPassword={sendPassword} />
      <Button
        name="Entrar"
        onclick={submit}
      />
      <SignUpButton />
    </div>
  )
}

export default Login;