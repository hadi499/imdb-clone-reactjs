import NavbarItem from "./NavbarItem";
import { useTheme } from "../context/theme";

export default function Navbar() {
  const { theme } = useTheme();
  const bgColor = theme === "dark" ? "bg-gray-600" : "bg-amber-100";
  const textColor = theme === "dark" ? "text-gray-200" : "text-gray-700";
  return (
    <div
      className={`flex justify-center  lg:text-lg p-4 ${bgColor} ${textColor}`}
    >
      <NavbarItem title="Trending" param="fetchTrending" />
      <NavbarItem title="Top Rated" param="fetchTopRated" />
    </div>
  );
}
