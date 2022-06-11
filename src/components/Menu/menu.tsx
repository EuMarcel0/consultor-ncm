import React, { useState } from 'react';
import style from './menu.module.css';
import {LinkConsultCosmos} from '../../services';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MoreIcon from '@mui/icons-material/MoreVert';


const consultGpc = LinkConsultCosmos.gpcAllCosmos;
const consultNcm = LinkConsultCosmos.ncmAllCosmos;

const ITEM_HEIGHT = 48;

export const MenuLinks = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [list, setList] = useState(false);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<any>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className={style.muneAllArea}>
            <IconButton
                aria-label="more"
                aria-controls="long-menu"
                aria-haspopup="true"
                onClick={handleClick}
            >
                <MoreIcon className={style.buttonMenu} />
            </IconButton>
            <Menu
                id="long-menu"
                className={style.longMenu}
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
                PaperProps={{
                    style: {
                        maxHeight: ITEM_HEIGHT * 4.5,
                        width: '15ch',
                    },
                }}
            >
                <div className={style.gpcButtonArea} onClick={handleClose}>
                    <a href={consultGpc} 
                    className={style.gpcButton}
                    target="_blank"
                    >
                        GPC - Cosmos
                    </a>
                </div>
                <div className={style.ncmButtonArea} onClick={handleClose}>
                    <a href={consultNcm} 
                    className={style.ncmButton}
                    target="_blank"
                    >
                        NCM - Cosmos
                    </a>
                </div>
            </Menu>
        </div>
    );
}