import "../styles/Nav.scss"
import { useState } from "react";
import { MdOutlineDarkMode, MdDarkMode } from "react-icons/md";

const Nav = () => {
    // State to track the dark mode status
  const [dark, setDark] = useState(false);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setDark((prevDark) => !prevDark); // Inverting the previous value
  };

  return (
    <nav className={dark ? "dark-mode" : ""}>
      <h1>Where in the world?</h1>
      <button onClick={toggleDarkMode}>
        {dark ? <MdDarkMode className="icon"/> : <MdOutlineDarkMode className="icon"/> } <span>Dark Mode</span>
      </button>
    </nav>
  );
}
 
export default Nav;