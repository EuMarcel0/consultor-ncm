import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Alert, AlertTitle } from '@material-ui/lab';
import style from './alertInput.module.css';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '50%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
  }),
);

export const AlertInput = () => {
    const classes = useStyles();
    return(
        <div className={style.root}>
            <Alert severity="warning">
                <AlertTitle><strong>Aviso</strong></AlertTitle>
                Por favor, insira algum valor na busca — <strong>Nome ou código de barras do produto</strong>
            </Alert>
    </div>
    );
}