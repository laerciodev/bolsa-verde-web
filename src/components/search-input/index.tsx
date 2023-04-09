import { FilledInput, InputAdornment, FormControl, InputLabel, IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';

function SearchInput() {
  return (
    <FormControl
      margin="normal"
      fullWidth
      variant="outlined">
      <InputLabel
        htmlFor="outlined-adornment-name"
        color="success"
      >
        Pesquisar
      </InputLabel>
      <FilledInput
        id="outlined-adornment-name"
        color="success"
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              edge="end"
              aria-label='Pesquisar por ação de empresa'
            >
              <Search />
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  );
}

export default SearchInput;
