import React, { useContext, useState } from "react";
import Table from "react-bootstrap/Table";
import { useParams } from "react-router";
import { BookContext, StudentContext, IssueContext } from "../App";
import Studentdashboard from "./Studentdashboard";
import { nanoid } from "nanoid";

function Mybooks() {
  const obj = useParams();
  const [book] = useContext(BookContext);
  const [student] = useContext(StudentContext);
  const [issue] = useContext(IssueContext);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");

  const tempStudent = issue.map((item) => {
    let objStudent = {
      viewid: nanoid(),
      key: item.key,
      book: "",
      author: "",
      issuedate: item.issues,
      duedate: item.due,
      fine: item.key,
    };

    book.map((book) => {
      if (item.books === book.bookTitleId) {
        objStudent.book = book.name;
        objStudent.author = book.author;
      }
    });
    student.map((student) => {
      if (item.students === student.studentTitleId) {
        objStudent.key = student.studentTitleId;
      }
    });
    return objStudent;
  });
  const handleSort = (e) => {
    setSort(e.target.value);
    if (sort === "new") {
      issue.sort((objA, objB) => new Date(objA.issues) - new Date(objB.issues));
    }
    if (sort === "old") {
      issue.sort((objA, objB) => new Date(objB.issues) - new Date(objA.issues));
    }
  };

  return (
    <>
      <div className="d-flex col">
        <Studentdashboard />
        <div className="container2 text-nowrap p-5">
          <h5>My Books</h5>
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
            <div className="d-flex col gap-3 justify-content-end">
              <p>Sort by:</p>
              <select
                className="form-select bg-light"
                aria-label="Default select example"
                style={{ width: "10rem" }}
                onClick={handleSort}
              >
                <option></option>
                <option value="new">Newest</option>
                <option value="old">Oldest</option>
              </select>
            </div>
          </div>
          <div className="form-tab">
            <p className="d-flex gap-5">
              <label>Issued Books</label>
              <label>Pending to return</label>
              <label>Returned Books</label>
            </p>
          </div>
          <Table hover>
            <thead>
              <tr>
                <th>Book Title</th>
                <th>Author</th>
                <th>Issue Date</th>
                <th>Due Date</th>
                <th>Return Date</th>
                <th>
                  Fine <br />
                  (Rs.10 per day)
                </th>
              </tr>
            </thead>
            {tempStudent
              .filter((value) => {
                if (search === "") {
                  return value;
                } else if (
                  value.book.toLowerCase().includes(search.toLowerCase())
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
                if (index.key === obj.studentid) {
                  return (
                    <tbody>
                      <tr>
                        <td>{index.book}</td>
                        <td>{index.author}</td>
                        <td>{index.issuedate}</td>
                        <td>{index.duedate}</td>
                        <td>-</td>
                        <td>{index.fine}</td>
                      </tr>
                    </tbody>
                  );
                }
              })}
            {/* <tbody>
                            <tr>
                                <td>It Start With Us</td>
                                <td>Colleen Hoover</td>
                                <td>10-11-2022</td>
                                <td>18-11-2022</td>
                                <td>18-11-2022</td>
                                <td>0</td>
                            </tr>
                        </tbody> */}
          </Table>
        </div>
      </div>
    </>
  );
}

export default Mybooks;
