
export function NavItems(props:any) {
    return (
        <li>
            <a className="anchor" href={props.link}>
                <span className="text">{props.item}</span>
                <span className="icon">
                    <img src={props.image} alt={props.item} />
                </span>
            </a>
        </li>
    )

}