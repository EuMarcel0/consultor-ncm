import {  
        Accordion, 
        AccordionSummary, 
        Typography,
} from '@mui/material';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import React from 'react';
import { Item } from '../../Types';
import style from './details.module.css';

const originDataUrl = 'https://cosmos.bluesoft.com.br/';


type DetailsProps = {
    details: Item;
}


export default function DetailsAccordion({details} : DetailsProps) {

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
                                        {details.ncm.full_description && 
                                            <span>Descrição NCM: </span>}
                                        {details.ncm.full_description}
                                    </div>
                                    <div className={style.itemGtinCode}>
                                        {details.gtin && 
                                            <span>Código de barras: </span>}
                                        {details.gtin}
                                    </div>
                                     <div className={style.itemGpcCode}>
                                        {details.gpc?.code &&
                                            <span>GPC: </span>}
                                        {details.gpc?.code === undefined? '' :  details.gpc.code}
                                    </div>
                                     <div className={style.itemGpcDescription}>
                                        {details.gpc?.description &&
                                            <span>Descrição GPC: </span>}
                                        {details.gpc?.description === undefined? '' :  details.gpc?.description}
                                    </div>
                                    <div className={style.itemPrice}>
                                        {details.price &&
                                            <span>Preço: </span>}
                                        {details.price}
                                    </div>
                                    <div className={style.itemAveragePrice}>
                                        {details.avg_price &&  
                                            <span>Preço médio: </span>}
                                        {details.avg_price === null? '' : 'R$ '+details.avg_price}
                                    </div>
                                    <div className={style.itemDateUpdated}>
                                        {details.updated_at && 
                                            <span>Data atualização: </span>}
                                        {updateDay.getDay() < 10? '0'+updateDay.getDay()+'.' : ''}
                                        {updateMonth.getMonth() < 10? '0'+updateMonth.getMonth()+'.' : ''}
                                        {updateYear.getFullYear()}
                                    </div>
                                    <div className={style.itemDataOrigin}>
                                        {details.origin && 
                                            <span>Fonte: </span>}
                                        <a href={originDataUrl} target="_blank">{details.origin}</a>
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
