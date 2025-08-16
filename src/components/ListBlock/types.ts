export interface ItemsProps {
    total: number,
    skip: number,
    limit: number,
    todos?: TodoProps[],
    quotes?: QuotesProps[]
}

export interface TodoProps {
    id: number,
    todo: string,
    completed: boolean,
    userId: number
}

export interface QuotesProps {
    id: number,
    quote: string,
    author: string
}

export interface ItemBlockListProps {
    list: QuotesProps[]|TodoProps[];
}