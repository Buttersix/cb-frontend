import "./Card.css"

const Card = ({post}) => {
  return (
    <div className="card">
      <div className="leftSideCard">
        <div className="user">{post.user}</div>
        <div className="date">{post.date}</div>
        <div className="message">{post.message}</div>
      </div>
    </div>
  )
}

export default Card