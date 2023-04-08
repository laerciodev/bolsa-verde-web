import { useState } from 'react';
import EmailInput from '@/components/email-input';
import PasswordInput from '@/components/password-input';
import Button from '@/components/button';
import SignUpButton from '@/components/signup-button';
import { Snackbar } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Login() {

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [openToast, setOpenToast] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string>('');
  const navigate = useNavigate();

  function sendPassword(password: string) {
    setPassword(password);
  }

  function sendEmail(email: string) {
    setEmail(email);
  }

  const handleClose = () => {
    setOpenToast(false);
  };

  function submit() {
    if (!email || !password) {
      return;
    }

    if (email === 'user@email.com' && password === '123456') {
      navigate('/dashboard');
    } else {
      setOpenToast(true);
      setToastMessage('Usuário ou senha inválidos');
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
      <Snackbar
        open={openToast}
        autoHideDuration={3000}
        message={toastMessage}
        onClose={handleClose}
      />
    </div>
  )
}

export default Login;