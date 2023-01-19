const dishComp = ({title , description , price}) => {
    return (
        <li className="card">
            <h3>{title}</h3>
            <p>{description}</p>
            <p>{price}</p>
        </li>
    )
}
export default dishComp ;