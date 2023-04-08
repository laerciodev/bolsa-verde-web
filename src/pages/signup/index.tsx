import NameInput from '@components/name-input';
import EmailInput from '@/components/email-input';
import PasswordInput from '@/components/password-input';

const SignUp: React.FC  = () => {
  return (
    <div className='container-page'>
      <NameInput />
      <EmailInput />
      <PasswordInput />
      <PasswordInput />
    </div>
  );
}

export default SignUp;
