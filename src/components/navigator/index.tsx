import { useState } from 'react'
import Home from '../../assets/Home.svg'
import Works from '../../assets/Works.svg'
import Games from '../../assets/Games.svg'
import Github from '../../assets/Github.svg'
import GetInTouch from '../../assets/GetInTouch.svg'
import './index.sass'
import { NavItems } from '../NavItems/index.jsx'

export function Navigator(props: any) {

    const [active, setActive] = useState("inactive")

    function isActive() {
        addEventListener('click', () => {
            let result = setActive('active')
            return result
        })
    }
    
    return (
        <aside>
            <nav className="navigation">
                <div className="menu">
                    <ul>
                        <NavItems id="home" className={isActive} link="/" item="HOME" image={Home} />
                        <NavItems id="works" className={isActive} link="/works" item="WORKS" image={Works}/>
                        <NavItems id="games" className={isActive} link="/games" item="GAMES" image={Games}/>
                        <NavItems id="github" className={isActive} link="/github" item="GITHUB" image={Github}/>
                        <NavItems id="contact" className={isActive} link="/contatos" item="CONTACT" image={GetInTouch} />
                        <div className="indicator"></div>
                    </ul>
                </div>
            </nav>
        </aside>
    );
}
