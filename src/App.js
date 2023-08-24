import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import GlobalStyle from './GlobalStyle';
import MainPage from './pages/MainPage';

import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import EditPage from './pages/EditPage';

export default function App() {
	return (
		<UserProvider>
			<BrowserRouter>
				<GlobalStyle />
				<Routes>
					<Route path="/" element={<SignInPage />} />
					<Route path="/cadastro" element={<SignUpPage />} />
					<Route path="/home" element={<MainPage />} />
					<Route path="/edit-info" element={<EditPage />} />
				</Routes>
			</BrowserRouter>
		</UserProvider>
	);
}
