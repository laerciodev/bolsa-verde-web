import NameInput from '@components/name-input';
import EmailInput from '@/components/email-input';
import PasswordInput from '@/components/password-input';
import BaseButton from '@/components/button';

const SignUp: React.FC  = () => {
  return (
    <div className='container-page'>
      <NameInput />
      <EmailInput />
      <PasswordInput />
      <PasswordInput confirmPasswordField />
      <BaseButton name="Cadastrar" />
    </div>
  );
}

export default SignUp;
