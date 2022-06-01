import { ChangeEvent, useState, useEffect } from 'react'
import style from './App.module.css';
import { Button, Container, Divider, TextField } from '@material-ui/core';
import { Header } from './components/Header/header';
import { FaSearch } from 'react-icons/fa';
import  DetailsAccordion from './components/Details/details'
import noImage from './assets/images/no_image.png';
import { Item } from './Types';


function App() {
	// Endpoint para requisição
	const BASE_URL = 'https://api.cosmos.bluesoft.com.br/products?query=';
	

	const [searchItem, setBarrasItem] = useState('');
	const [items, setItems] = useState<Item[]>([]);

	const imageNotFound = noImage;

	const handleInputArea = (e: ChangeEvent<HTMLInputElement>) => {
		setBarrasItem(e.target.value);
	}

	// Requisição para o servidor do COSMOS NCM

	const handleSearchItem = async () => {
		let response = await fetch(`${BASE_URL}${searchItem}`, {
			headers: {
				'Content-Type': 'application/json',
				'X-Cosmos-Token': 'HeCelp4qdoKSY8oORf-7uQ',
				'User-Agent': 'Cosmos-API-Request'
			}
		})
		
		let data = await response.json();
		setItems(data.products)
	}
	useEffect(() => {
		console.log(items);
	}, [items])

	return (
		<>
			<Header />
			<div className={style.mainFullArea}>
				<Container>
					<div className={style.searchInput}>
						<div className={style.searcheTextAndIcon}>
							<h1>Consulte o NCM do seu produto</h1>
							<FaSearch />
						</div>
						<form 
							className={style.root}
							noValidate 
							autoComplete="off"
							onSubmit={e => e.preventDefault()}
						>
							<TextField
								className={style.inputArea}
								id="filled-secondary"
								label="Informe o nome ou o código de barras do item. Ex: Arroz"
								fullWidth
								color="primary"
								onChange={handleInputArea}
							/>
						</form>
						<Button
							variant="contained"
							size="medium"
							className={style.margin}
							onClick={handleSearchItem}
							color='secondary'
						>
							Buscar
						</Button>
					</div>
					<div className={style.itemsContainer}>
						{items.map((item) => (
							<div key={item.gtin} className={style.itemsInfos}>
								<div className={style.itemsImage}>
									{item.description? <img src={item.thumbnail? item.thumbnail : imageNotFound} alt="imagem_produto" /> : ''}
								</div>
								<div className={style.itemsDetails}>
									<div className={style.itemDescription}>{ item.description? 'Descrição: ' + item.description : ''}</div>
									<div className={style.itemNcmCode}>{ item.ncm.code? 'NCM: ' + item.ncm.code : ''}</div>
									<div className={style.itemNcmDescription}>{ item.ncm.full_description? 'Descrição NCM: ' + item.ncm.full_description : ''}</div>
									<div>{item.description? <DetailsAccordion details={items}/> : ''}</div>
								</div>
							</div>
						))}
					</div>
				</Container>
			</div>
		</>
	);
}

export default App
