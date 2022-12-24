import React, { useEffect, useState } from "react";
import Pagination from "../components/Pagination";

const HomePage = () => {
  const [list, setList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, sePostPertPage] = useState(6);
  useEffect(() => {
    const fetchData = () => {
      fetch("https://api.spacexdata.com/v3/history")
        .then((res) => res.json())
        .then((data) => setList(data));
    };

    fetchData();
  }, []);

  const lastPost = currentPage * postPerPage;
  const firstPost = lastPost - postPerPage;
  const currentPost = list.slice(firstPost, lastPost);
  return (
    <>
      {currentPost.map((item) => {
        return (
          <div
            className="card"
            style={{ width: "30rem", display: "inline-block", margin: "5px" }}
            key={item.id}
          >
            <img
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyn1hSx8wqkiUON-ccetbcCctz1vBPGuh7Tw&usqp=CAU"
              }
              className="card-img-top"
              alt="space-x"
            />
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>

              <div
                style={{ padding: "20px", maxWidth: "400px", margin: "50px" }}
              >
                <p
                  className="card-text"
                  style={{
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                    maxWidth: "600px",
                  }}
                >
                  {item.details}
                </p>
              </div>

              <a
                rel="noreferrer"
                href={item.links.article}
                target="_blank"
                style={{ margin: "10px" }}
                className="btn btn-primary"
              >
                Read article
              </a>
              <a
                rel="noreferrer"
                href={item.links.wikipedia}
                target="_blank"
                className="btn btn-primary"
              >
                wikipedia
              </a>
            </div>
          </div>
        );
      })}
      <Pagination
        totalPosts={list.length}
        postsPerPage={postPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </>
  );
};

export default HomePage;
