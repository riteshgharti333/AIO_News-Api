import React from 'react'


const NewsItem = (props) => {
    

   let  {title , description , imageUrl , newsUrl , author , date , source} = props;



  

    return (
      <div className='my-3'>

<div className="card"  >
  <img src={imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title} <span className="badge bg-danger">{source}</span>  </h5>
    <p className="card-text">{description}</p>
    <p className="card-text"><small className="text-muted">By {!author?"Unknown" :author} on {new Date(date).toDateString()}</small></p>
    <a href={newsUrl} target="..blank" className="btn btn-sm btn-primary">Read More</a>
  </div>
</div>

      </div>
    )
}

export default NewsItem
