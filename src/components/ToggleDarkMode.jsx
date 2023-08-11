import { useState, useEffect } from "react";
import { MdOutlineDarkMode, MdDarkMode } from "react-icons/md";
import "../styles/ToggleDarkMode.scss";

const ToggleDarkMode = () => {
    const initialDarkMode = localStorage.getItem('darkMode') === 'true';
    const [dark, setDark] = useState(initialDarkMode);

    useEffect(() => {
        localStorage.setItem('darkMode', String(dark));
        document.body.classList.toggle('dark-background', dark);
    }, [dark]);

    const toggleDarkMode = () => {
        const newDarkMode = !dark;
        setDark(newDarkMode);
    };

    return (
        <div>
            <button onClick={toggleDarkMode} className="togglemode">
                {dark ? <MdDarkMode className="icon" /> : <MdOutlineDarkMode className="icon" />} 
                <span>Dark Mode</span>
            </button>
        </div>
    );
}

export default ToggleDarkMode;