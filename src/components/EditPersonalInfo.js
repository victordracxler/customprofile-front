import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import UserContext from '../context/UserContext';
import { InfoRow, InfoWrapper, RowTitle } from './PersonalInfo';

export default function EditPersonalInfo(params) {
	const { userId, baseUrl } = useContext(UserContext);
	const [userInfo, setUserInfo] = useState({});

	const url = `${baseUrl}/user-info/${userId}`;

	useEffect(() => {
		const promise = axios
			.get(url)
			.then((res) => {
				console.log(res.data);
				setUserInfo(res.data);
			})
			.catch((err) => {
				console.log(err.response.data);
			});
	}, []);

	function handleSubmit(e) {
		e.preventDefault();
		// const entry = {
		// 	type,
		// 	amount,
		// 	description,
		// };

		// axios
		// 	.post(url, entry, { headers })
		// 	.then((res) => {
		// 		console.log(res.data);
		// 		navigate('/home');
		// 	})
		// 	.catch((err) => {
		// 		console.log(err.response);
		// 	});
	}

	return (
		<>
			<EditForm onSubmit={handleSubmit}>
				<h1>Informações pessoais</h1>

				<InfoRow>
					<RowTitle>Foto</RowTitle>
					<TextInput type="file" />
				</InfoRow>

				<InfoRow>
					<RowTitle>Nome</RowTitle>
					<TextInput type="text" placeholder={userInfo.firstName} />
				</InfoRow>

				<InfoRow>
					<RowTitle>Sobrenome</RowTitle>
					<TextInput type="text" placeholder={userInfo.lastName} />
				</InfoRow>

				<InfoRow>
					<RowTitle>Email</RowTitle>
					<TextInput type="text" placeholder={userInfo.email} />
				</InfoRow>

				<InfoRow>
					<RowTitle>Sobre mim</RowTitle>
					<TextInput type="text" placeholder={userInfo.bio} />
				</InfoRow>

				<InfoRow>
					<RowTitle>linkedin</RowTitle>
					<TextInput type="text" placeholder={userInfo.linkedinUrl} />
				</InfoRow>

				<InfoRow>
					<RowTitle>instagram</RowTitle>
					<TextInput
						type="text"
						placeholder={userInfo.instagramUrl}
					/>
				</InfoRow>

				<InfoRow>
					<RowTitle>twitter</RowTitle>
					<TextInput type="text" placeholder={userInfo.twitterUrl} />
				</InfoRow>

				<SubmitChangesBttn type="submit">
					Atualizar dados
				</SubmitChangesBttn>
			</EditForm>
		</>
	);
}

const TextInput = styled.input`
	width: 100%;
	background-color: #bfffdf;
	min-height: 30px;
	border-radius: 0 0 5px 5px;
	padding: 4px;
	font-size: 16px;
`;

const EditForm = styled.form`
	width: 326px;
	min-height: 446px;
	background-color: #ffffff;
	border-radius: 5px;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 12px 12px 10px 12px;
	font-family: 'Raleway', sans-serif;

	h1 {
		font-size: 22px;
		font-weight: bold;
		margin-bottom: 15px;
	}
`;

const SubmitChangesBttn = styled.button``;
