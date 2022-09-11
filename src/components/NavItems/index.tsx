import { useState, useEffect } from 'react'
// import { contains } from 'sequelize/dist/lib/operators';

interface NavItemsProps {
    link: string;
    item: string;
    image: string;
};

export function NavItems({link, item, image}:NavItemsProps) {

    const [activate, setActivate] = useState('innactive')

    useEffect(()=> {
        if(item == 'HOME') {
            setActivate('active')
        } 
    },[])

    function activeLink() {
        if(!item) {
            setActivate('innactive')
        }     
        if(item){
            setActivate('active')
        } 
    }

    return (
        <li className={activate} onChange={activeLink} onClick={activeLink}>
            <a className="anchor" href={link} >
                <span className="text">{item}</span>
                <span className="icon">
                    <img src={image} alt={item} />
                </span>
            </a>
        </li>
    )

}