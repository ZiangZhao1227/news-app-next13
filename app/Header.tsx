import { Bars3Icon } from "@heroicons/react/24/solid";
import Link from "next/link";
import DarkModeButton from "./DarkModeButton";
import NavLinks from "./NavLinks";
import SearchBox from "./SearchBox";

function Header() {
  return (
    <header>
      <div className="p-10 items-center">
        <Link href="/" prefetch={false}>
          <h1 className="font-serif text-4xl text-center">
            My{" "}
            <span className="underline decroation-4 decoration-blue-400">
              News
            </span>{" "}
            App
          </h1>
        </Link>
        <div className="flex items-center justify-end gap-2">
          <DarkModeButton />
        </div>
      </div>
      <NavLinks />

      <SearchBox />
    </header>
  );
}

export default Header;
