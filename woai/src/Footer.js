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

        <footer class="footer">
            <ul>
                <li>
                    <p></p>
                </li>
                <li>
                    <center>
                        <img src={iconGithub} class="outlinks" title="Code"></img>
                        <img src={iconGitbook} class="outlinks" title="Docs"></img>
                        <img class="separator"></img>
                        <img src={iconMirror} class="outlinks" title="Blog"></img>
                        <img src={iconTwitter} class="outlinks" title="Twitter"></img>
                        <img src={iconDiscord} class="outlinks" title="Discord"></img>
                        <img class="separator"></img>
                        <img src={iconLooksRare} class="outlinks" title="LooksRare"></img>
                        <img src={iconOpenSea} class="outlinks invert" title="OpenSea"></img>
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