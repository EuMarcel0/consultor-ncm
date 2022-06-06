import style from './alertNoResults.module.css';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Alert, AlertTitle } from '@material-ui/lab';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            '& > * + *': {
                marginTop: theme.spacing(2),
            },
        },
    }),
);

export const AlertNoResults = () => {

    const classes = useStyles();

    return (
        <div className={style.root}>
            <Alert severity="error">
                <AlertTitle><strong>Erro</strong></AlertTitle>
                Nenhum resultado encontrado! — <strong>Verifique se o nome informado na busca está correto</strong>
            </Alert>
        </div>
    );
}