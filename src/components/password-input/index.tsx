import { useState } from 'react';
import { FormControl, InputLabel, FilledInput, InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

function PasswordInput() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const validatePassword = (password: string): string => {
    if (!password) {
      return 'Senha é obrigatória';
    }

    if (password.length < 6) {
      return 'Senha deve ter no mínimo 6 caracteres';
    }

    return '';
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setError(validatePassword(event.target.value))
  }


  return (
    <FormControl
      margin="normal"
      fullWidth
      variant="outlined">
      <InputLabel
        htmlFor="outlined-adornment-password"
        color="success"
      >
        Password
      </InputLabel>
      <FilledInput
        id="outlined-adornment-password"
        type={showPassword ? 'text' : 'password'}
        onChange={handleChange}
        color="success"
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
      />
      { error !== '' && <p className='error'>{ error }</p>}
    </FormControl>
  );
}

export default PasswordInput;