import { useState } from 'react';
import { FormControl, InputLabel, FilledInput, InputAdornment, IconButton } from '@mui/material';
import { Email } from '@mui/icons-material';

interface EmailInputProps {
  sendEmail: (email: string) => void;
}

function EmailInput(props: EmailInputProps) {
  const [email, setEmail] = useState<string>('');
  const [error, setError] = useState<string>('');

  const validateEmail = (email: string): string => {
    const regex = /\S+@\S+\.\S+/;

    if (!email) {
      return 'E-mail é obrigatório';
    }

    if (!regex.test(email)) {
      return 'E-mail inválido';
    }

    return '';
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    setError(validateEmail(event.target.value));
    props.sendEmail(event.target.value);
  };

  return (
    <FormControl
      margin="normal"
      fullWidth
      variant="outlined">
      <InputLabel
        htmlFor="outlined-adornment-email"
        color="success"
      >
        E-mail
      </InputLabel>
      <FilledInput
        id="outlined-adornment-email"
        color="success"
        onChange={handleChange}
        value={email}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              edge="end"
            >
              <Email />
            </IconButton>
          </InputAdornment>
        }
      />
      { error !== '' && <p className='error'>{ error }</p>}
    </FormControl>
  );
}

export default EmailInput;
