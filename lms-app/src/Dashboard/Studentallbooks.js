import React, { useContext, useState } from "react";
import Table from "react-bootstrap/Table";
import { BookContext } from "../App";
import Studentdashboard from "./Studentdashboard";
import { AiOutlineEye } from "react-icons/ai";

function Studentallbooks() {
  const [book] = useContext(BookContext);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");

  const handleSort = (e) => {
    setSort(e.target.value)
    if (sort === "title") {
      book.sort(function (a, b) {
        if (a.author.toLowerCase() < b.author.toLowerCase()) return -1;
        if (a.author.toLowerCase() > b.author.toLowerCase()) return 1;
        return 0;
      });
    }
    if (sort === "author") {
      book.sort(function (a, b) {
        if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
        if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
        return 0;
      });
    }
  };

  return (
    <>
      <div className="d-flex col">
        <Studentdashboard />
        <div className="container2 text-nowrap p-5">
          <h5>All Books</h5>
          <hr />
          <div className="search d-dlex">
            <div>
              <input
                className="form-control my-5"
                style={{ width: "600px" }}
                type="search"
                placeholder="Search by book title or author"
                aria-label="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="d-flex col gap-3 justify-content-end ">
              <p>Sort by:</p>
              <select
                className="form-select bg-light"
                aria-label="Default select example"
                style={{ width: "10rem" }}
                onClick={handleSort}
              >
                <option></option>
                <option value="title">Book Title</option>
                <option value="author">Author</option>
              </select>
            </div>
          </div>
          <Table hover>
            <thead>
              <tr>
                <th>Book Title</th>
                <th>Author</th>
                <th>Language</th>
                <th>Total Copies</th>
                <th>Remaining</th>
                <th>Actions</th>
              </tr>
            </thead>
            {book
              .filter((value) => {
                if (search === "") {
                  return value;
                } else if (
                  value.name.toLowerCase().includes(search.toLowerCase())
                ) {
                  return value;
                } else if (
                  value.author.toLowerCase().includes(search.toLowerCase())
                ) {
                  return value;
                }
                return 0;
              })
              .map((index) => {
                return (
                  <tbody key={index.bookid}>
                    <tr>
                      <td key={index.bookTitleId}>{index.name}</td>
                      <td>{index.author}</td>
                      <td>{index.language}</td>
                      <td>{index.total}</td>
                      <td>{index.remaining}</td>
                      <td>
                        <AiOutlineEye className="edit" />
                      </td>
                    </tr>
                  </tbody>
                );
              })}
          </Table>
        </div>
      </div>
    </>
  );
}

export default Studentallbooks;
