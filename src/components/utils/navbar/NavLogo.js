import Link from "next/link";
import { simpleFetch } from "utils/simpleFetch";

export const NavLogo = async () => {
  const logo = await simpleFetch("stores/logo", "isr", "60");
  return (
    <Link href="/" className="logo">
      <img src={logo} alt="IMG-LOGO" />
    </Link>
  );
};
