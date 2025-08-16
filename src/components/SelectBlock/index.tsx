import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import './main.css'

export default function SelectBlock(props: {onChange: (val: string) => void, value: string|undefined}) {
    return <div className={'select-block'}>
        <FormControl >
            <InputLabel id="type-data-lable">Тип данных</InputLabel>
            <Select
                labelId="type-data-lable"
                id="type-data"
                value={props.value}
                label="Тип данных"
                onChange={(e) => {
                    props.onChange(e.target.value as string)
                }}
                sx={{
                    width: {
                        xs: '80vw',
                        sm: '80vw',
                        md: '300px'
                    }
                }}
            >
                <MenuItem value={''}></MenuItem>
                <MenuItem value={`quotes`}>Цитаты</MenuItem>
                <MenuItem value={'todos'}>Задачи</MenuItem>
            </Select>
        </FormControl>
    </div>
}