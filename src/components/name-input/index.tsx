import { useState } from 'react';
import { FormControl, InputLabel, FilledInput, InputAdornment, IconButton } from '@mui/material';
import { Person } from '@mui/icons-material';

function NameInput() {
  const [name, setName] = useState<string>('');
  const [error, setError] = useState<string>('');

  const validateName = (name: string): string => {
    if (!name) {
      return 'Nome é obrigatório';
    }

    return '';
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
    setError(validateName(event.target.value));
  };

  return (
    <FormControl
      margin="normal"
      fullWidth
      variant="outlined">
      <InputLabel
        htmlFor="outlined-adornment-name"
        color="success"
      >
        Nome completo
      </InputLabel>
      <FilledInput
        id="outlined-adornment-name"
        color="success"
        onChange={handleChange}
        value={name}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              edge="end"
            >
              <Person />
            </IconButton>
          </InputAdornment>
        }
      />
      { error !== '' && <p className='error'>{ error }</p>}
    </FormControl>
  );
}

export default NameInput;
