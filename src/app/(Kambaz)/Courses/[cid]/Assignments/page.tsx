"use client";
import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setAssignments, deleteAssignment } from "./reducer";
import * as courseClient from "../../client";
import * as assignmentsClient from "./client";
import { ListGroup, Button, Form } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import { BsGripVertical } from "react-icons/bs";
import Link from "next/link";

export default function Assignments() {
  const { cid } = useParams();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const dispatch = useDispatch();
  const router = useRouter();

  const fetchAssignments = async () => {
    const assignments = await courseClient.findAssignmentsForCourse(cid as string);
    dispatch(setAssignments(assignments));
  };

  const removeAssignment = async (assignmentId: string) => {
    await assignmentsClient.deleteAssignment(assignmentId);
    dispatch(deleteAssignment(assignmentId));
  };

  useEffect(() => {
    fetchAssignments();
  }, [cid]);

  return (
    <div id="wd-assignments">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <Form.Control
          placeholder="Search for Assignments"
          id="wd-search-assignment"
          className="w-50"
        />
        {currentUser?.role === "FACULTY" && (
          <div>
            <Button id="wd-add-assignment-group" className="me-2">
              + Group
            </Button>
            <Button
              id="wd-add-assignment"
              onClick={() => router.push(`/Courses/${cid}/Assignments/new`)}
            >
              + Assignment
            </Button>
          </div>
        )}
      </div>

      <h3 id="wd-assignments-title">
        ASSIGNMENTS 40% of Total
        {currentUser?.role === "FACULTY" && <Button className="ms-2">+</Button>}
      </h3>

      <ListGroup id="wd-assignment-list">
        {assignments.map((assignment: any) => (
          <ListGroup.Item key={assignment._id} className="wd-assignment-list-item">
            <div className="d-flex align-items-center">
              <BsGripVertical className="me-2 fs-3" />
              <div className="flex-grow-1">
                <Link
                  href={`/Courses/${cid}/Assignments/${assignment._id}`}
                  className="wd-assignment-link text-decoration-none text-dark"
                >
                  <strong>{assignment.title}</strong>
                </Link>
                <div className="text-muted small">
                  <span className="text-danger">Multiple Modules</span> |{" "}
                  <strong>Not available until</strong> {assignment.availableFromDate} |<br />
                  <strong>Due</strong> {assignment.dueDate} | {assignment.points} pts
                </div>
              </div>
              {currentUser?.role === "FACULTY" && (
                <FaTrash
                  className="text-danger"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    if (window.confirm("Are you sure you want to delete this assignment?")) {
                      removeAssignment(assignment._id);
                    }
                  }}
                />
              )}
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}