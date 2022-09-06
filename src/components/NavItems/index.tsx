import { useState } from 'react'

type Props = {
    link: string,
    item: string,
    image: string
};


export function NavItems({link, item, image}:Props) {

    const [activate, setActivate] = useState('list')

    function activeLink() {

        if(item) {
            setActivate('list active')
        }
        if(!item) {
            setActivate('list')
        }
    }

    return (
        <li className={activate} onClick={activeLink}>
            <a className="anchor" href={link} >
                <span className="text">{item}</span>
                <span className="icon">
                    <img src={image} alt={item} />
                </span>
            </a>
        </li>
    )

}