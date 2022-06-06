import style from './footer.module.css';

export const Footer = () => {
    return(
        <div className={style.footerArea}>
            <div className={style.footerCopyright}>©2022 Get NCM - Todos os direitos reservados</div>
        </div>
    );
}