import { MdLightMode } from "react-icons/md";
import { BsFillMoonFill } from "react-icons/bs";
import { useTheme } from "../context/theme";
export default function DarkModeSwitch() {
  const { theme, toggleTheme } = useTheme();
  const Button = theme === "dark" ? <MdLightMode /> : <BsFillMoonFill />;

  return (
    <>
      <button onClick={toggleTheme}>{Button}</button>
    </>
  );
}
