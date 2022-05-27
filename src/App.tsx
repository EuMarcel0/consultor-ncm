import { ChangeEvent, useState } from 'react'
import style from './App.module.css';
import { Button, Container, TextField } from '@material-ui/core';
import { Header } from './components/Header/header';

function App() {
	// Endpoint para requisição
	const BASE_URL = 'https://api.cosmos.bluesoft.com.br';

	const [searchBarItem, setBarrasItem] = useState('');
	const [item, setItem] = useState({
		description: '',
		image: '',
		gtin: '',
		gtinImage: '',
		ncm: {
			code: '',
			description: ''
		},
		cestCode: {
			code: '',
			description: ''
		},
		gpc: {
			code: '',
			description: ''
		},
		dateAtualization: '',
		origin: '',
		maxPrice: '',
		minPrice: '',
		avgPrice: '',
		price: ''
	})

	const handleInputArea = (e: ChangeEvent<HTMLInputElement>) => {
		setBarrasItem(e.target.value);
	}

	// Fazendo requisição para o servidor do COSMOS NCM

	const handleSearcheItem = async () => {
		let response = await fetch(`${BASE_URL}/gtins/${searchBarItem}.json`, {
			headers: {
				'Content-Type': 'application/json',
				'X-Cosmos-Token': 'K1-bSevW2CDAGQf3jXCnGw',
				'User-Agent': 'Cosmos-API-Request'
			}
		})
		let data = await response.json();

		//  STATES PARA ARMAZENAR OS DADOS DO OBJETO RETORNADO DA REQUISIÇÃO
		setItem(data)
	}

	return (
		<>
			<Header />
			<div className={style.mainFullArea}>
				<Container>
					<div className={style.searchInput}>
						<h1>Consulte o NCM do seu produto:</h1>
						<form className={style.root}
							noValidate 
							autoComplete="off"
							onSubmit={e => e.preventDefault()}>
							<TextField
								className={style.inputArea}
								id="filled-secondary"
								label="Informe o código de barras do produto"
								fullWidth
								color="primary"
								onChange={handleInputArea}
							/>
						</form>
						<Button
							variant="contained"
							size="medium"
							className={style.margin}
							onClick={handleSearcheItem}
							color='secondary'
							>
							Buscar
						</Button>
					</div>
					<div>{item.description}</div>
				</Container>
			</div>
		</>
	);
}

export default App
