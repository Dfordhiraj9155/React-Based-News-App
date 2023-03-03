import React, { Component } from 'react'

const Newsitem  = (props)=>{

  
    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
      <div>
        <div className="card">
          <div
          style = {{
            display:'flex',
            justifyContent:'flex-end',
            position:'absolute',
            right:'0'
        }

          }
          >
            <span className="badge rounded-pill bg-danger">{source}</span>
          </div>
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}---</h5>
            <p className="card-text">{description}---</p>
            <div className="card-footer text-muted my-1">By {author} on {date}</div>
            <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read more</a>
          </div>
        </div>
      </div>
    )
  
}

export default Newsitem
