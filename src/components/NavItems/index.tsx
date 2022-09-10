import { useState, useEffect } from 'react'
// import { contains } from 'sequelize/dist/lib/operators';

type Props = {
    link: string,
    item: string,
    image: string
};


export function NavItems({link, item, image}:Props) {

    const [activate, setActivate] = useState('list')

    useEffect(()=> {
        if(item == 'HOME') {
            setActivate('list active')
        } 
    },[])

    function activeLink() {
        
        if(activate == 'list') {
            setActivate('list active')
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