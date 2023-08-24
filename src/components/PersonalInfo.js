import axios from 'axios';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import UserContext from '../context/UserContext';

export default function PersonalInfo(params) {
	return (
		<>
			<InfoWrapper>
				<h1>Informações pessoais</h1>
				<img src="" alt="" />
				<h2>Nome:</h2>
				<h2>Sobrenome</h2>

				<h2>email</h2>
				<h2>Sobre mim</h2>
				<h2>linkedin</h2>
				<h2>twitter</h2>
				<h2>instagram</h2>
			</InfoWrapper>
		</>
	);
}

const InfoWrapper = styled.div`
	width: 326px;
	height: 446px;
	background-color: #ffffff;
	border-radius: 5px;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 25px 12px 10px 12px;
`;
