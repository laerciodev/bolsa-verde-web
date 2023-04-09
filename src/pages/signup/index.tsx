import { useState } from 'react';
import NameInput from '@components/name-input';
import EmailInput from '@/components/email-input';
import PasswordInput from '@/components/password-input';
import BaseButton from '@/components/button';
import { Snackbar } from '@mui/material';

const SignUp: React.FC  = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [openToast, setOpenToast] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string>('');
  
  function sendEmail(email: string) {
    setEmail(email);
  }

  function sendPassword(password: string) {
    setPassword(password);
  }

  function sendConfirmPassword(password: string) {
    setConfirmPassword(password);
  }

  const handleClose = () => {
    setOpenToast(false);
  };

  function submit() {
    if (!email || !password || !confirmPassword) {
      setOpenToast(true);
      setToastMessage('Preencha todos os campos');
      return;
    }

    if (password !== confirmPassword) {
      setOpenToast(true);
      setToastMessage('As senhas não conferem');
      return;
    }

    setOpenToast(true);
    setToastMessage('Cadastro realizado com sucesso');
  }

  return (
    <div className='container-page'>
      <NameInput />
      <EmailInput sendEmail={sendEmail} />
      <PasswordInput sendPassword={sendPassword} />
      <PasswordInput sendPassword={sendConfirmPassword} confirmPasswordField />
      <BaseButton
        name="Cadastrar"
        fullWidth
        onclick={submit}
      />
      <Snackbar
        open={openToast}
        autoHideDuration={3000}
        message={toastMessage}
        onClose={handleClose}
      />
    </div>
  );
}

export default SignUp;
