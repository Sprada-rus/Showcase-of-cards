import {describe, it, expect} from "vitest";
import {renderPaginationItems} from "./utils.ts";

describe('check list pagination for render', () => {
    it('check when we have 7 page and 6 current page', () => {
        const renderList = renderPaginationItems(7, 6);
        expect(renderList).toEqual([1, 2, 3, 4, 5, 6, 7]);
    });

    it('check when we have 10 page and 1 current page', () => {
        const renderList = renderPaginationItems(10, 1);
        expect(renderList).toEqual([1, 2, 3, 4, 5, '...', 10]);
    });

    it('check when we have 10 page and 5 current page', () => {
        const renderList = renderPaginationItems(10, 5);
        expect(renderList).toEqual([1, '...', 4, 5, 6, '...', 10]);
    });

    it('check when we have 10 page and 10 current page', () => {
        const renderList = renderPaginationItems(10, 10);
        expect(renderList).toEqual([1, '...', 6, 7, 8, 9, 10]);
    });
});