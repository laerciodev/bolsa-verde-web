import Styles from './styles.module.scss';

type ButtonProps = {
  onClick?: () => void;
  disabled?: boolean;
  text: string;
}

function Button({ onClick, disabled, text }: ButtonProps) {
  return (
    <button 
      className={Styles.button} 
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
}

export default Button;