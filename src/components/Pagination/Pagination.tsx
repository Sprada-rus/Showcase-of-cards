import clsx from "clsx";
import './main.css';

interface PaginationProps {
    count: number;
    currentPage: number;
    onChange: (page: number) => void;
    onPrev: () => void;
    onNext: () => void;
}

function renderPaginationItems(total: number, currentPage: number) {
    const pages: Array<string|number> = [1];

    if (total <= 7) {
        for (let i = 1; i <= total; i++) pages[pages.length] = i;
        return pages;
    }

    if (currentPage - 4 <= 0) {
        for (let i = 2; i <= 5; i++) {
            pages[pages.length] = i;
        }
        pages[pages.length] = '...';
    } else if (total - 4 < currentPage) {
        pages[pages.length] = '...';
        for (let i = total - 4; i <= total - 1; i++) pages[pages.length] = i;
    } else {
        pages[pages.length] = '...';
        for (let i = currentPage - 1; i <= currentPage + 1; i++) pages[pages.length] = i;
        pages[pages.length] = '...';
    }

    pages[pages.length] = total;

    return pages;
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