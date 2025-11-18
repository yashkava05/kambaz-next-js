"use client";
import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addAssignment, updateAssignment } from "../reducer";
import * as courseClient from "../../../client";
import * as assignmentsClient from "../client";
import { Form, Button } from "react-bootstrap";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const router = useRouter();
  const dispatch = useDispatch();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  
  const [assignment, setAssignment] = useState({
    _id: "",
    title: "New Assignment",
    course: cid as string,
    description: "New Assignment Description",
    points: 100,
    dueDate: "2024-05-13",
    availableFromDate: "2024-05-06",
    availableUntilDate: "2024-05-20",
  });

  const fetchAssignment = () => {
    if (aid === "new") {
      return;
    }
    const foundAssignment = assignments.find((a: any) => a._id === aid);
    if (foundAssignment) {
      setAssignment(foundAssignment);
    }
  };

  const saveAssignment = async () => {
    if (aid === "new") {
      const newAssignment = await courseClient.createAssignmentForCourse(cid as string, assignment);
      dispatch(addAssignment(newAssignment));
    } else {
      await assignmentsClient.updateAssignment(assignment);
      dispatch(updateAssignment(assignment));
    }
    router.push(`/Courses/${cid}/Assignments`);
  };

  useEffect(() => {
    fetchAssignment();
  }, [aid]);

  return (
    <div id="wd-assignments-editor" className="p-3">
      <h3>{aid === "new" ? "New Assignment" : "Edit Assignment"}</h3>
      
      <Form.Group className="mb-3">
        <Form.Label htmlFor="wd-name">Assignment Name</Form.Label>
        <Form.Control
          id="wd-name"
          value={assignment.title}
          onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label htmlFor="wd-description">Description</Form.Label>
        <Form.Control
          as="textarea"
          id="wd-description"
          rows={5}
          value={assignment.description}
          onChange={(e) => setAssignment({ ...assignment, description: e.target.value })}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label htmlFor="wd-points">Points</Form.Label>
        <Form.Control
          id="wd-points"
          type="number"
          value={assignment.points}
          onChange={(e) => setAssignment({ ...assignment, points: parseInt(e.target.value) })}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label htmlFor="wd-due-date">Due Date</Form.Label>
        <Form.Control
          id="wd-due-date"
          type="date"
          value={assignment.dueDate}
          onChange={(e) => setAssignment({ ...assignment, dueDate: e.target.value })}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label htmlFor="wd-available-from">Available From</Form.Label>
        <Form.Control
          id="wd-available-from"
          type="date"
          value={assignment.availableFromDate}
          onChange={(e) => setAssignment({ ...assignment, availableFromDate: e.target.value })}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label htmlFor="wd-available-until">Available Until</Form.Label>
        <Form.Control
          id="wd-available-until"
          type="date"
          value={assignment.availableUntilDate}
          onChange={(e) => setAssignment({ ...assignment, availableUntilDate: e.target.value })}
        />
      </Form.Group>

      <div className="d-flex gap-2">
        <Button variant="danger" onClick={() => router.push(`/Courses/${cid}/Assignments`)}>
          Cancel
        </Button>
        <Button variant="success" onClick={saveAssignment}>
          Save
        </Button>
      </div>
    </div>
  );
}