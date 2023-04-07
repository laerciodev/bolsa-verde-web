import Button from '@mui/material/Button';
import Styles from './styles.module.scss'

function BaseButton() {
  return (
    <span style={{ margin: '16px 0', width: '100%' }}>
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
    </span>
  );
}

export default BaseButton;