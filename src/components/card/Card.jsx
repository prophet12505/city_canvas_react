import React from 'react'
import './Card.css'
const Card = (props) => {
  return (
    <div class="card">
    {/* post thumbnail, to be revised  */}
    <img src={props.imgSrc} class="card-img-top" alt="News Image" />
    <div class="card-body">
    {/* post title  */}
    <h5 class="card-title">{props.title}</h5>
    {/* post content  */}
    <p>{props.content}</p>

    </div>
</div>
  )
}

export default Card