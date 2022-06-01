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
    details: Item[];
}


export default function DetailsAccordion({details} : DetailsProps) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState<string | false>(false);

    const handleChange = (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className={style.root}>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography className={classes.heading}>Mais detalhes</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <div className={style.detailsContainer}>{
                            details.map((item) => (
                                <div key={item.barcode_image} className={style.itemDetailsArea}>
                                    <div className={style.itemGtinCode}>
                                        {item.gtin? 'Código de barras: '+item.gtin : ''}
                                    </div>
                                     <div className={style.itemGpcCode}>
                                        {item.cest === undefined? '' : 'Código GPC: '+item.cest.code}
                                    </div>
                                     <div className={style.itemGpcDescription}>
                                        {item.cest === undefined? '' : 'Descrição código GPC: '+item.cest.description}
                                    </div>
                                    <div className={style.itemPrice}>
                                        {item.price? 'Preço: '+item.price : ''}
                                    </div>
                                    <div className={style.itemAveragePrice}>
                                        {item.avg_price? 'Preço médio: '+ 'R$ '+item.avg_price : ''}
                                    </div>
                                    <div className={style.itemPriceMinMax}>
                                        {item.min_price && item.max_price?
                                        'Preço mínimo e máximo: '+'R$ '+item.min_price+
                                        ' <-> '+'R$'+item.max_price : '' }
                                    </div>
                                    <div className={style.itemDateUpdated}>
                                        {item.updated_at? 'Data de atualização: '+item.updated_at : ''}
                                    </div>
                                    <div className={style.itemDataOrigin}>
                                        {item.origin? 'Fonte dos dados: '+item.origin : ''}
                                    </div>
                                    <div className={style.itemBarCodeImage}>
                                        <img src={item.barcode_image} alt="" />
                                    </div>
                                </div>
                            ))
                        }
                        </div>
                    </Typography>
                </AccordionDetails>
            </Accordion>

        </div>
    );
}
