import Button from '@mui/material/Button';
import Styles from './styles.module.scss';

interface BaseButtonProps {
  name: string;
  onclick?: () => void;
}

function BaseButton(props: BaseButtonProps) {
  return (
    <span style={{ margin: '16px 0', width: '100%' }}>
      <Button
        variant="contained"
        fullWidth
        type="submit"
        color="success"
        size="large"
        className={Styles.button}
        onClick={props.onclick}
      >
        { props.name }
      </Button>
    </span>
  );
}

export default BaseButton;