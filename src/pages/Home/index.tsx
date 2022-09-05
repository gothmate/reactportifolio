import LinkedIn from '../../assets/LinkedinLogo.svg'
import GithubLogo from '../../assets/Github.svg'
import FigmaLogo from '../../assets/FigmaLogo.svg'
import CodepenLogo from '../../assets/CodepenLogo.svg'

export default function Home() {
    return (
        <div className="pageContainer" id="home">
            <div className="bloco">
                <div>
                    <h1>Hi! I'm Gabe</h1>
                    <p>I love technology and I worked for a time with printed art. 
                    In a way, I merged those two passions to create digital solutions.</p>
                </div>
            </div>
            <div className="logos">
                <a href="https://github.com/gothmate" target="_blank">
                    <img src={GithubLogo} alt="Github" />
                </a>
                <a href="https://www.linkedin.com/in/gabriel-correia-dev/" target="_blank">
                    <img src={LinkedIn} alt="LinkedIn" />
                </a>
                <a href="https://www.figma.com/@gothmategabriel" target="_blank">
                    <img src={FigmaLogo} alt="Figma" />
                </a>
                <a href="https://codepen.io/gabriel-gothmate-correia" target="_blank">
                    <img src={CodepenLogo} alt="Codepen" />
                </a>
            </div>
        </div>
    );
}
