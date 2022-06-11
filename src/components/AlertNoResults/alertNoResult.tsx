import style from './alertNoResults.module.css';
import { Alert, AlertTitle } from '@mui/material';


export const AlertNoResults = () => {
    return (
        <div className={style.root}>
            <Alert severity="error">
                <AlertTitle><strong>Erro</strong></AlertTitle>
                Nenhum resultado encontrado! — <strong>Verifique se o nome informado na busca está correto</strong>
            </Alert>
        </div>
    );
}