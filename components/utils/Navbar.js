import { SearchBar } from "./navbar/SearchBar";
import { DeskNav } from "./navbar/DeskNav";
import { MobileNav } from "./navbar/MobileNav";

export const Navbar = () => {
  const directions = ["", "showroom", "nosotros", "locales", "contacto"];

  return (
    <header>
      <DeskNav directions={directions}></DeskNav>
      <MobileNav directions={directions}></MobileNav>
      <SearchBar></SearchBar>
    </header>
  );
};
