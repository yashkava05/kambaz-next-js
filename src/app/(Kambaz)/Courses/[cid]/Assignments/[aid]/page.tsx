"use client";
import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addAssignment, updateAssignment } from "../reducer";
import { FormControl, Button, Form, Row, Col } from "react-bootstrap";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const router = useRouter();
  const dispatch = useDispatch();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);

  const [assignment, setAssignment] = useState<any>({
    _id: "",
    title: "New Assignment",
    course: cid,
    description: "New Assignment Description",
    points: 100,
    dueDate: new Date().toISOString().split("T")[0],
    availableFromDate: new Date().toISOString().split("T")[0],
    availableUntilDate: new Date().toISOString().split("T")[0],
  });

  useEffect(() => {
    // If editing existing assignment (aid is not "new")
    if (aid && aid !== "new") {
      const existingAssignment = assignments.find((a: any) => a._id === aid);
      if (existingAssignment) {
        setAssignment(existingAssignment);
      }
    }
  }, [aid, assignments]);

  const handleSave = () => {
    if (aid === "new") {
      // Creating new assignment
      const newAssignment = {
        ...assignment,
        _id: new Date().getTime().toString(),
        course: cid,
      };
      dispatch(addAssignment(newAssignment));
    } else {
      // Updating existing assignment
      dispatch(updateAssignment(assignment));
    }
    router.push(`/Courses/${cid}/Assignments`);
  };

  const handleCancel = () => {
    router.push(`/Courses/${cid}/Assignments`);
  };

  return (
    <div id="wd-assignments-editor" className="p-4">
      <h3>{aid === "new" ? "New Assignment" : "Edit Assignment"}</h3>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="wd-name">Assignment Name</Form.Label>
          <FormControl
            id="wd-name"
            value={assignment.title}
            onChange={(e) =>
              setAssignment({ ...assignment, title: e.target.value })
            }
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="wd-description">Description</Form.Label>
          <FormControl
            as="textarea"
            id="wd-description"
            rows={5}
            value={assignment.description}
            onChange={(e) =>
              setAssignment({ ...assignment, description: e.target.value })
            }
          />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label htmlFor="wd-points">Points</Form.Label>
            <FormControl
              id="wd-points"
              type="number"
              value={assignment.points}
              onChange={(e) =>
                setAssignment({
                  ...assignment,
                  points: parseInt(e.target.value) || 0,
                })
              }
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="wd-group">Assignment Group</Form.Label>
          <Form.Select id="wd-group">
            <option>ASSIGNMENTS</option>
            <option>QUIZZES</option>
            <option>EXAMS</option>
            <option>PROJECT</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="wd-display-grade-as">Display Grade as</Form.Label>
          <Form.Select id="wd-display-grade-as">
            <option>Percentage</option>
            <option>Points</option>
            <option>Complete/Incomplete</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="wd-submission-type">Submission Type</Form.Label>
          <Form.Select id="wd-submission-type">
            <option>Online</option>
            <option>On Paper</option>
            <option>External Tool</option>
          </Form.Select>

          <div className="mt-3 p-3 border">
            <Form.Label>Online Entry Options</Form.Label>
            <Form.Check
              type="checkbox"
              id="wd-text-entry"
              label="Text Entry"
            />
            <Form.Check
              type="checkbox"
              id="wd-website-url"
              label="Website URL"
            />
            <Form.Check
              type="checkbox"
              id="wd-media-recordings"
              label="Media Recordings"
            />
            <Form.Check
              type="checkbox"
              id="wd-student-annotation"
              label="Student Annotation"
            />
            <Form.Check
              type="checkbox"
              id="wd-file-upload"
              label="File Uploads"
            />
          </div>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="wd-assign-to">Assign</Form.Label>
          <div className="border p-3">
            <Form.Label htmlFor="wd-assign-to">Assign to</Form.Label>
            <FormControl id="wd-assign-to" value="Everyone" readOnly />

            <Row className="mt-3">
              <Form.Group as={Col}>
                <Form.Label htmlFor="wd-due-date">Due</Form.Label>
                <FormControl
                  id="wd-due-date"
                  type="date"
                  value={assignment.dueDate}
                  onChange={(e) =>
                    setAssignment({ ...assignment, dueDate: e.target.value })
                  }
                />
              </Form.Group>
            </Row>

            <Row className="mt-3">
              <Form.Group as={Col}>
                <Form.Label htmlFor="wd-available-from">
                  Available from
                </Form.Label>
                <FormControl
                  id="wd-available-from"
                  type="date"
                  value={assignment.availableFromDate}
                  onChange={(e) =>
                    setAssignment({
                      ...assignment,
                      availableFromDate: e.target.value,
                    })
                  }
                />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label htmlFor="wd-available-until">Until</Form.Label>
                <FormControl
                  id="wd-available-until"
                  type="date"
                  value={assignment.availableUntilDate}
                  onChange={(e) =>
                    setAssignment({
                      ...assignment,
                      availableUntilDate: e.target.value,
                    })
                  }
                />
              </Form.Group>
            </Row>
          </div>
        </Form.Group>

        <hr />

        <div className="d-flex justify-content-end">
          <Button variant="secondary" className="me-2" onClick={handleCancel}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleSave}>
            Save
          </Button>
        </div>
      </Form>
    </div>
  );
}