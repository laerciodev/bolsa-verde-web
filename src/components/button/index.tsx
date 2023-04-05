import Button from '@mui/material/Button';
import Styles from './styles.module.scss'

function BaseButton() {
  return (
    <Button
      variant="contained"
      color="primary"
      fullWidth
      type="submit"
      color="success"
      className={Styles.button}
    >
      Entrar
    </Button>
  );
}

export default BaseButton;