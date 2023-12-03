

function CardContent({ title, content, logo }) {

    return (
        <div className="center divCardContent">
            <h3>{title}</h3>
            <p>{content}</p>
            <div>{logo}</div>
        </div>
    )
  }
  
export default CardContent;