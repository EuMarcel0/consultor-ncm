import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React from 'react';
import { Item } from '../../Types';
import style from './details.module.css';
import Barcode from '../../assets/images/barcode.png';

const imageBarcodeNotFound = Barcode;


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
        },
        heading: {
            fontSize: theme.typography.pxToRem(15),
            flexBasis: '33.33%',
            flexShrink: 0,
        },
        secondaryHeading: {
            fontSize: theme.typography.pxToRem(15),
            color: theme.palette.text.secondary,
        },
    }),
);

type DetailsProps = {
    details: Item;
}


export default function DetailsAccordion({details} : DetailsProps) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState<string | false>(false);

    const handleChange = (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
    };

    let updateYear = new Date(details.updated_at);
    let updateMonth = new Date(details.updated_at);
    let updateDay = new Date(details.updated_at);

    return (
        <div className={style.root}>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} className={style.accordionDetails}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography className={style.heading}>Mais detalhes</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <div className={style.detailsContainer}>
                                <div key={details.barcode_image} className={style.itemDetailsArea}>
                                    <div className={style.itemGtinCode}>
                                        {details.gtin? 'Código de barras: '+details.gtin : ''}
                                    </div>
                                     <div className={style.itemGpcCode}>
                                        {details.cest === undefined? '' : 'Código GPC: '+details.cest.code}
                                    </div>
                                     <div className={style.itemGpcDescription}>
                                        {details.cest === undefined? '' : 'Descrição código GPC: '+details.cest.description}
                                    </div>
                                    <div className={style.itemPrice}>
                                        {details.price? 'Preço: '+details.price : ''}
                                    </div>
                                    <div className={style.itemAveragePrice}>
                                        {details.avg_price? 'Preço médio: '+ 'R$ '+details.avg_price : ''}
                                    </div>
                                    <div className={style.itemPriceMinMax}>
                                        {details.min_price && details.max_price?
                                        'Preço mínimo e máximo: '+'R$ '+details.min_price+
                                        ' <-> '+'R$ '+details.max_price : '' }
                                    </div>
                                    <div className={style.itemDateUpdated}>
                                        {details.updated_at && 
                                            <span className={style.itemDateUpdateSpan}>Data atualização: </span>}
                                        {updateDay.getDay() < 10? '0'+updateDay.getDay()+'-' : ''}
                                        {updateMonth.getMonth() < 10? '0'+updateMonth.getMonth()+'-' : ''}
                                        {updateYear.getFullYear()}
                                    </div>
                                    <div className={style.itemDataOrigin}>
                                        {details.origin? 'Fonte dos dados: '+details.origin : ''}
                                    </div>
                                    <div className={style.itemBarCodeImage}>
                                        <img src={details.barcode_image} alt="" />
                                    </div>
                                </div>
                        </div>
                    </Typography>
                </AccordionDetails>
            </Accordion>

        </div>
    );
}
