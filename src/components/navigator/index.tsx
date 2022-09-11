import { useState } from 'react'
import Home from '../../assets/Home.svg'
import Works from '../../assets/Works.svg'
import Games from '../../assets/Games.svg'
import Github from '../../assets/Github.svg'
import GetInTouch from '../../assets/GetInTouch.svg'
import './index.sass'
import { NavItems } from '../NavItems/index.jsx'

interface NavigatorProps {
    link: string;
    item: string;
    image: SVGImageElement;
}

export function Navigator(props: NavigatorProps) {
    
    return (
        <aside>
            <nav className="navigation">
                <div className="menu">
                    <ul>
                        <NavItems link="#home" item="HOME" image={Home} />
                        <NavItems link="#works" item="WORKS" image={Works}/>
                        <NavItems link="#games" item="GAMES" image={Games}/>
                        <NavItems link="#github" item="GITHUB" image={Github}/>
                        <NavItems link="#contatos" item="CONTACT" image={GetInTouch} />
                        <div className="indicator"></div>
                    </ul>
                </div>
            </nav>
        </aside>
    );
}
