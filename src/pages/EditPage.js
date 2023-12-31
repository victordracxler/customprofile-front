import { useNavigate } from 'react-router-dom';
import { AddEntryBttn, BttnsWrapper, PageWrapper, Title } from './MainPage';
import EditPersonalInfo from '../components/EditPersonalInfo';

export default function EditPage(params) {
	const navigate = useNavigate();
	return (
		<PageWrapper>
			<Title>
				<h1>Edite seus dados</h1>
			</Title>

			<EditPersonalInfo />

			<BttnsWrapper>
				<AddEntryBttn
					onClick={() => navigate('/home', { state: { type: 'in' } })}
				>
					<h2>Cancelar</h2>
				</AddEntryBttn>
			</BttnsWrapper>
		</PageWrapper>
	);
}
