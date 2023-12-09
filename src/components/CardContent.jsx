

function CardContent({ title, content, logo }) {

    return (
        <div className="center divCardContent">
            <h3>{title}</h3>
            <p>{content}</p>
            <div className="center">{logo}</div>
        </div>
    )
  }
  
export default CardContent;