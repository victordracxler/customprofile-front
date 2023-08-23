import { useNavigate } from 'react-router-dom';
import SignUpForm from '../components/SignUpForm';
import { LogoTitle, SignUpLink } from './SignInPage';

export default function SignUpPage() {
	const navigate = useNavigate();
	return (
		<>
			<LogoTitle>MyWallet</LogoTitle>
			<SignUpForm />

			<SignUpLink onClick={() => navigate('/')}>
				Já tem uma conta? Entre agora!
			</SignUpLink>
		</>
	);
}
