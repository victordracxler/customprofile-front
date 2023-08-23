import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import SignInForm from '../components/SignInForm';
import UserContext from '../context/UserContext';

export default function SignInPage() {
	const navigate = useNavigate();
	const { user, bearer } = useContext(UserContext);

	if (user && bearer) {
		navigate('/home');
	}

	return (
		<>
			<LogoTitle>MyCustomProfile</LogoTitle>
			<SignInForm />

			<SignUpLink onClick={() => navigate('/cadastro')}>
				Primeira vez? Cadastre-se!
			</SignUpLink>
		</>
	);
}

// font-family: 'Raleway', sans-serif;
// font-family: 'Saira Stencil One', cursive;

export const LogoTitle = styled.h1`
	font-family: 'Raleway';
	font-size: 32px;
	font-weight: 400;
	color: #ffffff;
	text-align: center;
	margin-top: 159px;
	margin-bottom: 24px;
`;

export const SignUpLink = styled.h2`
	font-family: 'Raleway', sans-serif;
	font-size: 15px;
	color: #ffffff;
	font-weight: 700;
	text-align: center;
	margin-top: 36px;
`;
