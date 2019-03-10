import Link from "next/link";
import NavStyles from './styles/NavStyles'
import User from './User'

const Nav = () => (
<NavStyles>
  <User>
    {({data: { me }, error, loading}) => {
     // console.log(data);
    if (me) return <p>{me.name}</p>
      return <p>ERRR</p>;
    }}
  </User>
  <Link href="items"><a>items</a></Link>    
  <Link href="sell"><a>sell</a></Link>
  <Link href="signup"><a>signup</a></Link>
  <Link href="orders"><a>orders</a></Link>
  <Link href="me"><a>Account</a></Link>    
</NavStyles>
);

export default Nav;
