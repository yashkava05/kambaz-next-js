"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import * as db from "../../../../Database";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const assignments = db.assignments;
  const assignment = assignments.find((a: any) => a._id === aid);

  if (!assignment) {
    return <div>Assignment not found</div>;
  }

  return (
    <div id="wd-assignments-editor" className="p-3">
      <div className="mb-3">
        <label htmlFor="wd-name" className="form-label">Assignment Name</label>
        <input 
          id="wd-name" 
          className="form-control"
          defaultValue={assignment.title} 
        />
      </div>

      <div className="mb-3">
        <label htmlFor="wd-description" className="form-label">Description</label>
        <textarea 
          id="wd-description"
          className="form-control"
          rows={5}
          defaultValue={assignment.description}
        />
      </div>

      <div className="row mb-3">
        <div className="col-md-3">
          <label htmlFor="wd-points" className="form-label">Points</label>
        </div>
        <div className="col-md-9">
          <input 
            id="wd-points" 
            className="form-control"
            type="number"
            defaultValue={assignment.points} 
          />
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-3">
          <label htmlFor="wd-group" className="form-label">Assignment Group</label>
        </div>
        <div className="col-md-9">
          <select id="wd-group" className="form-select">
            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
            <option value="QUIZZES">QUIZZES</option>
            <option value="EXAMS">EXAMS</option>
            <option value="PROJECT">PROJECT</option>
          </select>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-3">
          <label htmlFor="wd-display-grade-as" className="form-label">Display Grade as</label>
        </div>
        <div className="col-md-9">
          <select id="wd-display-grade-as" className="form-select">
            <option value="PERCENTAGE">Percentage</option>
            <option value="POINTS">Points</option>
            <option value="COMPLETE_INCOMPLETE">Complete/Incomplete</option>
          </select>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-3">
          <label htmlFor="wd-submission-type" className="form-label">Submission Type</label>
        </div>
        <div className="col-md-9">
          <select id="wd-submission-type" className="form-select">
            <option value="ONLINE">Online</option>
            <option value="ON_PAPER">On Paper</option>
            <option value="EXTERNAL_TOOL">External Tool</option>
          </select>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-3"></div>
        <div className="col-md-9">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="wd-text-entry" />
            <label className="form-check-label" htmlFor="wd-text-entry">
              Text Entry
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="wd-website-url" />
            <label className="form-check-label" htmlFor="wd-website-url">
              Website URL
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="wd-media-recordings" />
            <label className="form-check-label" htmlFor="wd-media-recordings">
              Media Recordings
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="wd-student-annotation" />
            <label className="form-check-label" htmlFor="wd-student-annotation">
              Student Annotation
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="wd-file-upload" />
            <label className="form-check-label" htmlFor="wd-file-upload">
              File Uploads
            </label>
          </div>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-3">
          <label htmlFor="wd-assign-to" className="form-label">Assign to</label>
        </div>
        <div className="col-md-9">
          <input 
            id="wd-assign-to" 
            className="form-control"
            defaultValue="Everyone" 
          />
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-3">
          <label htmlFor="wd-due-date" className="form-label">Due</label>
        </div>
        <div className="col-md-9">
          <input 
            id="wd-due-date" 
            className="form-control"
            type="date"
            defaultValue={assignment.dueDate}
          />
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-3">
          <label htmlFor="wd-available-from" className="form-label">Available from</label>
        </div>
        <div className="col-md-9">
          <input 
            id="wd-available-from" 
            className="form-control"
            type="date"
            defaultValue={assignment.availableFromDate}
          />
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-3">
          <label htmlFor="wd-available-until" className="form-label">Until</label>
        </div>
        <div className="col-md-9">
          <input 
            id="wd-available-until" 
            className="form-control"
            type="date"
            defaultValue={assignment.availableUntilDate}
          />
        </div>
      </div>

      <hr />

      <div className="d-flex justify-content-end">
        <Link 
          href={`/Courses/${cid}/Assignments`}
          className="btn btn-secondary me-2"
        >
          Cancel
        </Link>
        <Link 
          href={`/Courses/${cid}/Assignments`}
          className="btn btn-danger"
        >
          Save
        </Link>
      </div>
    </div>
  );
}