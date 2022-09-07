import logo from './HeaderLogo.svg';
import './Header.css';

function Header() {
    return(

        <header className="header">
            <ul>
                <li>

                </li>
                <li>
                    <center><img src={logo} className="logo" alt="WOAI" /></center>
                </li>
                <li>
                    
                </li>
            </ul>

            
        </header>

    );
}

export default Header;