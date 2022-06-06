import { Item } from '../../Types';
import style from './pagination.module.css';

type PagesProps = {
    pages: Item[];
}

export const Pagination = ({pages}: PagesProps) => {
    return(
        <div>{pages.map((page, index) => (
            <div key={index}>{page.next_page}</div>
        ))}</div>
    );
}