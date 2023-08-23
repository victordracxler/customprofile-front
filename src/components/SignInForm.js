import axios from 'axios';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import UserContext from '../context/UserContext';

export default function SignInForm() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const navigate = useNavigate();

	const { setBearer, setUser, baseUrl } = useContext(UserContext);

	function handleSignIn(e) {
		e.preventDefault();

		const url = `${baseUrl}/sign-in`;

		const body = {
			email: email,
			password: password,
		};

		const promise = axios
			.post(url, body)
			.then((res) => {
				console.log(res.data);
				const newBearer = `Bearer ${res.data.token}`;

				setBearer(newBearer);
				localStorage.setItem('mcptoken', JSON.stringify(newBearer));
				setUser(res.data.username);
				localStorage.setItem(
					'mcpuser',
					JSON.stringify(res.data.username)
				);
				navigate('/home');
			})
			.catch((err) => {
				console.log(err.response.data);
			});
	}

	return (
		<>
			<FormWrapper onSubmit={handleSignIn}>
				<FormInput
					type="email"
					placeholder="E-mail"
					required
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>

				<FormInput
					type="password"
					placeholder="Senha"
					required
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<FormBttn type="submit">Entrar</FormBttn>
			</FormWrapper>
		</>
	);
}

export const FormWrapper = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	font-family: 'Raleway', sans-serif;
`;

export const FormInput = styled.input`
	width: 326px;
	height: 58px;
	background-color: #ffffff;
	border: none;
	border-radius: 5px;
	padding: 15px;
	font-size: 20px;
	font-weight: 400;
	margin-bottom: 13px;
`;

export const FormBttn = styled.button`
	width: 326px;
	height: 46px;
	background-color: #1b1b1e;
	border: none;
	border-radius: 5px;
	color: #ffffff;
	font-size: 20px;
	font-weight: 700;
`;
