import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as S from './styles';

import { ThemeName } from '../../styles/themes';

interface Props {
	themeName: ThemeName;
	setThemeName: (newName: ThemeName) => void;
}

const Header: React.FC<Props> = ({ themeName, setThemeName }) => {
	const [search, setSearch] = useState('');
	const navigate = useNavigate();

	function handleSubmit(event: React.FormEvent) {
		event.preventDefault();

		navigate('/' + search.toLowerCase().trim());
	}

	function toggleTheme() {
		setThemeName(themeName === 'light' ? 'dark' : 'light');
	}

	return (
		<S.Container>
			<S.GithubLogo onClick={toggleTheme} />
			<S.SearchForm onSubmit={handleSubmit}>
				<input
					placeholder="Enter Username or Repository"
					value={search}
					onChange={(e) => setSearch(e.currentTarget.value)}
				/>
			</S.SearchForm>
		</S.Container>
	);
};

export default Header;
