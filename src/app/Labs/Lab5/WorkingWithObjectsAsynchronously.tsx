"use client";
import React, { useEffect, useState } from "react";
import * as client from "./client";
import { Form, Button } from "react-bootstrap";

interface Assignment {
  id?: number;
  title?: string;
  description?: string;
  due?: string;
  completed?: boolean;
  score?: number;
}

export default function WorkingWithObjectsAsynchronously() {
  const [assignment, setAssignment] = useState<Assignment>({});

  const fetchAssignment = async () => {
    const assignment = await client.fetchAssignment();
    setAssignment(assignment);
  };

  const updateTitle = async (title: string) => {
    const updatedAssignment = await client.updateTitle(title);
    setAssignment(updatedAssignment);
  };

  useEffect(() => {
    fetchAssignment();
  }, []);

  return (
    <div id="wd-asynchronous-objects">
      <h3>Working with Objects Asynchronously</h3>
      
      <h4>Assignment</h4>
      <Form.Control
        value={assignment.title || ""}
        className="mb-2"
        placeholder="Assignment Title"
        onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
      />
      
      <Form.Control
        as="textarea"
        rows={3}
        value={assignment.description || ""}
        className="mb-2"
        placeholder="Assignment Description"
        onChange={(e) => setAssignment({ ...assignment, description: e.target.value })}
      />
      
      <Form.Control
        type="date"
        className="mb-2"
        value={assignment.due || ""}
        onChange={(e) => setAssignment({ ...assignment, due: e.target.value })}
      />
      
      <div className="form-check form-switch mb-2">
        <input
          className="form-check-input"
          type="checkbox"
          id="wd-completed"
          checked={assignment.completed || false}
          onChange={(e) => setAssignment({ ...assignment, completed: e.target.checked })}
        />
        <label className="form-check-label" htmlFor="wd-completed">
          Completed
        </label>
      </div>
      
      <Button className="btn btn-primary me-2 mb-3" onClick={() => updateTitle(assignment.title || "")}>
        Update Title
      </Button>
      
      <pre>{JSON.stringify(assignment, null, 2)}</pre>
      <hr />
    </div>
  );
}