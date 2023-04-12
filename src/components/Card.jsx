import star from "/assets/star.png"

export default function Card (props) {
    let badgeText
    if(props.openSpots === 0) {
        badgeText = "SOLD OUT"
    }
    else if (props.location === "Online"){
        badgeText = "ONLINE"
    }
    return (
        <article>
            { badgeText &&   <aside>{badgeText}</aside>}
        <img src={`/assets/${props.coverImg}`}  />
        <div>
            <img src= {star} />
            <span>{props.stats.rating}</span>
            <span>({props.stats.reviewCount}) • </span>
            <span>{props.location}</span>
        </div>
        <p>{props.title}</p>
        <p><b>From ${props.price}</b> / person</p>
    </article>
    )
}
