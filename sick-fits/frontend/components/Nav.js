import Link from "next/link";

const Nav = () => (
  <div>
    <p>Hey!</p>
    <Link href="/sell">
      <a>Sell!</a>
    </Link>
    <Link href="/buy">
      <a>Buy!</a>
    </Link>
  </div>
);

export default Nav;
