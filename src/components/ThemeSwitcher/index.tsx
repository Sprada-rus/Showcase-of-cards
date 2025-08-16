import {useColorScheme} from "@mui/material";
import './main.css';
import {type CSSProperties, useEffect, useState} from "react";
import clsx from "clsx";
const root = document.querySelector(':root');

export default function ThemeSwitcher() {
    const { mode, setMode } = useColorScheme();
    const [togglePos, setTogglePos] = useState<CSSProperties>({});

    const changeThemeColor = (mode?: string) => {
        if (mode === 'system') {
            const result = window.matchMedia("(prefers-color-scheme: dark)");

            if (result.matches) {
                root?.setAttribute('main-theme', 'dark')
            } else {
                root?.setAttribute('main-theme', 'light')
            }

            setTogglePos({
                transform: 'translate(125%, 0)'
            })
        } else if (mode === 'dark') {
            setTogglePos({
                transform: 'translate(0, 0)'
            });
            root?.setAttribute('main-theme', 'dark');
        } else if (mode === 'light') {
            setTogglePos({
                transform: 'translate(250%, 0)'
            });
            root?.setAttribute('main-theme', 'light');
        }
    }

    useEffect(() => {
        changeThemeColor(mode);
    }, [mode]);

    return <div className="theme-switcher">
        <div className={clsx("theme-switcher__dark", {active: mode === 'dark'})}>
            <i className='far fa-moon' onClick={() => setMode('dark')}></i>
        </div>
        <div className={clsx("theme-switcher__system", {active: mode === 'system'})}>
            <i className="fas fa-tv" onClick={() => setMode('system')}></i>
        </div>
        <div className="theme-switcher__toggle" style={togglePos}></div>
        <div className={clsx('theme-switcher__light', {active: mode === 'light'})}>
            <i className='far fa-sun' onClick={() => setMode('light')}></i>
        </div>
    </div>
}