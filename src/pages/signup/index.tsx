import { useState, ChangeEvent } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import NameInput from '@components/name-input';
import EmailInput from '@/components/email-input';
import PasswordInput from '@/components/password-input';
import BaseButton from '@/components/button';
import { Snackbar } from '@mui/material';


const SignUp: React.FC  = () => {
  const [page, changePage] = useState<string>('user');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [openToast, setOpenToast] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string>('');
  
  function handleChange(value: ChangeEvent<HTMLInputElement>) {
    changePage(value.target.value);
  }

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
      <FormControl fullWidth>
        <FormLabel id="demo-row-radio-buttons-group-label" color='success'>
          Escolha uma opção:
        </FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          <FormControlLabel value="user" control={<Radio color='success' onChange={handleChange}/>} label="Usuário" />
          <FormControlLabel value="company" control={<Radio color='success' onChange={handleChange} />} label="Empresa" />
        </RadioGroup>
      </FormControl>
      <NameInput
        name={page === 'user' ? 'Nome completo' : 'Nome fantasia'}
        ariaLabel={page === 'user' ? 'Digitar nome completo do usuário' : 'Digitar nome fantasia da empresa'}
      />
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
