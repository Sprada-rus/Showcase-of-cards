import type {ReactNode} from "react";
import './main.css';

interface CardProps {
    children?: ReactNode;
}

export default function Card(props: CardProps) {

    return <div className={'card'}>
        <div className="card-content">
            {props.children}
        </div>
    </div>
}