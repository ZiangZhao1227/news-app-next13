import Link from "next/link";

type Props = {
  category: Category;
  isActive: boolean;
};

function NavLink({ category, isActive }: Props) {
  return (
    <Link
      href={`/news/${category}`}
      className={`nav-items ${
        isActive &&
        "underline dercoration-blue-400 underline-offset-4 font-bold text-lg"
      }`}
    >
      {category}
    </Link>
  );
}

export default NavLink;
