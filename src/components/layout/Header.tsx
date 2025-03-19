import TodoButton from "../TodoButton";
import { useTheme } from "../../context/ThemeContext";

function Header() {
    const { theme, toggleTheme } = useTheme();
    return (
        <header className="text-white flex justify-between items-center mb-[4.8rem]">
            <h1 className="font-sans text-[3.6rem] font-[700]">TODO</h1>
            <TodoButton onClick={toggleTheme} className="border-none bg-transparent cursor-pointer">
                <img src={theme === "light" ? "/moon-4-32.png" : "/sun-2-24.png"} />
            </TodoButton>
        </header>
    );
}

export default Header;
