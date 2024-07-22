import { Link } from "react-router-dom";
import './Navigation.css'

export function Navigation() {
    return ( 
        <header className="h-navigation">
            <span className="label-web">React TypeScript</span>
            <nav className="links">
                <Link className="link-to" to='/'>Home</Link>
                <Link className="link-to" to='/about'>About us</Link>
            </nav>
        </header>
     );
}
