import "./Card.css"

const Card = ({post}) => {
  return (
    <div className="card">
      <div className="leftSideCard">
        <img src={post.img} alt="" className="img"></img>
        <div className="user">{post.user}</div>
        <div className="message">{post.message}</div>
      </div>
    </div>
  )
}

export default Card