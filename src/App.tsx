import { ChangeEvent, useState, useEffect, createElement, useRef } from 'react';
import style from './App.module.css';
import { Button, Container, Divider, TextField } from '@mui/material';
import { Header } from './components/Header/header';
import DetailsAccordion from './components/Details/details'
import noImage from './assets/images/no_image.png';
import { Item } from './Types';
import { Spin } from './components/SpinLoad/spind';
import { AlertInput } from './components/AlertInput/alertInput';
import ScrollToTop from 'react-scroll-to-top';
import { Footer } from './components/Footer/footer';
import { AlertNoResults } from './components/AlertNoResults/alertNoResult';
import { BsSearch } from 'react-icons/bs';
import  ArrowTop  from './assets/images/arrow.png';


function App() {
	// Endpoint para requisição

	const BASE_URL = 'https://api.cosmos.bluesoft.com.br/products?query=';

	const [loading, setLoading] = useState(false);
	const [clearResult, setClearResult] = useState(false);
	const [alertInput, setAlertInput] = useState(false);
	const [alertNoResult, setAlertNoResult] = useState(false);
	const [lengthCount , setLengthCount] = useState(false);

	const [searchItem, setSearchItem] = useState('');
	const [items, setItems] = useState<Item[]>([]);

	const imageNotFound = noImage;

	const handleInputArea = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchItem(e.target.value);
	}

	// Requisição para o servidor do COSMOS NCM

	const handleSearchItem = async () => {
		if (searchItem === '') {
			setAlertInput(true)
			setAlertNoResult(false)
		} else {
			setLoading(true)
			let response = await fetch(`${BASE_URL}${searchItem}`, {
				headers: {
					'Content-Type': 'application/json',
					'X-Cosmos-Token': 'K1-bSevW2CDAGQf3jXCnGw',
					'User-Agent': 'Cosmos-API-Request'
				}
			})
			setLoading(false);
			setClearResult(true);
			setAlertInput(false);
			setAlertNoResult(false);
			let data = await response.json();
			setItems(data.products);
			if(data.total_count === 0){
				setAlertNoResult(true);
				setClearResult(false);
				setLengthCount(false);
			}else if(data.total_count > 5){
				setLengthCount(true);
			}else{
				setAlertNoResult(false);
				setClearResult(true);
			}
			
		}
	}

	const handleEnterSearchItem = (event: React.KeyboardEvent<HTMLInputElement>) => {	
		if(event.code === 'Enter' || event.code === 'NumpadEnter') {
			handleSearchItem()
		}
	}

	const handleClearResults = () => {
		setItems([]);
		setClearResult(false);
		setLengthCount(false);
	}


	return (
		<>
			<Header />
			<div className={style.mainFullArea}>
				<Container className={style.container}>
					<div className={style.searchInput}>
						<div className={style.searcheTextAndIcon}>
							<h1>Consulte o NCM do seu produto</h1>
							<BsSearch />
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
								fullWidth={true}
								color="primary"
								onChange={handleInputArea}
								onKeyUp={handleEnterSearchItem}
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
						{alertInput &&
							<AlertInput />
						}
						{alertNoResult &&
							<AlertNoResults />
						}
						{clearResult &&
							<Button
								variant="contained"
								size="medium"
								className={style.buttonClear}
								onClick={handleClearResults}
								color='secondary'
							>
								Limpar
							</Button>
						}
					</div>
					<div className={style.itemsContainer}>
						{loading &&
							<div className={style.loading}>
								<Spin />
							</div>
						}
						{items.map((item) => (
							<>
								<div key={item.gtin} className={style.itemsInfos}>
									<div className={style.itemsImage}>
										{item.description ? <img src={item.thumbnail ? item.thumbnail : imageNotFound} alt="imagem_produto" /> : ''}
									</div>
									<div className={style.itemsDetails}>
										<div className={style.itemDescription}>
											{item.description &&
												<span>Descrição: </span>}
											{item.description}
										</div>
									</div>
									<div className={style.itemNcmCode}>
										{item.ncm.code &&
											<span>NCM: </span>}
										{item.ncm.code}
									</div>
									<div>
										{item.description ? <DetailsAccordion details={item} /> : ''}
									</div>
								</div>
							</>
						))}
						{lengthCount &&
							<div className={style.clearResults}>
								<Button
									variant="contained"
									size="medium"
									className={style.buttonClear}
									onClick={handleClearResults}
									color='secondary'
								>
									Limpar
								</Button>
							</div>
						}
					</div>
				</Container>
				<ScrollToTop className={style.scrollToTop}
					color="white"
					width="100%"
					smooth
					top={200}
				/>
				<Footer />
			</div>
		</>
	);
}

export default App
