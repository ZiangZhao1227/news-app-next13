import Link from "next/link";

type Props = {
  category: Category;
  isActive: boolean;
};

function NavLink({ category, isActive }: Props) {
    return <Link href={`/news/${category}`} className="nav-items">
    {category}
    </Link>;
}

export default NavLink;
