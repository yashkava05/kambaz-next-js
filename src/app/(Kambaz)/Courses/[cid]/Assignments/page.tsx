"use client";
import { useParams } from "next/navigation";
import { setAssignments, addAssignment, deleteAssignment } from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import * as courseClient from "../../client";
import * as assignmentsClient from "./client";

export default function Assignments() {
  const { cid } = useParams();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const dispatch = useDispatch();

  const fetchAssignmentsForCourse = async () => {
    const assignments = await courseClient.findAssignmentsForCourse(cid as string);
    dispatch(setAssignments(assignments));
  };

  const createAssignment = async () => {
    const newAssignment = await courseClient.createAssignmentForCourse(cid as string, {
      title: "New Assignment",
      course: cid,
      description: "New Assignment Description",
      points: 100,
      dueDate: new Date(),
      availableDate: new Date(),
      availableUntilDate: new Date(),
    });
    dispatch(addAssignment(newAssignment));
  };

  const removeAssignment = async (assignmentId: string) => {
    await assignmentsClient.deleteAssignment(assignmentId);
    dispatch(deleteAssignment(assignmentId));
  };

  useEffect(() => {
    fetchAssignmentsForCourse();
  }, [cid]);

  return (
    <div id="wd-assignments">
      <input placeholder="Search for Assignments" id="wd-search-assignment" />
      <button id="wd-add-assignment-group">+ Group</button>
      <button id="wd-add-assignment" onClick={createAssignment}>
        + Assignment
      </button>
      
      <h3 id="wd-assignments-title">
        ASSIGNMENTS 40% of Total <button>+</button>
      </h3>
      
      <ul id="wd-assignment-list">
        {assignments.map((assignment: any) => (
          <li key={assignment._id} className="wd-assignment-list-item">
            <a href={`/Courses/${cid}/Assignments/${assignment._id}`} className="wd-assignment-link">
              {assignment.title}
            </a>
            <button onClick={() => removeAssignment(assignment._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}