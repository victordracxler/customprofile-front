import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import UserContext from '../context/UserContext';
import { InfoRow, InfoWrapper, RowTitle } from './PersonalInfo';

export default function EditPersonalInfo(params) {
	const { userId, baseUrl } = useContext(UserContext);
	const [userInfo, setUserInfo] = useState({});

	const [imageUploaded, setImageUploaded] = useState('');

	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [bio, setBio] = useState('');
	const [email, setEmail] = useState('');
	const [linkedinUrl, setLinkedinUrl] = useState('');
	const [instagramUrl, setInstagramUrl] = useState('');
	const [twitterUrl, setTwitterUrl] = useState('');

	const navigate = useNavigate();

	const url = `${baseUrl}/user-info/${userId}`;

	useEffect(() => {
		const promise = axios
			.get(url)
			.then((res) => {
				console.log(res.data);
				setUserInfo(res.data);
				setFormValues(res.data);
			})
			.catch((err) => {
				console.log(err.response.data);
			});
	}, []);

	function setFormValues(data) {
		setFirstName(data.firstName);
		setLastName(data.lastName);
		setBio(data.bio);
		setEmail(data.email);
		setLinkedinUrl(data.linkedinUrl);
		setInstagramUrl(data.instagramUrl);
		setTwitterUrl(data.twitterUrl);
	}

	async function handleSubmit(e) {
		e.preventDefault();

		const formData = new FormData();

		formData.append('imageUploaded', imageUploaded);
		formData.append('firstName', firstName);
		formData.append('lastName', lastName);
		formData.append('email', email);
		formData.append('bio', bio);
		formData.append('linkedinUrl', linkedinUrl);
		formData.append('instagramUrl', instagramUrl);
		formData.append('twitterUrl', twitterUrl);

		const userNewInfo = {
			firstName,
			lastName,
			email,
			bio,
			linkedinUrl,
			instagramUrl,
			twitterUrl,
		};

		await axios
			.post(url, formData, {
				headers: { 'Content-Type': 'multipart/form-data' },
			})
			.then((res) => {
				console.log(res.data);
				navigate('/home');
			})
			.catch((err) => console.log(err));
	}

	return (
		<>
			<EditForm
				onSubmit={handleSubmit}
				action={url}
				method="POST"
				encType="multipart/form-data"
			>
				<h1>Informações pessoais</h1>

				<InfoRow>
					<RowTitle>Foto</RowTitle>
					<TextInput
						type="file"
						onChange={(e) => {
							setImageUploaded(e.target.files[0]);
						}}
					/>
				</InfoRow>

				<InfoRow>
					<RowTitle>Nome</RowTitle>
					<TextInput
						type="text"
						value={firstName}
						required
						onChange={(e) => setFirstName(e.target.value)}
					/>
				</InfoRow>

				<InfoRow>
					<RowTitle>Sobrenome</RowTitle>
					<TextInput
						type="text"
						value={lastName}
						onChange={(e) => setLastName(e.target.value)}
					/>
				</InfoRow>

				<InfoRow>
					<RowTitle>Email</RowTitle>
					<TextInput
						required
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</InfoRow>

				<InfoRow>
					<RowTitle>Sobre mim</RowTitle>
					<TextInput
						type="text"
						value={bio}
						maxLength="300"
						onChange={(e) => setBio(e.target.value)}
					/>
				</InfoRow>

				<InfoRow>
					<RowTitle>linkedin</RowTitle>
					<TextInput
						type="url"
						value={linkedinUrl}
						onChange={(e) => setLinkedinUrl(e.target.value)}
					/>
				</InfoRow>

				<InfoRow>
					<RowTitle>instagram</RowTitle>
					<TextInput
						type="url"
						value={instagramUrl}
						onChange={(e) => setInstagramUrl(e.target.value)}
					/>
				</InfoRow>

				<InfoRow>
					<RowTitle>twitter</RowTitle>
					<TextInput
						type="url"
						value={twitterUrl}
						onChange={(e) => setTwitterUrl(e.target.value)}
					/>
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

const SubmitChangesBttn = styled.button`
	font-family: 'Raleway', sans-serif;
	width: 100px;
	height: 40px;
`;
