import Button from '@mui/material/Button';
import Styles from './styles.module.scss'

function BaseButton() {
  return (
    <Button
      variant="contained"
      fullWidth
      type="submit"
      color="success"
      size="large"
      className={Styles.button}
    >
      Entrar
    </Button>
  );
}

export default BaseButton;