import { Alert, AlertTitle } from '@mui/material';
import style from './alertInput.module.css';

export const AlertInput = () => {
    return(
        <div className={style.root}>
            <Alert severity="warning">
                <AlertTitle><strong>Aviso</strong></AlertTitle>
                Por favor, insira algum valor na busca — <strong>Nome ou código de barras do produto</strong>
            </Alert>
    </div>
    );
}