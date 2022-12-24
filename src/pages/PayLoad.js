import React, { useEffect, useState } from "react";
import Pagination from "../components/Pagination";
const PayLoad = () => {
  const [list, setList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, sePostPertPage] = useState(6);

  useEffect(() => {
    const fetchHistory = () => {
      fetch("https://api.spacexdata.com/v3/payloads")
        .then((res) => res.json())
        .then((data) => {
          setList(data);
        });
    };
    fetchHistory();
  });
  const lastPost = currentPage * postPerPage;
  const firstPost = lastPost - postPerPage;
  const currentPost = list.slice(firstPost, lastPost);
  return (
    <div>
      {currentPost.map((item) => {
        return (
          <div className="card" key={item.payload_id}>
            <div className="card-header">
              <b>{item.payload_id}</b>
            </div>
            <div className="card-body">
              <blockquote className="blockquote mb-0">
                <p>{`Nationality : ${item.nationality}`}</p>
                <p>{`Payload Type : ${item.payload_type}`}</p>
                <p>{`Orbit : ${item.orbit}`}</p>
                <p>{`Reference System : ${item.orbit_params.reference_system}`}</p>
                <footer className="blockquote-footer">
                  <cite title="Source Title">Source Space-x</cite>
                </footer>
              </blockquote>
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
    </div>
  );
};

export default PayLoad;
