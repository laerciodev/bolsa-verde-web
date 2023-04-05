import TextField from '@mui/material/TextField';

function PasswordInput() {
  return (
    <TextField
      label="Senha"
      variant="outlined"
      type="password"
      fullWidth
      margin="normal"
      required
    />
  );
}

export default PasswordInput;