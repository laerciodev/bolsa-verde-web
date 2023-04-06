import { FormControl, InputLabel, FilledInput, InputAdornment, IconButton } from '@mui/material';
import { Email } from '@mui/icons-material';

function EmailInput() {
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
    </FormControl>
  );
}

export default EmailInput;
