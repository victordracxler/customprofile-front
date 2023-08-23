import { createContext, useState } from 'react';

const UserContext = createContext();

function UserProvider({ children }) {
	const [user, setUser] = useState(
		localStorage.getItem('mwuser')
			? JSON.parse(localStorage.getItem('mwuser'))
			: undefined
	);

	const [bearer, setBearer] = useState(
		localStorage.getItem('mwtoken')
			? JSON.parse(localStorage.getItem('mwtoken'))
			: undefined
	);

	const baseUrl = 'http://localhost:5000';

	return (
		<UserContext.Provider
			value={{
				user,
				setUser,
				bearer,
				setBearer,
				baseUrl,
			}}
		>
			{children}
		</UserContext.Provider>
	);
}

export default UserContext;

export { UserProvider };
