import clsx from "clsx";
import './main.css';
import {renderPaginationItems} from "./utils.ts";

interface PaginationProps {
    count: number;
    currentPage: number;
    onChange: (page: number) => void;
    onPrev: () => void;
    onNext: () => void;
}



export default function Pagination(props: PaginationProps) {
    const {onChange, currentPage, count, onPrev, onNext} = props;

    return <div className={'pagination-block'} onClick={(e) => {
        const target = e.target as HTMLElement;
        const val = target.innerText;

        if (!target.classList.contains('pagination-item') || val === '...') return;

        onChange(+val);
    }}>
        {currentPage !== 1 && <button className="prev" onClick={onPrev}> &laquo; </button>}
        {renderPaginationItems(count, currentPage).map((item, index) => <div className={clsx('pagination-item', {active: currentPage === item})} key={'item-pag-' + item + index}>{item}</div>)}
        {currentPage !== count && <button className="next" onClick={onNext}> &raquo; </button>}
    </div>
}