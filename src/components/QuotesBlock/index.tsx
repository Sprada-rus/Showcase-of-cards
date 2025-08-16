import type {QuotesProps} from "../ListBlock/types.ts";
import Card from "../Card";

interface QuotesBlockProps {
    list: QuotesProps[];
}

export default function QuotesBlock(props: QuotesBlockProps) {
    return <>
        {props.list.map((quote) =>
        <Card key={quote.id}>
            <p>
                {quote.quote}
            </p>
            <p style={{textAlign: 'right'}}>
                <i>{quote.author}</i>
            </p>
        </Card>
        )}
    </>
}