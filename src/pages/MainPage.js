import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import UserContext from '../context/UserContext';
import PersonalInfo from '../components/PersonalInfo';
import axios from 'axios';

export default function MainPage() {
	const { user, baseUrl, userId, bearer } = useContext(UserContext);
	const [firstName, setFirstName] = useState('');
	const navigate = useNavigate();
	const url = `${baseUrl}/user-info/${userId}`;

	if (!user && !bearer) {
		return navigate('/');
	}

	useEffect(() => {
		const promise = axios
			.get(url)
			.then((res) => {
				console.log(res.data);
				setFirstName(res.data.firstName);
			})
			.catch((err) => {
				console.log(err.response.data);
			});
	}, []);

	function signOut() {
		// localStorage.removeItem('mwuser');
		// localStorage.removeItem('mwtoken');
		localStorage.clear();
		navigate('/');
	}

	return (
		<PageWrapper>
			<Title>
				<h1>Olá, {firstName}</h1>
				<ion-icon name="exit-outline" onClick={signOut}></ion-icon>
			</Title>
			<PersonalInfo />

			<BttnsWrapper>
				<AddEntryBttn
					onClick={() =>
						navigate('/edit-info', { state: { type: 'in' } })
					}
				>
					<h2>Editar informações</h2>
				</AddEntryBttn>
			</BttnsWrapper>
		</PageWrapper>
	);
}

export const PageWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 25px 25px 16px 25px;
	font-family: 'Raleway', sans-serif;
	min-height: 300px;
`;

export const Title = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 326px;
	margin-bottom: 22px;
	color: #ffffff;
	font-size: 26px;

	h1 {
		font-weight: 700;

		line-height: 31px;
	}
`;

export const BttnsWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 326px;
	margin-top: 13px;
`;

export const AddEntryBttn = styled.div`
	width: 155px;
	height: 50px;
	background-color: #1b1b1e;
	color: #ffffff;
	border-radius: 5px;
	font-weight: 700;
	padding: 10px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;

	ion-icon {
		font-size: 25px;
	}
	h2 {
		font-size: 17px;
		width: 64px;
	}
`;
