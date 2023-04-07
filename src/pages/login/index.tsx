import EmailInput from '@/components/email-input';
import PasswordInput from '@/components/password-input';
import Button from '@/components/button';
import SignUpButton from '@/components/signup-button';
import Styles from './styles.module.scss';

function Login() {

  return (
    <div className={Styles.container}>
      <EmailInput />
      <PasswordInput />
      <Button />
      <SignUpButton />
    </div>
  )
}

export default Login;