import EmailInput from '@/components/email-input';
import PasswordInput from '@/components/password-input';
import Button from '@/components/button';
import SignUpButton from '@/components/signup-button';

function Login() {

  return (
    <div className="container-page">
      <EmailInput />
      <PasswordInput />
      <Button />
      <SignUpButton />
    </div>
  )
}

export default Login;