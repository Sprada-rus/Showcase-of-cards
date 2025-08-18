import {useEffect, useState} from "react";
import type {ItemsProps} from "./types.ts";
import {Alert, Box, CircularProgress} from "@mui/material";
import Pagination from "../Pagination/Pagination.tsx";
import QuotesBlock from "../QuotesBlock";
import clsx from "clsx";
import './main.css';
import TodosBlock from "../TodosBlock";

interface ListBlockProps {
    type?: string,
    maxCards: number
}

export default function ListBlock(props: ListBlockProps) {
    const {type, maxCards} = props;
    const [items, setItems] = useState<ItemsProps|undefined>();
    const [pageNum, setPageNum] = useState(1);
    const [hasError, setHasError] = useState(false);
    const [pending, setPending] = useState(false);

    useEffect(() => {
        setPageNum(1);
    }, [type]);

    useEffect(() => {
        if (!type) return;
        setPending(true);

        (async () => {
            const serachParams = new URLSearchParams();
            serachParams.set('limit', maxCards.toString());
            serachParams.set('skip', (maxCards * (pageNum - 1)).toString());

            const response = await fetch(`https://dummyjson.com/${type}?${serachParams.toString()}`);

            if (!response.ok) {
                return setHasError(true);
            }

            const json = await response.json();
            setItems(json);
        })().finally(() => setPending(false));
    }, [type, maxCards, pageNum]);

    if (!type) return <></>;

    if (hasError) return <Alert severity={'error'}>Произошла ошибка, перезагрузите страницу и попробуйте снова.</Alert>;

    return <>
        <p>Кол-во: {items?.total || 0}</p>
        {items?.total && <Pagination
            count={Math.ceil(items.total / maxCards)}
            currentPage={pageNum}
            onChange={(number) => setPageNum(number)}
            onPrev={() => setPageNum(item => item - 1)}
            onNext={() => setPageNum(item => item + 1)}
        />}
        {pending && <Box sx={{display: 'flex', justifyContent: 'center'}}><CircularProgress/></Box>}
        {!pending && <div className={clsx('list-items', {pair: maxCards % 2 === 0})}>
            {type === 'quotes' && items?.quotes && <QuotesBlock list={items.quotes}/>}
            {type === 'todos' && items?.todos && <TodosBlock list={items.todos}/>}
        </div>}
    </>
}