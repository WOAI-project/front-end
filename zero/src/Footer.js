import iconGithub from './iconGithub.svg';
import iconGitbook from './iconGitbook.svg';
import iconMirror from './iconMirror.svg'
import iconTwitter from './iconTwitter.svg';
import iconDiscord from './iconDiscord.svg';
import iconLooksRare from './iconLooksRare.svg';
import iconOpenSea from './iconOpenSea.png';

import iconNftCalendar from './iconNftCalendar.webp'
import iconNonFungi from './iconNonFungi.webp'

import './Footer.css';

function Footer() {
    return(

        <footer className="footer">
            <ul>
                <li>
                    <a href="http://woai-data.woai.io/contact.html" className='footerTextLink' target="_blank">Contact</a>
                </li>
                <li>
                    <center>
                        <a href="https://github.com/WOAI-project" target="_blank"><img src={iconGithub} className="outlinks" title="Code"></img></a>
                        <a href="https://docs.woai.io/" target="_blank"><img src={iconGitbook} className="outlinks" title="Docs"></img></a>
                        <img className="separator"></img>
                        <a href="https://twitter.com/woai_io" target="_blank"><img src={iconTwitter} className="outlinks" title="Twitter"></img></a>
                        <a href="https://discord.gg/76VSqqvavT" target="_blank"><img src={iconDiscord} className="outlinks" title="Discord"></img></a>
                        <img className="separator"></img>
                        <a href="https://looksrare.org/collections/0x0eAbED78fd49AD3c0A3e445954f29522025c09A0" target="_blank"><img src={iconLooksRare} className="outlinks" title="LooksRare"></img></a>
                        <a href="https://opensea.io/collection/woai-zero" target="_blank"><img src={iconOpenSea} className="outlinks invert" title="OpenSea"></img></a>
                        
                    </center>
                </li>
                <li>
                    <a href="http://woai-data.woai.io/terms.html" className="footerTextLink" target="_blank">T&amp;C</a>
                </li>
            </ul>

            
        </footer>

    );
}

export default Footer;