import { useState } from 'react';
import { FormControl, InputLabel, FilledInput, InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

function PasswordInput() {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

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
    </FormControl>
  );
}

export default PasswordInput;