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
                    <table className="featuredTable">
                        <tr>
                            <th colspan="2"><p>As seen on</p></th>
                        </tr>
                        <tr>
                            { /* <td><a href="https://www.non-fungi.com/" target="_blank"><img src={iconNonFungi} className="outlinks featuredIcons" title="non-fungi.com"></img></a></td> */ }
                            <td><a href="https://nftcalendar.io/" target="_blank"><img src={iconNftCalendar} className="outlinks featuredIcons" title="nftcalendar.io"></img></a></td>
                            <td></td>
                        </tr>
                    </table>
                </li>
                <li>
                    <center>
                        <a href="https://github.com/WOAI-project" target="_blank"><img src={iconGithub} className="outlinks" title="Code"></img></a>
                        <a href="https://docs.woai.io/" target="_blank"><img src={iconGitbook} className="outlinks" title="Docs"></img></a>
                        <img className="separator"></img>
                        <a href="https://mirror.xyz/woai.eth" target="_blank"><img src={iconMirror} className="outlinks" title="Blog"></img></a>
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