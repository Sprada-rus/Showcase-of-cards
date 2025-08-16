import type {ItemBlockListProps, TodoProps} from "../ListBlock/types.ts";
import TodoCard from "./TodoCard";
import {type MouseEvent, useEffect, useState} from "react";
const localStorage = window.localStorage;
import './main.css'
const storageKey = 'todo';

export default function TodosBlock(props: ItemBlockListProps) {
    const list = props.list as TodoProps[];
    const [todoState, setTodoState] = useState<Record<string, boolean>>({});

    useEffect(() => {
        const todo = JSON.parse(localStorage.getItem(storageKey) || '{}') as Record<string, boolean>;
        list.forEach((item) => {
            if (todo['todo_' + item.id] === undefined) {
                todo['todo_' + item.id] = item.completed;
            }
        });

        const result = {...todo};
        localStorage.setItem(storageKey, JSON.stringify(result));
        setTodoState(result);
    }, [list]);

    const todoHandler = (e: MouseEvent<HTMLElement>) => {
        const target = e.target as HTMLInputElement;
        if (!target.id.startsWith("todo_")) return;

        todoState[target.id] = target.checked;
        localStorage.setItem(storageKey, JSON.stringify(todoState));
        setTodoState({...todoState});
    }

    return <div className={'todo-block'} onClick={todoHandler}>
        {list.map(item => <TodoCard
            key={'todo_' + item.id}
            {...item}
            completed={Boolean(todoState['todo_' + item.id])}
        />)}
    </div>
}