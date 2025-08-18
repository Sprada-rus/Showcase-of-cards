export  function renderPaginationItems(total: number, currentPage: number) {
    const pages: Array<string|number> = [1];

    if (total <= 7) {
        for (let i = 2; i <= total; i++) pages[pages.length] = i;
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