"use client";
import { useParams, useRouter } from "next/navigation";
import { FaPlus } from "react-icons/fa6";
import { BsGripVertical } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { deleteAssignment } from "./reducer";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { ListGroup, ListGroupItem, Button, FormControl } from "react-bootstrap";
import Link from "next/link";

export default function Assignments() {
  const { cid } = useParams();
  const router = useRouter();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const dispatch = useDispatch();

  const removeAssignment = (assignmentId: string) => {
    if (window.confirm("Are you sure you want to delete this assignment?")) {
      dispatch(deleteAssignment(assignmentId));
    }
  };

  return (
    <div id="wd-assignments" className="p-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <FormControl
          placeholder="Search for Assignments"
          id="wd-search-assignment"
          className="w-50"
        />
        {currentUser && currentUser.role === "FACULTY" && (
          <div>
            <Button
              variant="secondary"
              className="me-2"
              id="wd-add-assignment-group"
            >
              <FaPlus className="me-1" />
              Group
            </Button>
            <Button
              variant="danger"
              id="wd-add-assignment"
              onClick={() => router.push(`/Courses/${cid}/Assignments/new`)}
            >
              <FaPlus className="me-1" />
              Assignment
            </Button>
          </div>
        )}
      </div>

      <div className="wd-title p-3 ps-2 bg-secondary border border-gray">
        <BsGripVertical className="me-2 fs-3" />
        ASSIGNMENTS 40% of Total
        {currentUser && currentUser.role === "FACULTY" && (
          <Button variant="outline-secondary" size="sm" className="float-end">
            <FaPlus />
          </Button>
        )}
      </div>

      <ListGroup id="wd-assignment-list" className="rounded-0">
        {assignments
          .filter((assignment: any) => assignment.course === cid)
          .map((assignment: any) => (
            <ListGroupItem
              key={assignment._id}
              className="wd-assignment-list-item p-3 ps-1 d-flex justify-content-between align-items-start border-start border-success border-3"
            >
              <div className="d-flex align-items-start w-100">
                <BsGripVertical className="me-2 fs-3" />
                <div className="flex-grow-1">
                  {/* THIS IS THE KEY - Make sure Link is properly wrapping the title */}
                  <Link
                    href={`/Courses/${cid}/Assignments/${assignment._id}`}
                    className="wd-assignment-link text-decoration-none text-dark fw-bold d-block"
                  >
                    {assignment.title}
                  </Link>
                  <div className="text-muted small mt-1">
                    <span className="text-danger">Multiple Modules</span> |{" "}
                    <strong>Not available until</strong>{" "}
                    {assignment.availableFromDate} |
                    <br />
                    <strong>Due</strong> {assignment.dueDate} |{" "}
                    {assignment.points} pts
                  </div>
                </div>
              </div>
              {currentUser && currentUser.role === "FACULTY" && (
                <AssignmentControlButtons
                  assignmentId={assignment._id}
                  deleteAssignment={removeAssignment}
                />
              )}
            </ListGroupItem>
          ))}
      </ListGroup>
    </div>
  );
}