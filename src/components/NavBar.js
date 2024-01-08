import '../styles/NavBar.css'
import { Link } from 'react-scroll';

function NavBar() {
    return (
        <nav className="NavBar">
            <Link to={"HomePage"} smooth={true} duration={1000} className="DesktopNavMenuItem">home</Link>
            <Link to={"AboutMe"} smooth={true} duration={1000} className="DesktopNavMenuItem">about me</Link>
            <Link to={"Projects"} smooth={true} duration={1000}className="DesktopNavMenuItem">my projects</Link>
            <Link className="DesktopNavMenuItem">extra stuff</Link>
        </nav>
    )
}

export default NavBar
