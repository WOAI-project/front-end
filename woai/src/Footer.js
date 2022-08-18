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
                        <a href="https://github.com/WOAI-project" target="_blank"><img src={iconGithub} class="outlinks" title="Code"></img></a>
                        <a href="https://docs.woai.io/" target="_blank"><img src={iconGitbook} class="outlinks" title="Docs"></img></a>
                        <img class="separator"></img>
                        <a href="https://mirror.xyz/woai.eth" target="_blank"><img src={iconMirror} class="outlinks" title="Blog"></img></a>
                        <a href="https://twitter.com/woai_io" target="_blank"><img src={iconTwitter} class="outlinks" title="Twitter"></img></a>
                        <a href="https://discord.gg/76VSqqvavT" target="_blank"><img src={iconDiscord} class="outlinks" title="Discord"></img></a>
                        <img class="separator"></img>
                        <a href="#" target="_blank"><img src={iconLooksRare} class="outlinks" title="LooksRare"></img></a>
                        <a href="#" target="_blank"><img src={iconOpenSea} class="outlinks invert" title="OpenSea"></img></a>
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