import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import UserContext from '../context/UserContext';

export default function PersonalInfo(params) {
	const { userId, baseUrl } = useContext(UserContext);
	const [userInfo, setUserInfo] = useState({});

	const url = `${baseUrl}/user-info/${userId}`;

	useEffect(() => {
		const promise = axios
			.get(url)
			.then((res) => {
				setUserInfo(res.data);
			})
			.catch((err) => {
				console.log(err.response.data);
			});
	}, []);

	return (
		<>
			<InfoWrapper>
				<h1>Informações pessoais</h1>

				<InfoRow>
					<RowTitle>Foto</RowTitle>
					<RowContent>
						<img src={userInfo.imageUrl} alt="" />
					</RowContent>
				</InfoRow>

				<InfoRow>
					<RowTitle>Nome</RowTitle>
					<RowContent>{userInfo.firstName}</RowContent>
				</InfoRow>

				<InfoRow>
					<RowTitle>Sobrenome</RowTitle>
					<RowContent>{userInfo.lastName}</RowContent>
				</InfoRow>

				<InfoRow>
					<RowTitle>Email</RowTitle>
					<RowContent>{userInfo.email}</RowContent>
				</InfoRow>

				<InfoRow>
					<RowTitle>Sobre mim</RowTitle>
					<RowContent>{userInfo.bio}</RowContent>
				</InfoRow>

				<InfoRow>
					<RowTitle>linkedin</RowTitle>
					<RowContent>
						<a href={userInfo.linkedinUrl} target="_blank">
							{userInfo.linkedinUrl}
						</a>
					</RowContent>
				</InfoRow>

				<InfoRow>
					<RowTitle>instagram</RowTitle>
					<RowContent>
						<a href={userInfo.instagramUrl} target="_blank">
							{userInfo.instagramUrl}
						</a>
					</RowContent>
				</InfoRow>

				<InfoRow>
					<RowTitle>twitter</RowTitle>
					<RowContent>
						<a href={userInfo.twitterUrl} target="_blank">
							{userInfo.twitterUrl}
						</a>
					</RowContent>
				</InfoRow>
			</InfoWrapper>
		</>
	);
}

export const InfoWrapper = styled.div`
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

export const InfoRow = styled.div`
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	width: 90%;
	margin-bottom: 5px;
	align-items: center;
	text-align: center;
`;

export const RowTitle = styled.div`
	width: 100%;
	height: 30px;
	background-color: #96d6d3;
	font-weight: bold;
	border-radius: 5px 5px 0 0;
	padding: 4px;
	font-size: 18px;
`;
const RowContent = styled.div`
	width: 100%;
	background-color: #bfffdf;
	min-height: 30px;
	border-radius: 0 0 5px 5px;
	padding: 4px;
	font-size: 16px;

	a {
		text-decoration: none;
	}
	img {
		width: 100%;
	}
`;
