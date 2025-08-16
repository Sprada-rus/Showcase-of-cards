import type {TodoProps} from "../../ListBlock/types.ts";
import Card from "../../Card";
import {Checkbox} from "@mui/material";

export default function TodoCard(props: TodoProps) {
    const {completed, todo, id} = props;
    return <Card>
        <div className="todo__checkbox">
            <Checkbox
                id={'todo_' + id}
                checked={completed}
            />
        </div>
        <div className='todo__description'>
            {todo}
        </div>
    </Card>;
}