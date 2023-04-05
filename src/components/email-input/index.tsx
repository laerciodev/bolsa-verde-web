import TextField from '@mui/material/TextField';

function EmailInput() {
  return (
    <TextField
      label="Email"
      variant="outlined"
      type="email"
      fullWidth
      margin="normal"
      required
    />
  );
}

export default EmailInput;
