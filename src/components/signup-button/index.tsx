import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const SignUpButton = () => {

  const navigate = useNavigate();

  function handleClick() {
    navigate('/signup');
  }

  return (
    <span style={{ margin: '16px 0' }}>
      <Button
        className="button"
        variant="text"
        color="primary"
        size="small"
        onClick={handleClick}
      >
        Criar conta
      </Button>
    </span>
  )
}

export default SignUpButton;