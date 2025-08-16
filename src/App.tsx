import {useEffect, useState} from "react";
import SelectBlock from "./components/SelectBlock";
import ThemeSwitcher from "./components/ThemeSwitcher";
import ListBlock from "./components/ListBlock";

const LIMIT_CARDS_MOBILE = 5;
const LIMIT_CARDS_DESKTOP = 10;

export default function App() {
    const [type, setType] = useState('');
    const [isMobile, setIsMobile] = useState(true);

    useEffect(() => {
        function resizeHandler() {
            setIsMobile(window.innerWidth < 900)
        }

        window.addEventListener('resize', resizeHandler);

        return () => window.removeEventListener('resize', resizeHandler);
    }, []);

    return (
        <>
            <ThemeSwitcher/>
            <SelectBlock onChange={(val) => setType(val)} value={type}/>
            <ListBlock type={type} maxCards={isMobile ? LIMIT_CARDS_MOBILE : LIMIT_CARDS_DESKTOP}/>
        </>
    )
}
