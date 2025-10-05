import Link from "next/link";
import { BsGripVertical, BsSearch } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";
import { IoEllipsisVertical } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";
import { PiNotePencilBold } from "react-icons/pi";

export default function Assignments() {
  return (
    <div id="wd-assignments" className="p-3">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div className="input-group w-50">
          <span className="input-group-text">
            <BsSearch />
          </span>
          <input 
            className="form-control"
            placeholder="Search for Assignments" 
            id="wd-search-assignment"
          />
        </div>
        <div>
          <button id="wd-add-assignment-group" className="btn btn-secondary me-2">
            <FaPlus className="me-1" />
            Group
          </button>
          <button id="wd-add-assignment" className="btn btn-danger">
            <FaPlus className="me-1" />
            Assignment
          </button>
        </div>
      </div>

      <ul id="wd-assignment-list" className="list-group rounded-0">
        <li className="wd-assignment list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            ASSIGNMENTS 40% of Total
            <FaCheckCircle className="text-success ms-2" />
            <FaPlus className="float-end fs-4" />
            <IoEllipsisVertical className="float-end fs-4 me-2" />
          </div>
          
          <ul className="wd-lessons list-group rounded-0">
            <li className="wd-assignment-list-item wd-lesson list-group-item p-3 ps-1 border-gray">
              <BsGripVertical className="me-2 fs-3" />
              <PiNotePencilBold className="me-2 fs-5 text-success" />
              <Link href="/Courses/1234/Assignments/123" className="wd-assignment-link text-decoration-none text-dark fw-bold">
                A1 - ENV + HTML
              </Link>
              <IoEllipsisVertical className="float-end fs-4" />
              <FaCheckCircle className="text-success float-end me-2 fs-5" />
              <div className="mt-1 small">
                <span className="text-danger">Multiple Modules</span> | <b>Not available until</b> May 6 at 12:00am |
                <br />
                <b>Due</b> May 13 at 11:59pm | 100 pts
              </div>
            </li>

            <li className="wd-assignment-list-item wd-lesson list-group-item p-3 ps-1 border-gray">
              <BsGripVertical className="me-2 fs-3" />
              <PiNotePencilBold className="me-2 fs-5 text-success" />
              <Link href="/Courses/1234/Assignments/2" className="wd-assignment-link text-decoration-none text-dark fw-bold">
                A2 - CSS + BOOTSTRAP
              </Link>
              <IoEllipsisVertical className="float-end fs-4" />
              <FaCheckCircle className="text-success float-end me-2 fs-5" />
              <div className="mt-1 small">
                <span className="text-danger">Multiple Modules</span> | <b>Not available until</b> May 13 at 12:00am |
                <br />
                <b>Due</b> May 20 at 11:59pm | 100 pts
              </div>
            </li>

            <li className="wd-assignment-list-item wd-lesson list-group-item p-3 ps-1 border-gray">
              <BsGripVertical className="me-2 fs-3" />
              <PiNotePencilBold className="me-2 fs-5 text-success" />
              <Link href="/Courses/1234/Assignments/3" className="wd-assignment-link text-decoration-none text-dark fw-bold">
                A3 - JAVASCRIPT + REACT
              </Link>
              <IoEllipsisVertical className="float-end fs-4" />
              <FaCheckCircle className="text-success float-end me-2 fs-5" />
              <div className="mt-1 small">
                <span className="text-danger">Multiple Modules</span> | <b>Not available until</b> May 20 at 12:00am |
                <br />
                <b>Due</b> May 27 at 11:59pm | 100 pts
              </div>
            </li>
          </ul>
        </li>
      </ul>

      <ul className="list-group rounded-0 mt-4">
        <li className="wd-assignment list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            QUIZZES 10% of Total
            <FaPlus className="float-end fs-4" />
            <IoEllipsisVertical className="float-end fs-4 me-2" />
          </div>
        </li>
      </ul>

      <ul className="list-group rounded-0 mt-4">
        <li className="wd-assignment list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            EXAMS 20% of Total
            <FaPlus className="float-end fs-4" />
            <IoEllipsisVertical className="float-end fs-4 me-2" />
          </div>
        </li>
      </ul>

      <ul className="list-group rounded-0 mt-4">
        <li className="wd-assignment list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            PROJECT 30% of Total
            <FaPlus className="float-end fs-4" />
            <IoEllipsisVertical className="float-end fs-4 me-2" />
          </div>
        </li>
      </ul>
    </div>
  );
}