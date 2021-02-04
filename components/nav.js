import NavS from '../styles/nav.module.css'
import Link from 'next/link'

const Nav=()=>{
    return(
        <nav className={NavS.nav}>
           <ul>
               <li>
                   <Link href='/'>Home</Link>
               </li>
               <li>
                   <Link href='/about'>About</Link>
               </li>
           </ul>
        </nav>
    )
}
export default Nav;