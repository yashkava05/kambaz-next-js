"use client";
import { useParams } from "next/navigation";
import { BsGripVertical } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";
import { IoEllipsisVertical } from "react-icons/io5";
import Link from "next/link";
import * as db from "../../../Database";

export default function Assignments() {
  const { cid } = useParams();
  const assignments = db.assignments;

  return (
    <div id="wd-assignments">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <input 
          placeholder="Search for Assignments"
          id="wd-search-assignment"
          className="form-control w-50"
        />
        <div>
          <button id="wd-add-assignment-group" className="btn btn-secondary me-2">
            <FaPlus className="me-1" /> Group
          </button>
          <button id="wd-add-assignment" className="btn btn-danger">
            <FaPlus className="me-1" /> Assignment
          </button>
        </div>
      </div>

      <h3 id="wd-assignments-title" className="text-danger">
        ASSIGNMENTS 40% of Total
      </h3>

      <ul id="wd-assignment-list" className="list-group rounded-0">
        {assignments
          .filter((assignment: any) => assignment.course === cid)
          .map((assignment: any) => (
            <li key={assignment._id} className="wd-assignment-list-item list-group-item p-3 ps-1">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <BsGripVertical className="me-2 fs-3" />
                  <Link
                    href={`/Courses/${cid}/Assignments/${assignment._id}`}
                    className="wd-assignment-link text-decoration-none text-dark fw-bold"
                  >
                    {assignment.title}
                  </Link>
                  <div className="text-muted small ms-5">
                    <span className="text-danger">Multiple Modules</span> | <b>Not available until</b> {assignment.availableFromDate} |
                    <br />
                    <b>Due</b> {assignment.dueDate} | {assignment.points} pts
                  </div>
                </div>
                <div>
                  <IoEllipsisVertical className="fs-4" />
                </div>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}