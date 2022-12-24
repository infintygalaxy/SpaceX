import React from 'react'

const Documentation = () => {
    const docURL="https://github.com/r-spacex/SpaceX-API/blob/master/docs/apps.md";
  return <div className="card text-bg-dark">
  <img src={"https://images.unsplash.com/photo-1517976547714-720226b864c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3BhY2V4fGVufDB8fDB8fA%3D%3D&w=1000&q=80"} className="card-img" alt="documentation"/>
  <div className="card-img-overlay">
    <h5 className="card-title">Documentation</h5>
    <a
                rel="noreferrer"
                href={docURL}
                target="_blank"
                style={{ margin: "10px" }}
                className="btn btn-primary"
              >Go To Documentation</a>
    <p className="card-text"></p>
    <p className="card-text"><small>Last updated 3 mins ago</small></p>
  </div>
</div>
}

export default Documentation
