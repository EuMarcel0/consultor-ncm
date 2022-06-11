import style from './header.module.css';
import { Container } from '@mui/material';
import { FaWhatsapp, FaEnvelope, FaBarcode, FaGithub, FaLinkedin } from 'react-icons/fa';
import { MenuLinks }  from '../Menu/menu';
import { linksSocialMedia } from '../../services';

const linkWhatsApp = linksSocialMedia.whatsApp;
const linkGitHub = linksSocialMedia.git;
const linkLinkedIn = linksSocialMedia.linkedin;

export const Header = () => {

    return(
        <div className={style.headerArea}>
            <div className={style.contactArea}>
                <a href={linkWhatsApp} target="_blank">
                    <FaWhatsapp />
                    <div className={style.contactNumber}>(77) 9 9177-6299</div>
                </a>
                <a href="">
                    <FaEnvelope />
                    <div className={style.contactEmail}>marcelo.dev.js@hotmail.com</div>
                </a>
                <a href={linkGitHub} target="_blank">
                    <FaGithub />
                    <div className={style.contactGit}>/EuMarcel0</div>
                </a>
                <a href={linkLinkedIn} target="_blank">
                    <FaLinkedin />
                    <div className={style.contactLinkedin}>Linkedin</div>
                </a>
            </div>
            <Container className={style.headerContainer}>
                <div className={style.logoArea}>
                    <FaBarcode className={style.barCode} />
                    <div className={style.logoArea}>Get <span>NCM</span></div>
                </div>
                <MenuLinks />
            </Container>
        </div>
    );
}