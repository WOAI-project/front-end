import iconGithub from './iconGithub.svg';
import iconGitbook from './iconGitbook.svg';
import iconMirror from './iconMirror.svg'
import iconTwitter from './iconTwitter.svg';
import iconDiscord from './iconDiscord.svg';
import iconLooksRare from './iconLooksRare.svg';
import iconOpenSea from './iconOpenSea.png';
import './Footer.css';

function Footer() {
    return(

        <footer className="footer">
            <ul>
                <li>
                    <p></p>
                </li>
                <li>
                    <center>
                        <a href="https://docs.woai.io/woai/bounties" className="footerTextLink" target="_blank">Bounties</a>
                        <img className="separator"></img>
                        <a href="https://github.com/WOAI-project" target="_blank"><img src={iconGithub} className="outlinks" title="Code"></img></a>
                        <a href="https://docs.woai.io/" target="_blank"><img src={iconGitbook} className="outlinks" title="Docs"></img></a>
                        <img className="separator"></img>
                        <a href="https://mirror.xyz/woai.eth" target="_blank"><img src={iconMirror} className="outlinks" title="Blog"></img></a>
                        <a href="https://twitter.com/woai_io" target="_blank"><img src={iconTwitter} className="outlinks" title="Twitter"></img></a>
                        <a href="https://discord.gg/76VSqqvavT" target="_blank"><img src={iconDiscord} className="outlinks" title="Discord"></img></a>
                        <img className="separator"></img>
                        <a href="#" target="_blank"><img src={iconLooksRare} className="outlinks" title="LooksRare"></img></a>
                        <a href="#" target="_blank"><img src={iconOpenSea} className="outlinks invert" title="OpenSea"></img></a>
                        <img className="separator"></img>
                        <a href="http://woai-data.woai.io/terms.html" className="footerTextLink" target="_blank">T&amp;C</a>
                    </center>
                </li>
                <li>
                    <p></p>
                </li>
            </ul>

            
        </footer>

    );
}

export default Footer;