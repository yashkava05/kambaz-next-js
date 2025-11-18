"use client";
import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import axios from "axios";

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER || "http://localhost:4000";
const ASSIGNMENT_API = `${HTTP_SERVER}/lab5/assignment`;
const MODULE_API = `${HTTP_SERVER}/lab5/module`;

export default function WorkingWithObjects() {
  const [assignment, setAssignment] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0,
  });

  const [module, setModule] = useState({
    id: "M101",
    name: "Introduction to NodeJS",
    description: "Learn the basics of NodeJS",
    course: "CS5610",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const assignmentResponse = await axios.get(ASSIGNMENT_API);
        setAssignment(assignmentResponse.data);
        
        const moduleResponse = await axios.get(MODULE_API);
        setModule(moduleResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    
    fetchData();
  }, []);

  return (
    <div id="wd-working-with-objects">
      <h3>Working With Objects</h3>
      
      <h4>Retrieving Objects</h4>
      <a id="wd-retrieve-assignments" className="btn btn-primary me-2 mb-3" href={`${ASSIGNMENT_API}`}>
        Get Assignment
      </a>
      <a id="wd-retrieve-module" className="btn btn-primary mb-3" href={`${MODULE_API}`}>
        Get Module
      </a>
      <hr />
      
      <h4>Retrieving Properties</h4>
      <a id="wd-retrieve-assignment-title" className="btn btn-primary me-2 mb-3" href={`${ASSIGNMENT_API}/title`}>
        Get Assignment Title
      </a>
      <a id="wd-retrieve-module-name" className="btn btn-primary mb-3" href={`${MODULE_API}/name`}>
        Get Module Name
      </a>
      <hr />
      
      <h4>Modifying Properties</h4>
      
      <div className="d-flex mb-3 align-items-center">
        <Form.Control className="flex-grow-1 me-2" id="wd-assignment-title" value={assignment.title} onChange={(e) => setAssignment({ ...assignment, title: e.target.value })} />
        <a id="wd-update-assignment-title" className="btn btn-primary text-nowrap" href={`${ASSIGNMENT_API}/title/${assignment.title}`}>
          Update Assignment Title
        </a>
      </div>
      
      <div className="d-flex mb-3 align-items-center">
        <Form.Control className="flex-grow-1 me-2" id="wd-assignment-score" type="number" value={assignment.score} onChange={(e) => setAssignment({ ...assignment, score: parseInt(e.target.value) })} />
        <a id="wd-update-assignment-score" className="btn btn-primary text-nowrap" href={`${ASSIGNMENT_API}/score/${assignment.score}`}>
          Update Assignment Score
        </a>
      </div>
      
      <div className="d-flex mb-3 align-items-center">
        <div className="form-check flex-grow-1">
          <input className="form-check-input" type="checkbox" id="wd-assignment-completed" checked={assignment.completed} onChange={(e) => setAssignment({ ...assignment, completed: e.target.checked })} />
          <label className="form-check-label" htmlFor="wd-assignment-completed">
            Completed
          </label>
        </div>
        <a id="wd-update-assignment-completed" className="btn btn-primary text-nowrap" href={`${ASSIGNMENT_API}/completed/${assignment.completed}`}>
          Update Assignment Completed
        </a>
      </div>
      
      <div className="d-flex mb-3 align-items-center">
        <Form.Control className="flex-grow-1 me-2" id="wd-module-name" value={module.name} onChange={(e) => setModule({ ...module, name: e.target.value })} />
        <a id="wd-update-module-name" className="btn btn-primary text-nowrap" href={`${MODULE_API}/name/${module.name}`}>
          Update Module Name
        </a>
      </div>
      
      <div className="d-flex mb-3 align-items-center">
        <Form.Control className="flex-grow-1 me-2" id="wd-module-description" value={module.description} onChange={(e) => setModule({ ...module, description: e.target.value })} />
        <a id="wd-update-module-description" className="btn btn-primary text-nowrap" href={`${MODULE_API}/description/${module.description}`}>
          Update Module Description
        </a>
      </div>
      
      <hr />
    </div>
  );
}