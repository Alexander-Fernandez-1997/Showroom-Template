import { SearchIcon } from "./SearchIcon";
import { FiUser } from "react-icons/fi";
import { CartIcon } from "./CartIcon";

export const AuthBtn = () => {
  return (
    <ul className="main-menu">
      <li>
        <a>
          <SearchIcon />
        </a>
      </li>
      <li>
        <a
          data-bs-toggle="offcanvas"
          href="#offcanvasExample"
          role="button"
          aria-controls="offcanvasExample"
        >
          <FiUser size={"1.2rem"} />
        </a>
      </li>
      <CartIcon />
    </ul>
  );
};
